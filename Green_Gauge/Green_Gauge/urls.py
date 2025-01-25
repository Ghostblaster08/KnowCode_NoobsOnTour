from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('LandingPage.urls')),  # Landing page route
    path('api/scanner/', include('Scanner.urls')),  # API route for image upload (scanner)
    path('quiz/', include('Trivia_Quizzes.urls')),  # Trivia quizzes route
    path('api/users/', include('users.urls')),  # Users API route
     path('api/scanner/', include('barcode.urls')),
]
