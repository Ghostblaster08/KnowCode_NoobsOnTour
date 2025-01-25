from django.urls import path
from .views import barcode_scanner

urlpatterns = [
    path('barcode/<str:barcode>/', barcode_scanner, name='barcode_scanner'),
]
