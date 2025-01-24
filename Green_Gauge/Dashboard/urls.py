from django.urls import path, include

urlpatterns = [
    path('greenbot/', include('GreenBot.urls')),  # Include GreenBot APIs
]
