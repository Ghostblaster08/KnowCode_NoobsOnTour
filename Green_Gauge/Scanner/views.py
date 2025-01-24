from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from rest_framework.permissions import AllowAny
from yolov5.models.common import DetectMultiBackend
from yolov5.utils.torch_utils import select_device
from yolov5.utils.general import non_max_suppression
from PIL import Image
import numpy as np
import torch
import requests
import os
from django.conf import settings

class ImageUploadView(APIView):
    parser_classes = [MultiPartParser]
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        image_file = request.data.get("image")
        if not image_file:
            return Response({"error": "No image provided."}, status=400)

        temp_dir = os.path.join(settings.BASE_DIR, 'temp_images')
        os.makedirs(temp_dir, exist_ok=True)
        temp_path = os.path.join(temp_dir, image_file.name)

        with open(temp_path, "wb") as f:
            for chunk in image_file.chunks():
                f.write(chunk)

        result = self.process_image(temp_path)
        os.remove(temp_path)
        return Response(result, status=200)

    def process_image(self, image_path):
        device = select_device('')
        model = DetectMultiBackend('yolov5s.pt', device=device)
        model.eval()

        img = Image.open(image_path).convert("RGB")
        img_resized = np.array(img.resize((640, 640)))
        img_tensor = torch.from_numpy(img_resized).permute(2, 0, 1).float() / 255.0
        img_tensor = img_tensor.unsqueeze(0).to(device)

        results = model(img_tensor)
        detections = non_max_suppression(results, conf_thres=0.25, iou_thres=0.45)[0]

        data = []
        if detections is not None:
            detections = detections.cpu().numpy()
            for detection in detections:
                x1, y1, x2, y2, conf, cls = detection[:6]
                label = model.names[int(cls)]
                data.append({"label": label, "confidence": round(float(conf), 2)})
        return {"detected_objects": data}

class BarcodeLookupView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, barcode, *args, **kwargs):
        url = f"https://world.openfoodfacts.org/api/v0/product/{barcode}.json"
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            if data.get("status") == 1:
                product = data["product"]
                eco_rating = product.get("ecoscore_grade", "Unknown")
                return Response({"product_name": product.get("product_name", "Unknown"), "eco_rating": eco_rating}, status=200)
            else:
                return Response({"error": "Product not found."}, status=404)
        return Response({"error": "Failed to fetch data."}, status=500)
