<template>
    
    <div id=pageOne>
       
        <div class="wrap">
          <div class="content container">
              <div class="row">
                
                <div class="col-lg-8">
                  <section class="widget"> <B-bing/> </section>
                </div>
                <div class="col-lg-4">
                   <section class="widget">  <i class="fa fa-warning" style="color:yellow;font-size:40px;"></i> <n-Time/> </section>
                   <section class="widget"><T-table/></section>
                </div>
              </div>
          </div>
        </div>

    </div>
</template>

<script>

import FirstChart from "../components/FirstChart";
//import Test from "../components/Test";
import firstTable from "../components/firstTable";
import nowTime from "../components/nowTime"
import axios from 'axios' // axios http请求库
//import test from "../test"
//axios.defaults.baseURL = 'http://mockjs.com/api' // 设置默认请求的url

export default {
    components: {
      "B-bing": FirstChart,
      "T-table":firstTable,
      "n-Time":nowTime,
      //"T-Test":Test,
      
      },
    data(){
        return {
          //WaringClass:{},
        }
    },
    methods:{
        getWarning(){
          var __this = this
          setInterval(() => {
                return axios({
                  method: 'post',
                  url: '/data/api/alert',
                  data: "高级"
                }).then((response) => {
                  //console.log(response.data)
                  __this.WaringClass= response.data
                  var info = response.data
                  const h = this.$createElement;
                  const temp = h('table',  {attrs:{"class":"as"}}, [
                    h('tr', null, info.length ? Object.keys(info[0]).map(d => (h('th', {attrs:{"class":"as"}}, d))) : null),
                    ...info.map(d => 
                    h('tr', null, Object.values(d).map(d => h('td', {attrs:{"class":"as"}}, d)))
                  )])

                  if(response.data!=0){
                      // console.log(response.data);
                      this.$alert(temp,'警告:检测出超标敏感信息', {
                            confirmButtonText: '确定',
                            type: 'warning',
                            callback: action => {
                            this.$message({
                                type: 'info',
                                message: `已确认: ${ action }`
                                  });
                              }
                        });
                  }
                }).catch((error) => {
                  console.log(error)
                  // reject()
                })
                  }, 180000);
        },
    },
    beforeMount(){
        this.getWarning();
    }
  
}
</script>


<style>
.pageOne {
  height: 100%;
  position: relative;
}
.as{
  border:2px solid #D2D2D2;
  text-align: center;
  color:gray
}

</style>