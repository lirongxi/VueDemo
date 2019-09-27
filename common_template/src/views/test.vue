<template>
	<div>
		<h1>{{msg}}</h1>
		<h1>{{cre}}</h1>
		<h1>{{wnum}}</h1>
		<button @click="numFun">按钮</button>
		<div id="box">{{num}}</div>
		<h1>{{message | capitalize("a","d")}}</h1>
	</div>
</template>
<script>
	var fn = (a)=>{
		console.log(`${a}`+"FN");
	}
	fn("A")
	var mixin = {
	    created: function () {
	    	this.aa("BBB")
	        // console.log(1213)
	    }
	}
	export default{
		data(){
			return{
				cre:"",
				wnum:0,
				message:"pwdfdasjflhkdalsgjsdgb",
				time:null
			}
		},
		props:{
			msg:String
		},
		beforeCreate(){
			// alert("beforeCreate")
			//this.beforeCreateFun()
		},
		beforeUpdate(){
			// alert(1)
		},
		updated(){
			// alert(2)
		},
		beforeDestroy(){
			console.log("beforeDestroy")
			clearInterval(this.time)
		},
		destroyed(){
			console.log("====="+"destroyed")
			clearInterval(this.time)
		},
		filters:{
			capitalize:function(value,a,d){
				return (value+'a'+a+d).toUpperCase()
			},
			gl:function(value){
				value=value.toString();
				return value.toUpperCase();
			}
		},

		computed:{
			num(){
				return 6+6;
			}
		},
		watch:{
            wnum(v,r){
                console.log(v,r)
            }
      	},
       	mixins: [mixin],
		created: function () {
			this.aa("AAA");
	    	// this.time = setInterval(()=>{this.timeFun()},1000)
	    },
	    methods:{
	    	timeFun(){
	    		console.log("time");
	    	},
	    	beforeCreateFun(){
	    		console.lg("beforeCreate");
	    	},
	    	aa(a){
	    		this.cre = a;
	    	},
	    	numFun(){
	    		this.wnum++;
	    	},
	    }
	}
</script>