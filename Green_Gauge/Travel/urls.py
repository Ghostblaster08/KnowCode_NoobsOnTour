from django.urls import path
from .views import calculate_vehicle_footprint

urlpatterns = [
    path("vehicle-footprint/", calculate_vehicle_footprint, name="vehicle_footprint"),
]
