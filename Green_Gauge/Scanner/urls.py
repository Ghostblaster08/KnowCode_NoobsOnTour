# Scanner/urls.py
from django.urls import path
from .views import ImageUploadView  # Import the class-based view

urlpatterns = [
   path('scan/', ImageUploadView.as_view(), name='image-upload'),  # Use .as_view() to call the class-based view
]
