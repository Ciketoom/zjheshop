<template>
	<div class="home_body">
		<nav-header></nav-header>
		<div class="wrap">
			<div class="main">
				<div class="menu">
					<ul>
						<li class="active"><a href="#">首页</a></li>
						<li><a href="javascipt:;"  @click="star">世界巨星</a></li>
						<li><a href="#">装备之窗</a></li>
					</ul>
				</div>
				<div class="swiper">
					<el-carousel  height="600px" indicator-position="outside">
					    <el-carousel-item v-for="item in lunboimg" :key="item.lunboimg">
					      <img :src="item.src">
					    </el-carousel-item>
					</el-carousel>
				</div>
				<div class="new">
					<div class="new_l" v-for="item in newsTou">
						<div class="new_ltou">
							<h2>头条热点</h2>
						</div>
						<div class="new_limg">
							<img :src="'/static/image/new/'+ item.newImage"/>
							<div class="cover"></div>
						</div>
						<div class="new_lcontent" >
							<div class="new_lcname">
								<h2 @click="toutiao">{{item.newTitle}}</h2>
							</div>
							<div class="new_lcm">
								<p>{{item.newContent}}</p>
								<div class="new_lread">
									<a @click="toutiao(item.newId)">更多详情</a>
								</div>
								<div class="new_ldate">
									<p>{{item.newDate}}</p>		
								</div>
							</div>
						</div>
					</div>
					<div class="new_c">
						<div class="new_ctou">
							<h2>足坛新闻</h2>
						</div>
						<div class="new_ccontent">
							<ul>
								<li v-for="item in newsList">
									<i class="iconfont icon-redian"></i>
									<a class="new_cm">{{item.newTitle}}</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="new_r">
						<div class="new_rtou">
							<h2>比赛预告</h2>
						</div>
						<div class="new_rcontent">
							<ul>
								<li v-for="item in schedulesList.slice(0,5)">
									<div class="new_rl">
										<div class="new_rldate">{{item.playDate}}</div>
										<div class="new_rltime">{{item.playTime}}</div>
									</div>
									<div class="new_rr">
										<div class="new_rrgame" @click="playdetail">
											<h3>{{item.homeTeam}}</h3>
											<span>vs</span>
											<h3>{{item.visitTeam}}</h3>
										</div>
									</div>
									<div class="new_rc">
										<div class="new_rcup">{{item.playType}}</div>
										<div class="new_rcdown">购票</div>
									</div>
								</li>							
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="wrap_foot" >
				<div class="star">
					<div class="star_up">
						<h2>
							<i class="iconfont icon-backward" @click="leftgun"></i>
							<i class="iconfont icon-forward" @click="rightgun"></i>
							<span>OUR</span>
							SORCCER STAR
						</h2>
					</div>
					<div class="star_downs" ref="star_downs">
						<div class="star_down" ref="star_down">
							<div class="star_one">
								<div class="starone">
									<div class="star_shadow">
										<div class="star_img">
											<a href="#">
												<div class="zan">
													<div class="iback">
														<i class="iconfont icon-email"></i>
													</div>
													<div class="iback">
														<i class="iconfont icon-love"></i>
													</div>
													<div class="iback">
														<i class="iconfont icon-bbs"></i>
													</div>
												</div>
												<img src="../../static/image/user1.jpg"/>
											</a>
										</div>
										<div class="star_sign">
											<div class="star_name">
												<a href="#">
													<h3>LAMBORGHINI GALARDO</h3>
												</a>
											</div>
											<div class="star_contory">
												<div class="contory_l">
													<svg>
														<use xlink:href="#icon-FR"></use>
													</svg>
												</div>
												<div class="contory_r">
													<p>皇家马德里</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="star_one">
								<div class="starone">
									<div class="star_shadow">
										<div class="star_img">
											<a href="#">
												<div class="zan">
													<div class="iback">
														<i class="iconfont icon-email"></i>
													</div>
													<div class="iback">
														<i class="iconfont icon-love"></i>
													</div>
													<div class="iback">
														<i class="iconfont icon-bbs"></i>
													</div>
												</div>
												<img src="../../static/image/user1.jpg"/>
											</a>
										</div>
										<div class="star_sign">
											<div class="star_name">
												<a href="#">
													<h3>LAMBORGHINI GALARDO</h3>
												</a>
											</div>
											<div class="star_contory">
												<div class="contory_l">
													<svg>
														<use xlink:href="#icon-AR"></use>
													</svg>
												</div>
												<div class="contory_r">
													<p>皇家马德里</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="star_one">
								<div class="starone">
									<div class="star_shadow">
										<div class="star_img">
											<a href="#">
												<div class="zan">
													<div class="iback">
														<i class="iconfont icon-email"></i>
													</div>
													<div class="iback">
														<i class="iconfont icon-love"></i>
													</div>
													<div class="iback">
														<i class="iconfont icon-bbs"></i>
													</div>
												</div>
												<img src="../../static/image/user1.jpg"/>
											</a>
										</div>
										<div class="star_sign">
											<div class="star_name">
												<a href="#">
													<h3>LAMBORGHINI GALARDO</h3>
												</a>
											</div>
											<div class="star_contory">
												<div class="contory_l">
													<svg>
														<use xlink:href="#icon-BR"></use>
													</svg>
												</div>
												<div class="contory_r">
													<p>皇家马德里</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="star_one">
								<div class="starone">
									<div class="star_shadow">
										<div class="star_img">
											<a href="#">
												<div class="zan">
													<div class="iback">
														<i class="iconfont icon-email"></i>
													</div>
													<div class="iback">
														<i class="iconfont icon-love"></i>
													</div>
													<div class="iback">
														<i class="iconfont icon-bbs"></i>
													</div>
												</div>
												<img src="../../static/image/user1.jpg"/>
											</a>
										</div>
										<div class="star_sign">
											<div class="star_name">
												<a href="#">
													<h3>LAMBORGHINI GALARDO</h3>
												</a>
											</div>
											<div class="star_contory">
												<div class="contory_l">
													<svg>
														<use xlink:href="#icon-cn"></use>
													</svg>
												</div>
												<div class="contory_r">
													<p>皇家马德里</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="star_one">
							<div class="star_one">
								<div class="starone">
										<div class="star_shadow">
											<div class="star_img">
												<a href="#">
													<div class="zan">
														<div class="iback">
															<i class="iconfont icon-email"></i>
														</div>
														<div class="iback">
															<i class="iconfont icon-love"></i>
														</div>
														<div class="iback">
															<i class="iconfont icon-bbs"></i>
														</div>
													</div>
													<img src="../../static/image/user1.jpg"/>
												</a>
											</div>
											<div class="star_sign">
												<div class="star_name">
													<a href="#">
														<h3>LAMBORGHINI GALARDO</h3>
													</a>
												</div>
												<div class="star_contory">
													<div class="contory_l">
														<svg>
															<use xlink:href="#icon-cn"></use>
														</svg>
													</div>
													<div class="contory_r">
														<p>皇家马德里</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<nav-footer></nav-footer>
	</div>
	
