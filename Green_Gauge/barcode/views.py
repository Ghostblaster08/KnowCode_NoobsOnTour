import requests
from django.http import JsonResponse
from pyzbar.pyzbar import decode
from PIL import Image
import io

def barcode_scanner(request, barcode):
    try:
        # Make a request to the OpenFood API with the barcode
        url = f"https://world.openfoodfacts.org/api/v0/product/{barcode}.json"
        response = requests.get(url)

        if response.status_code == 200:
            data = response.json()
            if data.get("status") == 1:  # If the product was found
                product_info = {
                    "product_name": data.get("product", {}).get("product_name", "Unknown Product"),
                    "eco_rating": data.get("product", {}).get("ecoscore_data", {}).get("eco_score", "Not Available"),
                    "ingredients": data.get("product", {}).get("ingredients_text", "Not Available"),
                    "barcode": barcode
                }
                return JsonResponse(product_info)
            else:
                return JsonResponse({"error": "Product not found"}, status=404)
        else:
            return JsonResponse({"error": "Failed to fetch product data from OpenFood API"}, status=500)
    
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)
