import pymongo
from django.http import HttpResponse,JsonResponse
from bson.json_util import dumps
from . import models
from . import serializers
from rest_framework_mongoengine import generics,viewsets
from rest_framework.response import Response
import json
import simplejson
class detailInfoListView(viewsets.ModelViewSet):
    def list(self, request, format=None):
        if request.method == 'GET':
            data_list = []
            key = ['SourseFrom', 'SenstiKind', 'Class','time','title']
            qs = models.detailInfodata.objects.order_by('-time').all()[:100]
            for i in qs:
                data = []
                data.append(i.SourseFrom)
                data.append(i.SenstiKind)
                data.append(i.Class)
                data.append(i.time)
                data.append(i.title)
                dic = dict(zip(key, data))
                data_list.append(dic)
            return JsonResponse(
                data_list, safe=False
            )
class columnListView(viewsets.ModelViewSet):
    def list(self, request, format=None):
        if request.method == 'GET':
            data_list = []
            qs = models.detailInfodata.objects.order_by('time').all()[:1000]
            dates = []
            SensitiveText=[]
            SensitivePictures=[]
            SensitiveVideo=[]
            Count=[]
            for i in qs:
                dates.append(i.time.split(" ")[0])
            s1 = []
            for i in dates:
                if i not in s1:
                    s1.append(i)
                else:
                    pass
            for i in s1:
                count1 = 0
                count2 = 0
                count3 = 0
                for j in qs:
                    if (i==j.time.split(" ")[0]):
                        if(j.SourseFrom=="敏感文字"):
                            count1=count1 + 1
                        elif(j.SourseFrom=="敏感图片"):
                            count2 = count2 + 1
                        elif(j.SourseFrom=="敏感视频"):
                            count3 = count3 + 1
                SensitiveText.append(count1)
                SensitivePictures.append(count2)
                SensitiveVideo.append(count3)
                Count.append(count1+count2+count3)
            data_list.append(s1)
            data_list.append(SensitiveText)
            data_list.append(SensitivePictures)
            data_list.append(SensitiveVideo)
            data_list.append(Count)
            return JsonResponse(
                data_list, safe=False
            )
class alertListView(viewsets.ModelViewSet):
    def list(self, request, format=None):
        if request.method == 'POST':
            data_list=[]
            result=models.detailInfodata.objects.filter(keys='0',Class='高级').all()[:10]
            key = ['SourseFrom', 'SenstiKind', 'Class', 'time']
            if (len(result)!=0):
                for i in result:
                    data = []
                    data.append(i.SourseFrom)
                    data.append(i.SenstiKind)
                    data.append(i.Class)
                    data.append(i.time)
                    dic = dict(zip(key, data))
                    data_list.append(dic)
                # print(data_list)
                models.detailInfodata.objects.filter(keys='0',Class='高级').update(keys='1')
                return JsonResponse(
                    data_list, safe=False
                )
            else:
                return JsonResponse(
                    0, safe=False
                )
#pageThree 图像
class imgLineListView(viewsets.ModelViewSet):
    def list(self, request, format=None):
        if request.method == 'GET':
            data_list = []
            qs = models.detailInfodata.objects.order_by('time').all()[:1000]
            dates = []
            PoliSensitive = []
            PornSensitive = []
            LeaderSensitive = []
            for i in qs:
                dates.append(i.time.split(" ")[0])
            s1 = []
            for i in dates:
                if i not in s1:
                    s1.append(i)
                else:
                    pass
            for i in s1:
                count1 = 0
                count2 = 0
                count3 = 0

                for j in qs:
                    if (i==j.time.split(" ")[0]):
                        if(j.SourseFrom=="敏感图片" and j.SenstiKind == "政治敏感"):
                            count1=count1 + 1
                        elif(j.SourseFrom=="敏感图片" and j.SenstiKind == "黄色敏感"):
                            count2 = count2 + 1
                        elif(j.SourseFrom=="敏感图片" and j.SenstiKind == "国家领导"):
                            count3 = count3 + 1

                PoliSensitive.append(count1)
                PornSensitive.append(count2)
                LeaderSensitive.append(count3)

            data_list.append(s1)
            data_list.append(PoliSensitive)
            data_list.append(PornSensitive)
            data_list.append(LeaderSensitive)
            return JsonResponse(
                data_list, safe=False
            )
class imgPieListView(viewsets.ModelViewSet):
    def list(self, request, format=None):

        if request.method == 'GET':
            data_list = []
            qs = models.detailInfodata.objects.order_by('time').all()[:1000]

            PoliSensitive = []
            PornSensitive = []
            LeaderSensitive = []

            count1 = 0
            count2 = 0
            count3 = 0
            for j in qs:
                if (j.SourseFrom == "敏感图片" and j.SenstiKind == "政治敏感"):
                    count1 = count1 + 1
                elif (j.SourseFrom == "敏感图片" and j.SenstiKind == "黄色敏感"):
                    count2 = count2 + 1
                elif (j.SourseFrom == "敏感图片" and j.SenstiKind == "国家领导"):
                    count3 = count3 + 1

            PoliSensitive.append(count1)
            PornSensitive.append(count2)
            LeaderSensitive.append(count3)

            data_list.append(PoliSensitive)
            data_list.append(PornSensitive)
            data_list.append(LeaderSensitive)
            return JsonResponse(
                data_list, safe=False
            )
