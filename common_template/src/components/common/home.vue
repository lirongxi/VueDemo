<template>
	<div id="fullScreen">
		<v-head @domScreen="fullScreen"></v-head>
		<v-sidebar ref="menu"></v-sidebar>
		<div class="content" id="content">
			<transition name="move" mode="out-in"><router-view></router-view></transition>
		</div>
	</div>
</template>
<script>
	import vHead from "./head.vue";
	import vSidebar from "./sidebar.vue";
	import bus from '../common/bus';
	export default{
		name:"home",
		data(){
			return{

			}
		},
		components:{vHead, vSidebar},
		created(){
            bus.$on('menuPass', msg => {
            	if(msg){
					document.getElementById("content").style.left = "0px";
            	}else{
            		document.getElementById("content").style.left = "240px";
            	}
            })
        },
		mounted(){

		},
		methods:{
			// menuSwitch(_switch){
			// 	console.log(_switch)
			// },
			fullScreen(){
				var el = document.getElementById('fullScreen');
	            var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;      
	                if(typeof rfs != "undefined" && rfs) {
	                    rfs.call(el);
	                };
	              return;
			},
		}
	}
</script>
<style scoped lang="less">
	.content{
	    position: absolute;
	    left: 240px;
	    right: 0;
	    top: 70px;
	    bottom: 0;
	    width: auto;
	    padding: 40px;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    /* overflow-y: scroll; */
	    overflow: auto;
	    -webkit-transition: left .3s ease-in-out;
	    transition: left .3s ease-in-out;
		background-color:#e9e9e9;
	}
	.content h1{
		display: inline-block;
		width: 100%;
		height: 200px;
	}
</style>