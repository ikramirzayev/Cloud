from django.contrib import admin
from .models import Gorev # Kendi oluşturduğun modeli içeri al

# Django'ya bu modeli admin panelinde göster diyoruz
admin.site.register(Gorev)