class wordPieListView(viewsets.ModelViewSet):
    def list(self, request, format=None):

        if request.method == 'GET':
            data_list = []
            qs = models.detailInfodata.objects.order_by('time').all()[:1000]

            PoliSensitive = []
            PornSensitive = []
            LeaderSensitive = []

            count1 = 0
            count2 = 0
            count3 = 0
            for j in qs:
                if (j.SourseFrom == "敏感文字" and j.SenstiKind == "政治敏感"):
                    count1 = count1 + 1
                elif (j.SourseFrom == "敏感文字" and j.SenstiKind == "暴力敏感"):
                    count2 = count2 + 1
                elif (j.SourseFrom == "敏感文字" and j.SenstiKind == "黄色敏感"):
                    count3 = count3 + 1

            PoliSensitive.append(count1)
            PornSensitive.append(count2)
            LeaderSensitive.append(count3)

            data_list.append(PoliSensitive)
            data_list.append(PornSensitive)
            data_list.append(LeaderSensitive)
            return JsonResponse(
                data_list, safe=False
            )
class wordLineListView(viewsets.ModelViewSet):
    def list(self, request, format=None):
        if request.method == 'GET':
            data_list = []
            qs = models.detailInfodata.objects.order_by('time').all()[:1000]
            dates = []
            zhengzhiSensitive = []
            baoliSensitive = []
            huangsheSensitive = []
            for i in qs:
                dates.append(i.time.split(" ")[0])
            s1 = []
            for i in dates:
                if i not in s1:
                    s1.append(i)
                else:
                    pass
            for i in s1:
                count1 = 0
                count2 = 0
                count3 = 0

                for j in qs:
                    if (i==j.time.split(" ")[0]):
                        if(j.SourseFrom=="敏感文字" and j.SenstiKind == "政治敏感"):
                            count1=count1 + 1
                        elif(j.SourseFrom=="敏感文字" and j.SenstiKind == "黄色敏感"):
                            count2 = count2 + 1
                        elif(j.SourseFrom=="敏感文字" and j.SenstiKind == "暴力敏感"):
                            count3 = count3 + 1

                zhengzhiSensitive.append(count1)
                baoliSensitive.append(count2)
                huangsheSensitive.append(count3)

            data_list.append(s1)
            data_list.append(zhengzhiSensitive)
            data_list.append(baoliSensitive)
            data_list.append(huangsheSensitive)
            return JsonResponse(
                data_list, safe=False
            )
#pageFour视频
class videoLineListView(viewsets.ModelViewSet):
    def list(self, request, format=None):
        if request.method == 'GET':
            data_list = []
            qs = models.detailInfodata.objects.order_by('time').all()[:1000]
            dates = []
            PoliSensitive = []
            PornSensitive = []
            HeresySensitive = []
            for i in qs:
                dates.append(i.time.split(" ")[0])
            s1 = []
            for i in dates:
                if i not in s1:
                    s1.append(i)
                else:
                    pass
            for i in s1:
                count1 = 0
                count2 = 0
                count3 = 0

                for j in qs:
                    if (i==j.time.split(" ")[0]):
                        if(j.SourseFrom=="敏感视频" and j.SenstiKind == "政治敏感"):
                            count1=count1 + 1
                        elif(j.SourseFrom=="敏感视频" and j.SenstiKind == "黄色敏感"):
                            count2 = count2 + 1
                        elif(j.SourseFrom=="敏感视频" and j.SenstiKind == "邪教信息"):
                            count3 = count3 + 1

                PoliSensitive.append(count1)
                PornSensitive.append(count2)
                HeresySensitive.append(count3)

            data_list.append(s1)
            data_list.append(PoliSensitive)
            data_list.append(PornSensitive)
            data_list.append(HeresySensitive)
            return JsonResponse(
                data_list, safe=False
            )

class videoPie1ListView(viewsets.ModelViewSet):
    def list(self, request, format=None):

        if request.method == 'GET':
            data_list = []
            qs = models.detailInfodata.objects.order_by('time').all()[:1000]

            HighSensitive = []
            MiddleSensitive = []
            LowSensitive = []

            count1 = 0
            count2 = 0
            count3 = 0
            for j in qs:
                if (j.SourseFrom == "敏感视频" and j.Class == "高级"):
                    count1 = count1 + 1
                elif (j.SourseFrom == "敏感视频" and j.Class == "中级"):
                    count2 = count2 + 1
                elif (j.SourseFrom == "敏感视频" and j.Class == "低级"):
                    count3 = count3 + 1

            HighSensitive.append(count1)
            MiddleSensitive.append(count2)
            LowSensitive.append(count3)

            data_list.append(HighSensitive)
            data_list.append(MiddleSensitive)
            data_list.append(LowSensitive)
            return JsonResponse(
                data_list, safe=False
            )

class videoPie2ListView(viewsets.ModelViewSet):
    def list(self, request, format=None):

        if request.method == 'GET':
            data_list = []
            qs = models.detailInfodata.objects.order_by('time').all()[:1000]

            PoliSensitive = []
            PornSensitive = []
            HeresySensitive = []

            count1 = 0
            count2 = 0
            count3 = 0
            for j in qs:
                if (j.SourseFrom == "敏感视频" and j.SenstiKind == "政治敏感"):
                    count1 = count1 + 1
                elif (j.SourseFrom == "敏感视频" and j.SenstiKind == "黄色敏感"):
                    count2 = count2 + 1
                elif (j.SourseFrom == "敏感视频" and j.SenstiKind == "邪教信息"):
                    count3 = count3 + 1

            PoliSensitive.append(count1)
            PornSensitive.append(count2)
            HeresySensitive.append(count3)

            data_list.append(PoliSensitive)
            data_list.append(PornSensitive)
            data_list.append(HeresySensitive)
            return JsonResponse(
                data_list, safe=False
            )
