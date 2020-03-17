<template>
	<div>
	  <div class="login">
      	<div class="error_tip">
      		<span class="error error-show" v-show="errorTip1">用户名或者密码错误!</span>
            <span class="error error-show" v-show="errorTip3">用户名和密码不能为空!</span>
      	</div>
      	<ul>
          <li class="login_form_input">
            <i class="iconfont icon-lunkuodasan-"></i>
            <input
            	type="text"
            	tabindex="1"
            	name="loginname" 
            	v-model="userName"
            	class="login_input"
            	placeholder="User Name" 
            	data-type="loginname">
          </li>
          <li class="login_form_input">
            <i class="iconfont icon-lunkuodasan-1"></i>
            <input 
            	type="password"
            	tabindex="2"
            	name="password" 
            	v-model="userPwd"
            	class="login_input"
            	placeholder="Password" 
            	@keyup.enter="login"
            	>
          </li>
        </ul>
        <div class="login-wrap">
           <router-link to="/register">立即注册</router-link>
        </div>
        <div class="login-wrap">
            <a href="javascript:;" @click="login">登录</a>
        </div>
        
      </div>
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="star"
        :particleSize="6"
        linesColor="#dedede"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
      >
      </vue-particles>
    </div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return{
				userName:'',
              	userPwd:'',
				errorTip1:false,
	            errorTip3:false,
			}
		},
		methods:{
			login() {
    			if(!this.userName || !this.userPwd){
                  this.errorTip1 = true;
                  return;
                }
    			axios.post("/users/login",{
    				userName:this.userName,
    				userPwd:this.userPwd
    			}).then((response)=>{
    				let res = response.data;
    				if(res.status=="0") {
    					this.errorTip1 = false;
    					this.$router.push({
				  			path:"/"		
				  		})
    				}else{
    					this.errorTip1 = true;
    				}
    			})
    		},
			
		}
	}
</script>

<style lang="scss">
	.lizi{
		background: url(../../static/image/lizi.jpg);
		background-size: 100% 100%;
		position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
	}
	.login{
		position: relative;
		height: 250px;
		background: transparent;
		width: 400px;
		margin: auto;
		top: 300px;
		z-index: 10;
		
	}
	.error_tip{
		margin-left: 45px;
		.error{
			  font-size: 12px;
			  color: red;
			  visibility: hidden;
			  display: block;
			  padding: 0 0 7px 17px;
			  line-height: 25px;
			  height: 25px;
			  text-align: left;
			  z-index: 20;
			 
		}
		 .error-show{
				  visibility: visible;
				  height: auto;
			}
	}
	.login_form_input .iconfont { 
	  float: left;
	  width: 30px;
	  height: 42px;
	  font-size: 20px; 
	  margin-left: 15px;
	}
	.login_form_input{
		  position: relative;
		  height: 42px;
		  width: 250px;
		  line-height: 42px;
		  background: #fff;
		  margin-bottom: 30px;
		  margin-left: 60px;
		  font-size: 14px;
		  overflow: hidden;
		  border:1px solid #ccc;
		  border-radius: 8px;
		  padding-bottom: 0;
		  i{
		  	color: #BD2C00;
		  	font-weight: 600;
		  }
		  .login_input{
			  position: absolute;
			  left:50px;
			  top:0;
			  padding: 9px 0 10px;
			  width:100%;
			  font-size: 14px;
			  zoom: 1;
			  border: none;
			  color: #333;
			  /*height: 23px;*/
			  line-height: 23px;
			  background: 0 0!important;
		}
	}
	.login-wrap{ 
	  height: 50px;
	  width: 80px;
	  background: #F9863A;
	  line-height: 50px;
	  float: left;
	  margin-left: 70px;
	  border-radius: 8px;
	  text-align: center;
	  &:hover{
	  	background: #55C2DD;
	  	cursor: pointer;
	  }
	}
	
</style>