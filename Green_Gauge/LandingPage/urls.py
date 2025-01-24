from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_dashboard, name='home_dashboard'),  # Root URL
    path('dashboard/', views.home_dashboard, name='home_dashboard'),  # Dashboard URL
    path('login/', views.login_view, name='login'), #Login URL
    path('signup/', views.signup_view, name='signup'), #Login URL
]
