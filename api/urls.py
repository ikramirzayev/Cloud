from django.urls import path, include
from rest_framework import routers
from .views import GorevView

router = routers.DefaultRouter()
router.register(r'gorevler', GorevView)

urlpatterns = [
    path('', include(router.urls)),
]