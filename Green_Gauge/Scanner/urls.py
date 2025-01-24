from django.urls import path
from .views import ImageUploadView, BarcodeLookupView

urlpatterns = [
    path("api/scanner/scan/", ImageUploadView.as_view(), name="image-upload"),
    path("api/scanner/barcode/<str:barcode>/", BarcodeLookupView.as_view(), name="barcode-lookup"),
]
