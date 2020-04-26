from __future__ import unicode_literals
from django.db import models
from mongoengine import *
# Create your models here.
connect('tianyi03_data', host='127.0.0.1', port=27017)

class detailInfodata(Document):
    SourseFrom = StringField(max_length=100)
    SenstiKind = StringField(max_length=100)
    Class = StringField(max_length=100)
    time = StringField(max_length=100)
    title = StringField(max_length=10)
    keys = StringField(max_length=10)

    meta = {'collection': 'detailInfo'}