</template>

<script>
import NavHeader from '@/components/NavHeader.vue'
import NavFooter from '@/components/NavFooter.vue'
import BScroll from 'better-scroll'
import axios from 'axios'
export default {
    data() {
      return {
      	newsList:[],
      	schedulesList:[],
      	newsTou:[],
        lunboimg:[
        	{
        		src:'../../static/image/lunbo.jpg'
        	},
        	{
        		src:"../../static/image/lunbo.jpg"
        	},
        	{
        		src:"../../static/image/lunbo.jpg"
        	},
        	{
        		src:"../../static/image/lunbo.jpg"
        	}
        ]
      }
    },
    components:{
    	NavHeader,
    	NavFooter
    },
    mounted: function () {	 
    	this.getnewsList();
    	this.getnewsTou();
    	this.getschedulesList();
	  	this.passascorll();
	  	this.$router.afterEach((to, from, next) => {
        window.scrollTo(0, 0)
    })
	},
	methods:{
		getnewsList() {
			axios.get("news/newsList").then((response)=>{
      			let res = response.data;
      			console.log(res);
      			if(res.status=="0"){
      				this.newsList = res.result;
      			}else{
      				this.newsList = {};
      			}
      		})
		},
		getnewsTou() {
			axios.get("news/newsTou").then((response)=>{
      			let res = response.data;
      			console.log(res);
      			if(res.status=="0"){
      				this.newsTou = res.result;
      			}else{
      				this.newsTou = {};
      			}
      		})
		},
		getschedulesList() {
			axios.get("schedules/schedulesList").then((response)=>{
      			let res = response.data;
      			console.log(res);
      			if(res.status=="0"){
      				this.schedulesList = res.result;
      			}else{
      				this.schedulesList = {};
      			}
      		})
		},
		passascorll () {
			this.ascroll = new BScroll(this.$refs.star_downs,{
	  		scrollX:true,
	  		eventPassthrough:'vertical',
	  		click:true,
		  	});
		  	this.ascroll.refresh();	
		},
	  	leftgun () {
	  		this.ascroll.scrollBy(380, 0, 2000)
	  	},
	  	rightgun() {
	  		this.ascroll.scrollBy(-380, 0, 2000)
	  	},
	  	toutiao(newId) {
	  		
	  		this.$router.push({
				path:"/newdetails?newId="+newId
			});
	  	},
	  	star() {
	  		this.$router.push({
	  			path:"/starlist"
	  		})
	  	},
	  	playdetail() {
	  		this.$router.push({
	  			path:"/playdetail"
	  			
	  		})
	  	}
	  	
	}
}
</script>

