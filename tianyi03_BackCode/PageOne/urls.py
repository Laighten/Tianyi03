from django.contrib import admin
from django.urls import path,include,re_path
from django.conf.urls import url
from .views import *

urlpatterns = [
    path('detailInfo', detailInfoListView.as_view({'get': 'list'}), name='detailInfo'),
    path('column', columnListView.as_view({'get': 'list'}), name='column'),
    path('alert', alertListView.as_view({'post': 'list'}), name='alert'),
    path('imgLine', imgLineListView.as_view({'get': 'list'}), name='imgLine'),
    path('imgPie', imgPieListView.as_view({'get': 'list'}), name='imgPie'),
    path('wordPie', wordPieListView.as_view({'get': 'list'}), name='wordPie'),
    path('wordLine', wordLineListView.as_view({'get': 'list'}), name='wordLine'),
    path('videoLine',videoLineListView.as_view({'get':'list'}),name='videoLine'),
    path('videoPie1',videoPie1ListView.as_view({'get':'list'}),name='videoPie1'),
    path('videoPie2',videoPie2ListView.as_view({'get':'list'}),name='videoPie2'),
]