<template>
    <div id="Test"></div>
</template>

<script>
import axios from "axios";
let echarts = require("echarts");

export default {
    data(){
        return {
            dataset:{
                source: [[],[],[],[]]
            }
        }
    },
    methods:{
       getdata(){
          return axios.get("/data/api/column").then(result=>{
                this.dataset.source[0][0]='dates';
                this.dataset.source[1][0]='敏感文本';
                this.dataset.source[2][0]='敏感图片';
                this.dataset.source[3][0]='敏感视频';
                for(var i=0;i<result.data[0].length;i++){
                    this.dataset.source[0][i+1]=result.data[0][i]
                    this.dataset.source[1][i+1]=result.data[1][i]
                    this.dataset.source[2][i+1]=result.data[2][i]
                    this.dataset.source[3][i+1]=result.data[3][i]
                }
          }).catch(error=>{
              console.log(error)
          })
       },
       Drowcolumn(){
           
       }
    },
    mounted(){
        this.myChart = echarts.init(document.getElementById("Test"));
        this.getdata();
        console.log(this.dataset.source);
        let option = {         
                legend: {
                    x: '0%',
                    y: '0%',
                    orient: 'vertical',
                    textStyle: {
                        fontSize: 12,
                        color:"#d1d3d6"
                }
                },
                tooltip: {
                    trigger: 'axis',
                    //showContent: false
                },
                dataset:this.dataset,
                xAxis: {
                    type: 'category',
                    axisLabel: {
                                color: "white",

                                },

                    },
                yAxis: {
                    gridIndex: 0,
                    show:false,
                    axisLabel: {
                        color: "white",
                        },

                    },
                grid: {
                    top: '75%',
                    left: '1%',
                    right: '1%'},
                dataZoom: [
                            {
                                type: 'slider',
                                show: true,
                                start: 20,
                                end: 70,
                                handleSize: 8,
                                
                            },
                            {
                                type: 'inside',
                                start: 20,
                                end: 70
                            }
                        ],
                series: [
                    {
                        type: 'bar',
                        smooth: true, 
                        seriesLayoutBy: 'row',
                        
                    },
                    {
                        type: 'bar', 
                        smooth: true, 
                        seriesLayoutBy: 'row'
                        },
                    {
                        type: 'bar', 
                        smooth: true, 
                        seriesLayoutBy: 'row'
                        },
                    {
                        type: 'pie',
                        id: 'pie',
                        radius: '45%',
                        center: ['50%', '40%'],
                        label: {
                            formatter: '{b}: {@2019-12-01} ({d}%)'
                        },
                        encode: {
                            itemName: 'dates',
                            value: '2019-12-01',
                            tooltip: '2019-12-01'
                        }
                    }
                ]
        };
        this.myChart.on('updateAxisPointer', function (event) {
            var xAxisInfo = event.axesInfo[0];
            if (xAxisInfo) {
                var dimension = xAxisInfo.value + 1;
                myChart.setOption({
                    series: {
                        id: 'pie',
                        label: {
                            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                        },
                        encode: {
                            value: dimension,
                            tooltip: dimension
                        }
                    }
                });
            }
        });
        
        this.myChart.setOption(option);
    }
}
</script>

<style>
#Test{
    width:100%;
    height: 1000px;
}
</style>