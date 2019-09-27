<template>
	<div>
		<nav v-if="isMenu">
            <Menu :active-name="selected" @on-select="menuselect" theme="light" :accordion="true" ref="child" style="width:240px":open-names="openname" >
                <template  v-for="(item, index) in MenuList"> 
                    <template v-if="item.children&&item.children.length>0">
                        <Submenu :name="item.text">
                            <template slot="title">
                                <Icon type="ios-analytics"/>
                                {{item.text}}
                            </template>
                            <template v-for="(subItem,subIndex) in item.children">
                                <MenuItem :name="subItem.url">{{subItem.text}}</MenuItem>
                            </template>
                        </Submenu>
                    </template>
                    <template v-else>
                    <MenuItem :name="item.url">
                        <div class="ivu-menu-submenu-title">
                            <i class="ivu-icon ivu-icon-ios-analytics"></i>
                            {{item.text}}
                        </div>
                    </MenuItem>
                  </template>
                </template>
            </Menu>
		</nav>
	</div>
</template>
<script>
	import bus from '../common/bus';
	export default{
		data(){
			return{
				MenuList:[
					{text:"主页1",url:"/"},
					{text:"主页2",url:"2",
						children:[
							{text:"主页2-1",url:"/Index"},
							{text:"主页2-2",url:"/About"}
						]
					},
					{text:"主页3",url:"3",
						children:[
							{text:"主页3-1",url:"/Test"},
						]
					}
				],
				isMenu:true,
                selected:"/",
                openname:[]
            }
		},
		computed:{
            onRoutes(){
            	return this.$route.path.replace('/','');
            }
        },
		created(){
            bus.$on('menuPass', msg => {
            	this.isMenu = !msg;
            })
        },
		mounted(){

		},
		methods:{
			menuselect(name){
				this.$router.replace(name);
			},
			// childTag(e){
			// 	// this.$router.push(e);
			// 	//this.$route.path.replace('/','');
			// }
		}
	}
</script>
<style scoped lang="less">
	nav{
		display: block;
	    position: fixed;
	    left: 0;
	    top: 70px;
	    bottom: 0;
		z-index:8;
	    text-align: left;
	    width: 240px;
	    height: 100%;
	    min-height: 200px;
	    overflow-y: auto;
	    overflow-x: hidden;
		box-shadow: 3px 0px 25px 0px rgba(0,0,0,0.3);
		background-color:#FFF;
        .ivu-menu-submenu-title{
            padding:0 24px 0 0;
        }
	}
</style>