from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_dashboard, name='home_dashboard'),  # Root URL
    path('landing_page/landing_page.html', views.landing_page, name='home_dashboard'),  # Dashboard URL
    path('logsign/logsign.html', views.logsign, name='logsign'), #Logsign URL
]
