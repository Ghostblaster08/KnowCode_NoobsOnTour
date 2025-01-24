from django.http import JsonResponse
import requests

# Botpress API credentials
BOT_ID = "f25a29fb-455b-43a8-be18-aa2f39869c63"
CLIENT_ID = "3b20b257-3f3d-4fcc-9916-832773a4457a"
BOTPRESS_API_URL = f"https://cdn.botpress.cloud/v2/{BOT_ID}/converse"

def chatbot_response(request):
    if request.method == "POST":
        user_message = request.POST.get("message", "")
        headers = {
            "Authorization": f"Bearer {CLIENT_ID}",
            "Content-Type": "application/json"
        }
        payload = {
            "type": "text",
            "text": user_message
        }
        
        try:
            # Make request to Botpress API
            response = requests.post(BOTPRESS_API_URL, json=payload, headers=headers)
            response_data = response.json()

            # Extract response message
            bot_response = response_data.get("responses", [{}])[0].get("text", "Sorry, I couldn't understand that.")
            return JsonResponse({"response": bot_response})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
    return JsonResponse({"error": "Invalid request method"}, status=400)
