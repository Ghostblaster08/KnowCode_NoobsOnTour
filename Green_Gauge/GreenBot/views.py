from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def chatbot_response(request):
    user_message = request.data.get('message', '')
    # Add chatbot logic here
    response_message = f"You said: {user_message}"
    return Response({"response": response_message})
