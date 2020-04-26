<template>
    <div id=pieFour1></div>
</template>

<script>
let echarts = require("echarts");
import axios from 'axios';
var delta = [null, 0, 0, 0, -50, null, 0];

export default {
    data(){
        return {
            ColumnData:null
        }
    },
   
    methods:{
        
        Drowcolumn(){
                axios.get("/data/api/videoPie1").then(result=>{
                var HighSensitive = result.data[0]
                var MiddleSensitive = result.data[1]
                var LowSensitive = result.data[2]

                //第一个饼状图
                    let myChart1 = echarts.init(document.getElementById("pieFour1"));
                    myChart1.setOption({
                        title: {
                            text: '视频敏感等级占比',
                            left: 'center',
                            top: 20,
                            textStyle: {
                                color: '#fff',
                            }
                        },
                        //弹窗，响应鼠标指向，显示具体细节
                        tooltip : {
                            trigger: 'item',  //以具体项目触发弹窗
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                        //图例，选择要显示的项目
                        legend:{
                            orient:'vertical',
                            left:'left',
                            textStyle:{
                            color:'#fff'
                            },
                            data:['高级', '中级', '低级']  //注意要和数据的name相对应
                        },
                        //工具箱
                        toolbox:{
                            show:true,//显示工具箱
                            feature:{
                                dataView:{show:true}, //以文字形式显示数据
                                restore:{show:true},   //还原
                                saveAsImage:{show:true},  //保存图片
                                }
                            },
                        //视觉映射组件，将数据映射到视觉元素上
                        visualMap: {
                            show: false,
                            min: 10,
                            max: 200,
                            dimension: 0, 
                            inRange: {
                                //选定了要映射的对象，用inRange详细写要渲染的具体细节，[x，y]中x指最小值对应的量（亮度，饱和度等），y指最大值对应的量，其余的按各自value线性渲染
                                color:['blue'],
                                colorLightness: [0,1],
                                colorSaturation:[0,1]
                                }
                            },
                        series : [
                            {
                                name:'视频等级占比',
                                type:'pie',
                                radius : '55%',
                                center: ['50%', '60%'],
                                data:[
                                   { value: HighSensitive, name: '高级' },
                                   { value: MiddleSensitive, name: '中级' },
                                   { value: LowSensitive, name: '低级' }
                                ].sort(function (a, b) { return a.value - b.value; }),
                                roseType: 'radius',//角度和半径展现百分比，'area'只用半径展现
                                label: { //饼图图形的文本标签
                                    normal: {  //下同，normal指在普通情况下样式，而非高亮时样式
                                    textStyle: {
                                        color: 'rgba(255, 255, 255, 0.9)'
                                        }
                                        }
                                    },
                                labelLine: {  //引导线样式
                                    normal: {
                                        lineStyle: {
                                            color: 'rgba(255, 255, 255, 0.3)'
                                            },
                                        smooth: 0.5, //0-1，越大越平滑弯曲
                                        length: 10,  //从块到文字的第一段长
                                        length2: 20  //拐弯到文字的段长
                                        }
                                    },
                                itemStyle: { //图例样式
                                    normal: {
                                    color: '#0066ff',
                                    shadowBlur: 50,//阴影模糊程度
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'//阴影颜色，一般黑
                                       }
                                    },
                                animationType: 'scale', //初始动画效果，scale是缩放，expansion是展开
                                animationEasing: 'elasticOut', //初始动画缓动效果
                                animationDelay: function (idx) {  //数据更新动画时长，idx限定了每个数据块从无到有的速度
                                return Math.random() * 200;
                                }
                            }
                        ]
                })
                //console.log(SensitiveText)
          }).catch(error=>{
              console.log(error)
          })
            
            
        }

    },
    mounted(){
        
        // this.getdata();
        this.Drowcolumn();
    }
}
</script>

<style>
    #pieFour1{
        width: 100%;
        height: 500px;
        
    }
</style>