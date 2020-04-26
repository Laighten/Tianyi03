一、安装需要
	Django                            2.0.6
	django-cors-headers               2.2.0
	django-rest-framework-mongoengine 3.4.0
	djangorestframework               3.10.3
	pymongo                           3.6.1
	mongoengine                       0.17.0
	由于mongodb和Django框架的更新换代，不同版本的库可能出现不适配的问题。
二、阶段
	（1）首页总览添加饼状图，且点击扇叶可以跳转到其他界面，完成饼状图和时间轴的联动效果
	（2）大致修改了敏感文字界面，加入了词云
	（3）敏感图片界面修改完成，调整了之前的界面，更换饼状图的样式，主图实现与时间轴联动
	（4）敏感视频界面将之前的固定数据改为由手台数据库发送。
	该阶段基本完全实现当初设计时的功能。
