<template>
  <div id=word-Pie></div>
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
      axios.get("/data/api/wordPie").then(result => {
        var PoliSensitive = result.data[0]
        var PornSensitive = result.data[1]
        var LeaderSensitive = result.data[2]

        let myChart = echarts.init(document.getElementById("word-Pie"));
        myChart.setOption({
          title: {
            text: '敏感文字类别占比',
            x: 'center',
            textStyle: {
              color: "white",
              fontSize: "18",
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['政治敏感', '暴力敏感', '黄色敏感'],
            textStyle: {
              color: "white",
              fontSize: "14",
            }
          },
          series: [
            {
              name: '占比',
              type: 'pie',
              radius: '60%',
              center: ['50%', '60%'],
              data: [
                { value: PoliSensitive, name: '政治敏感' },

                { value: PornSensitive, name: '暴力敏感' },
                { value: LeaderSensitive, name: '黄色敏感' }
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
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
#word-Pie {
  width: 100%;
  height: 550px;
}
</style>
