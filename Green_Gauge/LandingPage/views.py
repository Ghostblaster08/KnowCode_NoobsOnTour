from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

def landing_page(request):
    return render(request, 'landing_page/landing-page.html')

def logsign(request):
    return render(request,'logsign/logsign.html')


