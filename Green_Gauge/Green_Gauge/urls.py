# Green_Gauge/urls.py
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('LandingPage.urls')),  # Landing page route
    path('api/scanner/', include('Scanner.urls')),  # API route for image upload (scanner)
    path('quiz/', include('Trivia_Quizzes.urls')),
]

# Serve media files during development (uploads, etc.)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
