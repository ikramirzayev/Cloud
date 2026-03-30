from rest_framework import serializers
from .models import Gorev

class GorevSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gorev
        fields = '__all__' # Tüm sütunları (id, baslik, aciklama...) dışarı açar
        