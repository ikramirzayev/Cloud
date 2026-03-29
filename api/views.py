from django.shortcuts import render

from rest_framework import viewsets
from .models import Gorev
from .serializers import GorevSerializer

class GorevView(viewsets.ModelViewSet):
    queryset = Gorev.objects.all()
    serializer_class = GorevSerializer