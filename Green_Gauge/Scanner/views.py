# Scanner/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from rest_framework.permissions import AllowAny
from rest_framework import status
from yolov5.models.common import DetectMultiBackend
from yolov5.utils.torch_utils import select_device
from yolov5.utils.general import non_max_suppression
from PIL import Image
import numpy as np
import torch
import os
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
class ImageUploadView(APIView):
    parser_classes = [MultiPartParser]
    permission_classes = [AllowAny] 
    def post(self, request, *args, **kwargs):
        image_file = request.data.get("image")
        if not image_file:
            return Response({"error": "No image provided."}, status=status.HTTP_400_BAD_REQUEST)

        # Use a temporary directory inside your project for saving images
        temp_dir = os.path.join(settings.BASE_DIR, 'temp_images')  # You can create a 'temp_images' directory
        os.makedirs(temp_dir, exist_ok=True)  # Ensure the directory exists

        temp_path = os.path.join(temp_dir, image_file.name)

        # Save the uploaded image temporarily
        with open(temp_path, "wb") as f:
            for chunk in image_file.chunks():
                f.write(chunk)

        # Process the image
        result = self.process_image(temp_path)

        # Clean up and return results
        os.remove(temp_path)
        return Response(result, status=status.HTTP_200_OK)

    def process_image(self, image_path):
        device = select_device('')  # Auto select device (GPU if available)
        model = DetectMultiBackend('yolov5s.pt', device=device)
        model.eval()

        # Open image and prepare it for YOLO model
        img = Image.open(image_path).convert("RGB")
        img_resized = np.array(img.resize((640, 640)))
        img_tensor = torch.from_numpy(img_resized).permute(2, 0, 1).float() / 255.0
        img_tensor = img_tensor.unsqueeze(0).to(device)

        # Run the model on the image
        results = model(img_tensor)
        detections = non_max_suppression(results, conf_thres=0.25, iou_thres=0.45)[0]

        # Prepare the detection data
        data = []
        if detections is not None:
            detections = detections.cpu().numpy()
            for detection in detections:
                x1, y1, x2, y2, conf, cls = detection[:6]
                label = model.names[int(cls)]
                data.append({
                    "label": label,
                    "confidence": round(float(conf), 2),
                    "bbox": {"x1": int(x1), "y1": int(y1), "x2": int(x2), "y2": int(y2)}
                })

        return {"detected_objects": data}