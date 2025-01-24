from django.db import models

class UploadedImage(models.Model):
    image = models.ImageField(upload_to='uploads/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
    processed_data = models.JSONField(blank=True, null=True)  # To store results from YOLO or analysis

    def __str__(self):
        return f"Image {self.id} uploaded at {self.uploaded_at}"
