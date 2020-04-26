<template>
  <div id=pageThree>

    <div class="wrap">
      <div class="content container">
        <div class="row">

          <div class="col-lg-8">

            <section class="widget">
              <I-imgLine/> </section>
          </div>
          <div class="col-lg-4">
            <section class="widget">
              <I-imgPie/> </section>
            <section class="widget">
              <T-imgTable/>
            </section>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>
<script>
import imgTable from "../components/imgTable";
import imgPie from "../components/imgPie";
import imgLine from "../components/imgLine";

export default {
  components: {

    "T-imgTable": imgTable,
    "I-imgPie": imgPie,
    "I-imgLine": imgLine,
  },
  data () {
    return {}
  }
}
</script>

<style>
.pageThree {
  height: 100%;
  position: relative;
}
</style>