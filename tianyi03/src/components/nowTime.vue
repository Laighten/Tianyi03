<template>
	<i class="nt" style="padding-left:50px;font-family:黑体">{{nowTime}}</i>
</template>
<script>
	export default{
		data(){
			return{
				nowTime:""
			}
		},
		methods:{
			getTime(){
				setInterval(()=>{
					//new Date() new一个data对象，当前日期和时间
					//toLocaleString() 方法可根据本地时间把 Date 对象转换为字符串，并返回结果。
					this.nowTime = new Date().toLocaleString();
				},1000)
			}
		},
		created(){
			this.getTime();
		}
	}
</script>
<style>
 .nt{
    font-weight: 700;
    font-size: 30px;
 }
</style>