<template>
    <div id=cloumn></div>
</template>

<script>
let echarts = require("echarts");
import axios from 'axios';

var delta = [ null,0,0,0,-50,null,0];

export default {
    data(){
        return {
            ColumnData:null

        }
    },
    methods:{
        
        Drowcolumn(){
                axios.get("/data/api/column").then(result=>{
                    
                    var dataset={
                            source: [[],[],[],[]]
                        };
                    var dataCount=[];
                    dataset.source[0][0]='dates';
                    dataset.source[1][0]='敏感文本';
                    dataset.source[2][0]='敏感图片';
                    dataset.source[3][0]='敏感视频';
                    for(var i=0;i<result.data[0].length;i++){
                        dataset.source[0][i+1]=result.data[0][i]
                        dataset.source[1][i+1]=result.data[1][i]
                        dataset.source[2][i+1]=result.data[2][i]
                        dataset.source[3][i+1]=result.data[3][i]
                        dataCount[i]=result.data[4][i]
                    }
                
                    let myChart = echarts.init(document.getElementById("cloumn"));
                    
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
                        dataset:dataset,
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
                                        textStyle:{
                                            color:"white"
                                        }
                                        
                                    },
                                    {
                                        type: 'inside',
                                        start: 20,
                                        end: 70,
                                       
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
                                name: "总体趋势",
                                type: "line",
                                stack: "总体趋势",
                                symbolSize:10,
                                symbol:'circle',
                                itemStyle: {
                                    normal: {
                                        color: "rgba(252,230,48,1)",
                                        barBorderRadius: 0,
                                        label: {
                                            show: true,
                                            position: "top",
                                            formatter: function(p) {
                                                return p.value > 0 ? (p.value) : '';
                                            }
                                        }
                                    }
                                },
                                data:dataCount
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
                                    //icon:'../assets/img/senPicture.png',
                                    tooltip: '2019-12-01'
                                },
                                //itemStyle: itemStyle,
                            }
                        ]
                };

                myChart.on('updateAxisPointer', function (event) {
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
                                },
                                
                            }
                        });
                    }
                });
                myChart.on("click",(param) => {
                    // 可以使用下面的方式进行路由的切换
                    //alert(param.name);
                        if(param.name=="敏感文本"){
                            this.$router.push({
                                path: "/pageTwo"
                                // query: { swsmc: danwei }
                                });
                        }else if(param.name=="敏感图片"){
                            this.$router.push({
                                path: "/pageThree"
                                // query: { swsmc: danwei }
                                });
                        }else if(param.name=="敏感视频"){
                            this.$router.push({
                                path: "/pageFour"
                                // query: { swsmc: danwei }
                                });
                        }
                    
                    },
                );

                myChart.setOption(option);
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
    #cloumn{
        width: 100%;
        height: 1100px;
        
    }
</style>