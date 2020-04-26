<template>
  <div id=pageTwo>
    <div class="wrap">
      <div class="content container">
        <div class="row">
          <div class="col-lg-8">
            <section class="widget">
              <T-wordPie/> 
            </section>
            <section class="widget">
              <I-wordLine/> 
            </section>
          </div>
          <div class="col-lg-4">
            <section class="widget">
              <div style="color:#fff;font-size:20px">敏感词云展示</div>
              <w-wordCloud/>
            </section>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>
<script>
import wordTable from "../components/wordTable";
import wordLine from "../components/wordLine";
import wordPie from "../components/wordPie";
import wordCloud from "../components/wordCloud"
export default {
  components: {

    "T-wordTable": wordTable,
    "I-wordLine": wordLine,
    "T-wordPie": wordPie,
    "w-wordCloud":wordCloud,
  },
  data () {
    return {}
  }
}
</script>

<style>
.pageTwo {
  height: 100%;
  position: relative;
}
</style>