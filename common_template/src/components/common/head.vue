<template>
	<div>
		<header class="header">
			<Row>
        		<Col :xs="{ span: 8}">
					<h1 class="logo">
						<!-- <img src="../../assets/logo.png" width='120' height="70" alt=""> -->
						<span>LOGO</span>
						
        				<Icon type="md-menu" @click.native="menuSwitch"/>
					</h1>
        		</Col>
        		<Col :xs="{ span: 12, offset: 4 }">
	        		<div class="top-settings">
	        			<Icon type="ios-expand" @click="fullScreen" />
	        			<Dropdown placement="bottom-start" trigger="click">
        					<!-- <a href="javascript:void(0)" class="zh-and-es">中/英</a> -->
        					<Icon type="ios-globe-outline" />
	        				<DropdownMenu slot="list">
						        <DropdownItem @click.native="languageSwitch('zh')">中文</DropdownItem>
						        <DropdownItem @click.native="languageSwitch('es')">英文</DropdownItem>
						    </DropdownMenu>
	        			</Dropdown>
	        			<Dropdown placement="bottom-start" trigger="click">
        					<Icon type="md-settings" />
	        				<DropdownMenu slot="list">
						        <DropdownItem @click.native="changeColor(1)">天空蓝</DropdownItem>
						        <DropdownItem @click.native="changeColor(2)">时尚紫</DropdownItem>
						        <DropdownItem @click.native="changeColor(3)">时尚绿</DropdownItem>
						        <DropdownItem @click.native="changeColor(4)">淡粉色</DropdownItem>
						    </DropdownMenu>
	        			</Dropdown>
	        			<Dropdown placement="bottom-start" trigger="click">
	        				<a href="javascript:void(0)" class="user">
        						<Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"  size="large" />
        						admin
	        				</a>
	        				<DropdownMenu slot="list">
						        <DropdownItem>修改个人信息</DropdownItem>
						        <DropdownItem>退出登录</DropdownItem>
						    </DropdownMenu>
	        			</Dropdown>
	        		</div>
        		</Col>
    		</Row>
		</header>
	</div>
</template>
<script>
	import Vue from 'vue'
	import bus from '../common/bus';
	export default{
		data(){
			return{
				flog:true
			}
		},
		mounted(){
			document.getElementById('app').className = localStorage.getItem('app');
		},
		methods:{
			menuSwitch(){
				if(this.flog){
					bus.$emit("menuPass",true);
					this.flog = false;
				}else{
					bus.$emit("menuPass",false);
					this.flog = true;
				}
			},
			fullScreen(){
				this.$emit("domScreen");
			},
			changeColor(num){
				//把className theme1，theme2，theme3挂载在app.vue的<p id="app"></p>上
				document.getElementById('app').className ='theme'+num;

				this.localStorageDate();
			},
			//存储localStoarge，用于进入系统时，记住用户上一次的选择，自动加载用户上一次选择的主题主题，记得在mounted()里面调用
			localStorageDate(){
				localStorage.setItem('app',document.getElementById('app').className);
			},
			languageSwitch(en){
				if(en == "zh"){
					Vue.config.lang = 'zh-CN';
					window.localStorage.setItem('language','zh-CN');
				}else if(en == 'es'){
					Vue.config.lang = 'en-US';
					window.localStorage.setItem('language','en-US');
				}
			}
		}
	}
</script>
<style scoped lang="less">
	header{
		position: fixed;
		top: 0;
		left: 0;
		z-index:9;
		-webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    width: 100%;
	    height: 70px;
	    //overflow: hidden;
	    color: #fff;
		background-color: #2494f2;
		.logo{
			display: inline-block;
			width: 100%;
			//height: 70px;
			line-height: 70px;
			-webkit-box-sizing: border-box;
			   -moz-box-sizing: border-box;
			        box-sizing: border-box;
			padding-left:20px;
			overflow: hidden;
			text-align:left;
			.ivu-icon-md-menu{
				margin-right:25px;
				font-size:35px;
				cursor: pointer;
			}
		}
		.top-settings{
			-webkit-box-sizing: border-box;
			   -moz-box-sizing: border-box;
			        box-sizing: border-box;
			padding-right:20px;
			line-height: 70px;
			text-align:right;
			font-size:22px;
			*{
				margin: 0 10px;
				cursor: pointer;
			}
			.user,.zh-and-es{
				font-size:14px;
			}
		}
	}
	.ivu-dropdown-menu .ivu-dropdown-item{
		text-align:left;
	}
</style>