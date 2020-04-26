<template>
  <div id=cloumn-top></div>
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
      axios.get("/data/api/imgPie").then(result => {
        var PoliSensitive = result.data[0]
        var PornSensitive = result.data[1]
        var LeaderSensitive = result.data[2]

        let myChart = echarts.init(document.getElementById("cloumn-top"));
        myChart.setOption({
          //backgroundColor:"#0B1837",
          color: ["#3DD1F9", "#01E17E", "#FFAD05"],
          title:{
                text: '敏感图片占比',
                x: '0%',
                y: '4%',
                textAlign: 'left',
                textBaseline: 'middle',
                textStyle: {
                    fontSize: "18",
                    color:"white"
                    
                    
                }
          },
          grid: {
              left: -100,
              top: 50,
              bottom: 10,
              right: 10,
              containLabel: true
          },
          tooltip: {
              trigger: 'item',
              formatter: "{b} : {c} ({d}%)"
          },
          legend: {
              type: "scroll",
              orient: "vartical",
              // x: "right",
              top: "center",
              right: "15",
              // bottom: "0%",
              itemWidth: 16,
              itemHeight: 8,
              itemGap: 16,
              textStyle: {
                  color: '#A3E2F4',
                  fontSize: 12,
                  fontWeight: 0
              },
              data: ['政治敏感', '涉黄图像', '国家领导']
          },
          polar: {},
          angleAxis: {
              interval: 1,
              type: 'category',
              data: [],
              z: 10,
              axisLine: {
                  show: false,
                  lineStyle: {
                      color: "#0B4A6B",
                      width: 1,
                      type: "solid"
                  },
              },
              axisLabel: {
                  interval: 0,
                  show: true,
                  color: "#0B4A6B",
                  margin: 8,
                  fontSize: 16
              },
          },
          radiusAxis: {
              min: 40,
              max: 120,
              interval: 20,
              axisLine: {
                  show: false,
                  lineStyle: {
                      color: "#0B3E5E",
                      width: 1,
                      type: "solid"
                  },
              },
              axisLabel: {
                  formatter: '{value} %',
                  show: false,
                  padding: [0, 0, 20, 0],
                  color: "#0B3E5E",
                  fontSize: 16
              },
              splitLine: {
                  lineStyle: {
                      color: "#0B3E5E",
                      width: 2,
                      type: "solid"
                  }
              }
          },
          calculable: true,
          series: [{
              type: 'pie',
              radius: ["5%", "10%"],
              hoverAnimation: false,
              labelLine: {
                  normal: {
                      show: false,
                      length: 30,
                      length2: 55
                  },
                  emphasis: {
                      show: false
                  }
              },
              data: [{
                  name: '',
                  value: 0,
                  itemStyle: {
                      normal: {
                          color: "#0B4A6B"
                      }
                  }
              }]
          }, {
              type: 'pie',
              radius: ["90%", "95%"],
              hoverAnimation: false,
              labelLine: {
                  normal: {
                      show: false,
                      length: 30,
                      length2: 55
                  },
                  emphasis: {
                      show: false
                  }
              },
              name: "",
              data: [{
                  name: '',
                  value: 0,
                  itemStyle: {
                      normal: {
                          color: "#0B4A6B"
                      }
                  }
              }]
          },{
              stack: 'a',
              type: 'pie',
              radius: ['20%', '80%'],
              roseType: 'area',
              zlevel:10,
              label: {
                  normal: {
                      show: true,
                      formatter: "{c}",
                      textStyle: {
                          fontSize: 12,
                      },
                      position: 'outside'
                  },
                  emphasis: {
                      show: true
                  }
              },
              labelLine: {
                  normal: {
                      show: true,
                      length: 20,
                      length2: 55
                  },
                  emphasis: {
                      show: false
                  }
              },
              data: [{
                      value: PoliSensitive,
                      name: '政治敏感'
                  },
                  {
                      value: PornSensitive,
                      name: '涉黄图像'
                  },
                  {
                      value: LeaderSensitive,
                      name: '国家领导'
                  }
              ]
          }, ]
        })
        //console.log(SensitiveText)
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
#cloumn-top {
  width: 100%;
  height: 380px;
}
</style>
