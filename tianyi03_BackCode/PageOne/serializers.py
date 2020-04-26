from rest_framework_mongoengine import serializers
from mongoengine import *
from . import models

class detailInfoSerializer(serializers.DocumentSerializer):
    class Meta:
        model = models.detailInfodata
        fields = '__all__'