<style lang="scss">
	.home_body{
		background-color: #876E68;
		
	}
	.wrap_foot{
		margin: 0 auto;
    	width: 1400px;
    	position: relative;
    	margin-top: 10px;
    	padding: 0 4%;
    	text-align: center;
    	height: 750px;
	}
	//主页scss
	.wrap{
	    margin: 0 auto;
    	width: 1522px;
    	background-color: #fff;
    	margin-top: 50px;
    	position: relative;
    	height: 1600px;
		.main{
			padding: 0 4%;
    		text-align: center;
    		.menu{
    			height: 100px;
    			.active{    				
					a{
						color: #ffffff;
						background: #CEDB32;
					}                                                 		
    			}
    			li{
    				width: 250px;
				    display: inline-block;
    				position: relative;
    				a{
					    display: block;
					    font-size: 22px;
					    line-height: 80px;
					    padding: 10px 32px;
					    color: #555555;
					    letter-spacing: 1px;
					    &:hover{                          
	                        background: #876E68;
	                        color: #fff;          
                		}
    				}
    			}
    		}
		}
	}
	//轮播scss
	.swiper{
		height: 670px;
		position: relative;
		top: 30px;
		border-bottom: 2px solid #876E68;
		.el-carousel__item img{
		    color: #475669;
		    font-size: 18px;
		    opacity: 0.75;
		    line-height: 600px;
		    margin: 0;
	    	width: 100%;
	    	height: 100%;	
		}
	  
		.el-carousel__item:nth-child(2n) {
		    background-color: #99a9bf;
		}
		  
		.el-carousel__item:nth-child(2n+1) {
		    background-color: #d3dce6;
		}
	}
	//球星栏
	.star{
		background-color: #4D4D4D;
		height: 700px;
		width: 1400px;
		position: relative;
		top: 40px;
		overflow: hidden;
		.star_up{
			height: 200px;
			h2{
			    color: #CEDB32;
			    font-family: rubik one;
			    font-size: 60px;
			    line-height: 200px;
			    font-weight: 1000;
			    height: 200px;
			    i{
			    	position: relative;
			    	font-size: 34px;
			    	top:50px;
			    	left: 295px;
			    	margin-left: 20px;
			    	color:#fff; 
			    	&:hover{
			    		cursor: pointer;
			    		color: #CEDB32;
			    	}
			    }
			    span{
			    	font-size: 48px;
				    font-family: "Oswald",Arial,Helvetica,"Nimbus Sans L",sans-serif;
				    color: #fff;
				    line-height: 1.5;
			    }
			}
		}
		.star_downs{
			height: 480px;
			width: 1400px;
		}	
		.star_down{
			height: 480px;
			position: relative;
			width: 150%;	
			.star_one{
				width: 350px;
			    float: left;
    			display: inline-block;
    			.starone{
    				margin: 10px 20px;
    				height: 450px;
    				.star_shadow{
					    background: #fff;
					    margin-bottom: 10px;		   
					    height: 450px;
					    .star_img{
					    	height: 330px;
					    	.zan{
					    		height: 0;
					    		position: relative;
					    		top: 150px;
					    		display: none;	
					    	}
					    	a{
					    		
					    		img{
					    			width: 100%;
					    			height: 100%;
					    		}
					    	}
					    	&:before{
				    		    content: "";
							    position: absolute;
							    height: 330px;
							    width: 310px;
							    background: rgba(0, 0, 0, 0.4);
							    display: none;
					    	}
					    	&:hover{
					    		&:before{
					    			display:block;
					    		}
					    		.zan{
					    			display: block;
					    			.iback{
					    				background-color:#fff;
					    				border-radius: 50%;	
					    				display: inline-block;
					    				width:50px;
					    				height:50px;
					    				margin-left: 20px;		 
					    				i{
						    				font-size: 24px;		 
						    				line-height: 50px;			
						    			}		
					    			}
		
					    		}
					    	}
					    }
					    .star_sign{
					    	height: 120px;
					    	font-weight: 700;
					    	.star_name{
					    		height: 50px;
					    		line-height: 50px;
					    		font-size: 18px;
					    		color: r#CEDB32;
					    		&:hover{
					    			h3{		
					    				text-shadow: 2px 2px #DFBD31;
					    			}
					    		}
					    	}
					    	.star_contory{
					    		height: 70px;
					    		line-height: 70px;
					    		.contory_l{
					    			float: left;
					    			width: 90px;
					    			margin-left: 20px;	
					    			svg{
					    				width: 45px;
					    				height: 45px;
					    				padding-left: 40px;	
					    				padding-top: 10px;
					    				:hover{
					    					cursor:pointer;		
					    				}			    								    				
					    			}
					    		}
					    		.contory_r{
					    			float: left;
					    			width: 200px;
					    			&:hover{
						    			p{		
						    				color: #DFBD31;
						    				cursor:pointer;
					    				}
					    			}
					    		}
					    	}
					    }
    				}
    			}
			}
		}
	}
	//新闻栏
	.new{
		width: 100%;
		//background-color: #ccc;
		height: 700px;
		position: relative;
		top: 70px;
		.new_l{
			width: 450px;	
			position: relative;
			top: -80px;
			right: 50px;
			//background: #ccc;
			height: 680px;
			display: inline-block;
			.new_ltou{
				height: 45px;
				background: #99A9BF;
				width: 120px;				
				float: left;
				h2{
					color: #fff;
					line-height: 45px;
					font-size: 20px;
				}
			}
			.new_limg{
				position: relative;
				top: 30px;
				img{
					width: 100%;
					height: 100%;
					height: 280px;
				}
				.cover{
                    position: absolute;
                    top: 45px;
                    left: 0;
                    width: 450px;
                    height: 280px;
                    
                }
                &:hover{
                    .cover{
                        background: rgba(255, 255, 255, 0.1);
                    }
                }
			}
			.new_lcontent{
				height: 320px;
				position: relative;
				top: 25px;
				background: linear-gradient( #DAD6CF, #F9F5F4);
				.new_lcname{
					height: 80px;
					line-height: 80px;
					h2{
						font-size: 20px;
						font-weight: 600;
						white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
						&:hover{
							text-shadow: 2px 2px #EE9900;
							cursor:pointer;
						}
					}
				}
				.new_lcm{
					height: 200px;
					padding: 20px;
					p{
						height: 160px;
						line-height: 40px;
						text-align: left;
						text-indent: 2em;
						color: #6F6F6F;
						font-family:"arial narrow";
						max-width: 410px;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 4;
						overflow: hidden;
					}
					.new_lread{
						font-size: 14px;
						width: 80px;
						line-height: 40px;	
						color: #fff;
						font-weight: 600;
						float:left; 
						:hover{
							text-shadow: 2px 2px #EE9900;
							cursor:pointer;
						}
					}
					.new_ldate{
						width: 100px;
						margin-left: 100px;	
						float: right;
						p{
							height: 40px;
							line-height: 40px;	
							font-size: 12px;						
						}		
					}
				}
			}
		}
		.new_c{
			width: 350px;
			background: linear-gradient(to right, #DAD6CF, #F9F5F4);
			position: relative;
			right: 10px;
			top: 10px;
			height: 680px;
			display: inline-block;
			.new_ctou{
				height: 45px;
				background: #99A9BF;
				width: 120px;				
				float: left;
				h2{
					color: #fff;
					line-height: 45px;
					font-size: 20px;
				}
			}
			.new_ccontent{
				height: 600px;
				margin-top: 80px;
				ul{
					li{
						height: 30px;
						margin-top: 10px;
						i{
							float: left;
							font-size: 24px;
							width: 50px;
							margin-left: 10px;
							line-height: 30px;
							color: #CB0001;
						}
						.new_cm{
							line-height: 30px;
							float: left;
							white-space: nowrap;
	                        overflow: hidden;
	                        text-overflow: ellipsis;
	                        max-width: 260px;
	                        text-align: left;
	                        &:hover{
								cursor:pointer;
								color: #CB0001;
							}
						}
					}
				}
			}
		}
		.new_r{
			width: 450px;
			//background: #ccc;
			position: relative;
			left: 30px;
			top: 10px;
			height: 680px;
			display: inline-block;
			.new_rtou{
				height: 45px;
				background: #99A9BF;
				width: 120px;				
				float: right;
				h2{
					color: #fff;
					line-height: 45px;
					font-size: 20px;
				}
			}
			.new_rcontent{
				height: 600px;
				margin-top: 80px;
				ul{
					li{
						background: #F9F5F4;
						height: 110px;
						margin-top: 10px;
						.new_rl{
							width: 100px;
							height: 110px;
							
							float:left;
							background: #99A9BF;
							.new_rldate{
								height: 55px;
								line-height: 55px;
								font-size: 18px;
								
								color: #fff;
								//font-weight: 1000;
							}
							.new_rltime{
								line-height: 55px;
								font-size: 16px;
								font-weight: 1000;
								color: #fff;
								
							}
						}
						.new_rr{
							width: 250px;
							float:left;
							height: 110px;			
							.new_rrgame{
								line-height: 30px;
								width: 250px;
								margin-top: 3px;
								h3{
									width: 250px;
									letter-spacing: 10px;
									&:hover{
										text-shadow: 2px 2px #EE9900;
										cursor:pointer;
									}
								}
								span{
									font-size: 40px;
								}
							}
						}
						.new_rc{
							width: 80px;
							height: 110px;
							float:left;
							div{
								height: 45px;
								line-height: 45px;
								border-radius: 8%;
								background: #876E68;	
								margin-top: 5px;
								font-size: 18px;
								color: #fff;
								&:hover{					
									background: #99A9BF;
									cursor: pointer;
								}
							}
							
						}
					}
				}
			}
		}
	}	
</style>