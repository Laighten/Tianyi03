<template>
    <div id=pieFour2></div>
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
                axios.get("/data/api/videoPie2").then(result=>{  //修改
                var PoliSensitive = result.data[0]
                var PornSensitive = result.data[1]
                var HeresySensitive = result.data[2]

                //第二个饼状图
                    let myChart2 = echarts.init(document.getElementById("pieFour2"));
                    myChart2.setOption({
                        title: {
                            text: '敏感视频分类占比',
                            left: 'center',
                            top: 20,
                            textStyle: {
                                color: '#ccc'
                            }
                        },

                        tooltip: {
                            trigger: 'item',
                            formatter: '{a} <br/>{b} : {c} ({d}%)'
                        },

                        legend: {
                            orient:'vertical',
                            left:'left',
                            textStyle:{
                            color:'#fff',
                            fontSize: "14",
                            },
                        data: ['政治敏感', '黄色敏感', '邪教信息'],
                            },

                        visualMap: {
                            show: false,
                            min: 10,
                            max: 200,
                            inRange: {
                                color:['red'],
                                colorLightness: [0, 1]
                            }
                        },
                        series: [
                            {
                                name: '访问来源',
                                type: 'pie',
                                radius: '55%',
                                center: ['50%', '60%'],
                                data: [
                                    { value: PoliSensitive, name: '政治敏感' },
                                    { value: PornSensitive, name: '黄色敏感' },
                                    { value: HeresySensitive, name: '邪教信息' }
                                ].sort(function (a, b) { return a.value - b.value; }),
                                roseType: 'radius',
                                label: {
                                    color: 'rgba(255, 255, 255, 0.3)'
                                },
                                labelLine: {
                                    lineStyle: {
                                        color: 'rgba(255, 255, 255, 0.3)'
                                    },
                                    smooth: 0.2,
                                    length: 10,
                                    length2: 20
                                },
                                itemStyle: {
                                    color: '#c23531',
                                    shadowBlur: 200,
                                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                                },

                                animationType: 'scale',
                                animationEasing: 'elasticOut',
                                animationDelay: function (idx) {
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
    #pieFour2{
        width: 100%;
        height: 500px;
        
    }
</style>