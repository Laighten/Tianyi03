<template>

  <el-table :data="tableData"
            height="790px"
            border
            style="width: 100%"
            :row-class-name="tableRowClassName">
    <el-table-column 
      prop="SourseFrom"
      label="敏感出处"
      width="100">
    </el-table-column>
    <el-table-column prop="SenstiKind"
                     label="敏感类型"
                     width="150">
    </el-table-column>
    <el-table-column prop="Class"
                     label="敏感级别"
                     width="80">
    </el-table-column>
    <el-table-column prop="time"
                     label="发现时间">
    </el-table-column>
  </el-table>

</template>

  <script>
import axios from 'axios';
export default {
  methods: {
    getdata () {
      return axios.get("/data/api/detailInfo").then(result => {

        this.tableData = result.data.filter(function(e){return e.SourseFrom==="敏感文字";})
        //this.tableData = result.data.slice(0, 100)
      }).catch(error => {
        console.log(error)
      })
    },
    tableRowClassName ({ row, rowIndex }) {
      //console.log(row.kinds);
      if (row.Class === "高级") {
        return 'warning-word';
      } else if (row.Class === "中级") {
        return 'warning-picture';
      } else if (row.Class === "低级") {
        return 'warning-video';
      };
    }
  },
  data () {
    return {
      tableData: [{
        "SourseFrom": null,
        "SenstiKind": null,
        "Class": null,
        "time": null
      }]
    }
  },
  beforeMount () {
    this.getdata();
    // this.tableRowClassName();
  }
}
</script>

  <style>
.el-table .warning-word {
  background: rgb(253, 242, 221);
}

.el-table .warning-picture {
  background: #e8fcdf;
}
.el-table .warning-video {
  background: #fae3da;
}
</style>