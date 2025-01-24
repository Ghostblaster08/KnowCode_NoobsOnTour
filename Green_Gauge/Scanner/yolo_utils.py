import torch

def detect_product(image_path):
    # Load YOLO model (pretrained)
    model = torch.hub.load('ultralytics/yolov5', 'yolov5s', pretrained=True)

    # Perform inference
    results = model(image_path)

    # Extract detected objects
    detections = results.pandas().xyxy[0]
    return detections[['name', 'confidence']].to_dict(orient='records')

def get_product_details(product_name):
    # Mock database for product details
    product_data = {
        'plastic bottle': {'carbon_footprint': 3.2, 'sustainability_rating': 2},
        'glass bottle': {'carbon_footprint': 1.5, 'sustainability_rating': 4},
    }
    return product_data.get(product_name.lower(), {'carbon_footprint': 0, 'sustainability_rating': 0})
