import requests
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

API_KEY = "TLchfqYPHtwg1QqHrTwwQ"

@csrf_exempt
def calculate_vehicle_footprint(request):
    if request.method == "POST":
        data = json.loads(request.body)
        distance_unit = data.get("distance_unit")
        distance_value = data.get("distance_value")
        vehicle_model_id = data.get("vehicle_model_id")

        response = requests.post(
            "https://www.carboninterface.com/api/v1/estimates",
            headers={
                "Authorization": f"Bearer {API_KEY}",
                "Content-Type": "application/json",
            },
            json={
                "type": "vehicle",
                "distance_unit": distance_unit,
                "distance_value": distance_value,
                "vehicle_model_id": vehicle_model_id,
            },
        )

        return JsonResponse(response.json())

    return JsonResponse({"error": "Invalid request method"}, status=400)
