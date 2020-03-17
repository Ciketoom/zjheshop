<template>
	<div>
		<div class="header">		
			<div class="tou">
				<div class="logo">					
					<img src="../../static/image/logo.jpg"/>
				</div>				
				<div class="hright">
					<div class="bbimg" v-if="nickName"><img :src="userTou"/></div>
					<span class="aa" v-text="nickName" v-if="nickName"></span>
					<router-link to="login" class="aa"  v-if="!nickName">登 录</router-link>
					<router-link to="register" class="aa" v-if="!nickName">注 册</router-link>
					<a href="javascript:void(0)" class="aa" @click="logOut" v-else>退出</a>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				nickName:'',
				userTou:''
			}
		},
		mounted() {
    		this.checkLogin();
    			
    	},
    	methods:{
    		checkLogin(){
                axios.get("/users/checkLogin").then((response)=>{
                    var res = response.data;
                    if(res.status=="0"){
                       this.nickName = res.result;
                       this.checkTou();
                    }   
                });
            },
            checkTou(){
                axios.get("/users/checkTou").then((response)=>{
                    let res = response.data;
                    if(res.status=="0"){
                       this.userTou = res.result;
                    }   
                });
            },
            logOut() {
                axios.post("/users/logout").then((response)=>{
                    let res = response.data;
                    if(res.status=="0"){
                          this.nickName = '';
                          this.$router.push({
				  			path:"/"		
				  		})
                    }
                })
           }
       }
	}
</script>

<style lang="scss">
	.header{
		width: 100%;
		height: 120px;
		//background:  linear-gradient( #4D4D4D , #8CA1A7);
		.tou{
			width: 1200px;
			height: 70px;
			margin: 0 auto;
			position: relative;
			top: 16px;
			display: flex;
			.logo{
				width: 60px;
				height: 60px;
				padding-top: 5px;
				margin-left:50px;
				img{
					width: 100%;
					height: 100%;
					border-radius: 50%;
					border: 2px solid #4D4D4D;
				}	
			}
			.hright{
				width: 250px;
				height: 60px;
				font-size: 16px;
				position: relative;
				left: 800px;
				//text-align: center;
				.aa{
					position: relative;
					top: 20px;
					background-color: #4D4D4D;
					border-radius: 5px;
					padding: 6px;
					color: #fff;
					&:hover{                          
                        background: #CEDB32;         
                	}
				}
				
				.bbimg{
					width: 50px;
					height: 50px;
					margin-top: 5px;
					float: right;
					img{
						width: 100%;
						height: 100%;
						//border-radius: 50%;
					}
				}
							
			}
		}
	}
</style>