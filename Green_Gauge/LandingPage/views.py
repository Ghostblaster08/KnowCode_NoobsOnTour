from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

def home_dashboard(request):
    return render(request, 'home/dashboard.html')

def login_view(request):
    return render(request,'login.html')

def signup_view(request):
    return render(request,'signup.html')
