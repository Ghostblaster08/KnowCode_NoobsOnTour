from django.urls import path
from . import views

urlpatterns = [
    path('', views.landing_page, name='landing_page'),  # Root URL
    path('logsign/logsign.html', views.logsign, name='logsign'), #Logsign URL
]
