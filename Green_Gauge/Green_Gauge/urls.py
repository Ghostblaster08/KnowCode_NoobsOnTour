# Green_Gauge/urls.py
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
<<<<<<< HEAD
    path('', include('LandingPage.urls')),  # Landing page route
       path('api/scanner/', include('Scanner.urls')),  # API route for image upload (scanner)
=======
    path('', include('LandingPage.urls')),  
    path('quiz/', include('Trivia_Quizzes.urls')),
<<<<<<< HEAD
    path('api/users/', include('users.urls')),
=======
>>>>>>> 2f9f14e16991448ef73cd03c7f8cc0ab397c4a21
>>>>>>> 6bfe6461a7939b38d29e8148c181b7486fd51ba9
]

# Serve media files during development (uploads, etc.)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
