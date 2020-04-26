<template>
    <div id=wordLine></div>
</template>

<script>
let echarts = require("echarts");
import axios from 'axios';


export default {
    data(){
        return {
            WordData:null

        }
    },

    methods:{
        Drowcolumn(){
                axios.get("/data/api/wordLine").then(result=>{
               
                
                    let myChart = echarts.init(document.getElementById("wordLine"));
                    //console.log(result.data);
                    myChart.setOption({
                        title: {
                            text: '敏感文字分类折线图',
                            left: 'center',
                            top: 20,
                            textStyle: {
                                color: '#fff',
                                fontStyle:'italic'
                            }
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            left:'left',
                            textStyle: {
                                color: '#fff',
                                fontStyle:'italic'
                            },
                            data:["政治敏感","黄色敏感","暴力敏感"]
                        },
                        grid: {
                            //top: '10%',
                            left: '1%',
                            right: '1%',
                            botton:'10%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            data: result.data[0],
                            axisLabel:{
                                    color:'white'
                                }
                        },
                        yAxis: {
                            type: 'value',
                             axisLabel: {
                                    formatter: function (a) {
                                        a = +a;
                                        return isFinite(a)
                                            ? echarts.format.addCommas(+a / 100)
                                            : '';
                                    }
                                },
                                axisLabel:{
                                    color:'white'
                                }
                        },
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
                                end: 70
                            }
                        ],
                        series: [
                            {
                                name:'政治敏感',
                                type:'line',
                                stack: '总量',
                                data:result.data[1]
                            },
                            {
                                name:'黄色敏感',
                                type:'line',
                                stack: '总量',
                                data:result.data[2]
                            },
                            {
                                name:'暴力敏感',
                                type:'line',
                                stack: '总量',
                                data:result.data[3]
                            }
                        ]
                    })
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
    #wordLine{
        width: 100%;
        height:500px;
        
    }
</style>