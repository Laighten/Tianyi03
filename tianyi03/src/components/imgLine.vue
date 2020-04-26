<template>
  <div id=cloumn-bottom></div>

</template>
<script>

let echarts = require("echarts");
import axios from 'axios';
var delta = [null, 0, 0, 0, -50, null, 0];

export default {

  data () {
    return {
      Mydata: null
    }
  },
  methods: {
    Drowcolumn () {
      axios.get("/data/api/imgLine").then(result => {
        
        var dataset = {
          source: [[], [], [], []]
        };
        dataset.source[0][0] = 'dates';
        dataset.source[1][0] = '政治敏感';
        dataset.source[2][0] = '涉黄图像';
        dataset.source[3][0] = '国家领导';
        for (var i = 0; i < result.data[0].length; i++) {
          dataset.source[0][i + 1] = result.data[0][i]
          dataset.source[1][i + 1] = result.data[1][i]
          dataset.source[2][i + 1] = result.data[2][i]
          dataset.source[3][i + 1] = result.data[3][i]
        }
        console.log(dataset.source)
        let myChart = echarts.init(document.getElementById("cloumn-bottom"));
        let option = {

          title: {
            text: '敏感图片变化信息',
            textStyle: {
              color: "white",
              fontSize: "18",
            }
          },
          tooltip: {
            trigger: 'axis'
          },

          legend: {
            textStyle: {
              color: "white",
              fontSize: "15",
            },

          },

          dataset: dataset,
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
          grid: {
            left: '3%',
            right: '4%',

            top: '50%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {

            type: 'category',
            boundaryGap: false,
            axisLabel: {
              color: "white",

            },

          },
          yAxis: {
            type: 'value',
            //show:false,
            axisLabel: {
              color: "white",

            },
          },
          series: [
            {
              name: '政治敏感',
              type: 'line',


              seriesLayoutBy: 'row',
            },

            {
              name: '涉黄图像',
              type: 'line',


              seriesLayoutBy: 'row',
            },
            {
              name: '国家领导',
              type: 'line',


              seriesLayoutBy: 'row',
            },
            {
              type: 'pie',
              id: 'pie',
              radius: '28%',
              center: ['50%', '30%'],
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
                }
              }
            });
          }
        });
        myChart.setOption(option)


      }).catch(error => {
        console.log(error)
      })


    }
  },
  mounted () {
    this.Drowcolumn();
  }
}

</script>
<style>
#cloumn-bottom {
  width: 100%;
  height: 1100px;
}
</style>
