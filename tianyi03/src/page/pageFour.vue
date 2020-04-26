<template>
    <div id=pageFour>
      <div class="wrap">
            <div class="content container">
            
              <div class="row">

                <div class="col-lg-8 column">
                  <div class="col-lg-6 column">
                    <section class="widget"><F-pie/> </section>
                  </div>
                  <div class="col-lg-6 column">
                    <section class="widget"><P-pie/> </section>
                  </div>
                  <div class="col-lg-12 column">
                    <section class="widget"> <L-line/> </section>
                  </div>
                </div>
                
                <div class="col-lg-4 column">
                  <section class="widget"><F-table/></section>
                </div>
              </div>
            </div>    
        </div>
      </div>
        
</template>

<script>

import tablefour from "../components/table_four";
import piefour2 from "../components/pie_four2";
import piefour1 from "../components/pie_four1";
import linefour from "../components/line_four"


export default {
    components: {
      "F-table":tablefour,
      "P-pie":piefour2,
      "F-pie":piefour1,
      "L-line":linefour
  },
    data(){
        return {}
        }
}
</script>


<style>
.pageFour {
  height: 100%;
  position: relative;
}


</style>