<template>
	<div>
		<nav-header class="header_back"></nav-header>
		<div class="play_detail">
			<div class="play_detailnav">
				<div class="play_detailnl">
					<img src="../../static/image/team/guoan.jpg"/>
				</div>
				<div class="play_detailnc">
					<div class="paly_date">
						<h2>2019-8-13</h2>
					</div>
					<div class="paly_time">
						<h2>19:35</h2>
					</div>
					<div class="play_zhuke">
						<h2>主场</h2>
						<h2>客场</h2>
					</div>
					<div class="paly_local">				
						<h2>北京工人体育场</h2>
					</div>
					<div class="paly_zhibo">
						<h2>比赛直播</h2>
					</div>
				</div>
				<div class="play_detailnr">
					<img src="../../static/image/team/hengda.jpg"/>
				</div>
			</div>
			<div class="play_detailjk">
				<div class="play_jknav">
					<h2>主队近况</h2>
					<h2>客队近况</h2>
				</div>
				<div class="play_jk">
					<div class="play_jkcontent">
						<p>
							广州恒大19胜1平2负积58分排名榜首，上轮联赛，广州恒大客场3-1战胜北京国安，广州恒大豪取13连胜领先排名次席的北京国安7分。赛季前10个主场，恒大8胜1平1负积，近4个主场4战全胜广州恒大19胜1平2负积58分排名榜首，上轮联赛，广州恒大客场3-1战胜北京国安，广州恒大豪取13连胜领先排名次席的北京国安7分。赛季前10个主场，恒大8胜
							重庆斯威7胜8平7负积31分排名第7位，上轮联赛，重庆斯威主场1-1战平天津天海。重庆斯威赛季前10个客场3胜3平4负，近4个客场1胜3负。
						</p>
					</div>
					<div class="play_jkcontent">
						<p>
							广州恒大19胜1平2负积58分排名榜首，上轮联赛，广州恒大客场3-1战胜北京国安，广州恒大豪取13连胜领先排名次席的北京国安7分。赛季前10个主场，恒大8胜1平1负积，近4个主场4战全胜广州恒大19胜1平2负积58分排名榜首，上轮联赛，广州恒大客场3-1战胜北京国安，广州恒大豪取13连胜领先排名次席的北京国安7分。赛季前10个主场，恒大8胜1平1负积，近4个主场4战全胜
						</p>
					</div>
				</div>
			
			</div>
			<div class="play_detailkd">
				<div class="play_kdnav">
					<h1></h1>
					<h2>比赛看点</h2>
				</div>
				<div class="play_kdcontent">
					<p>广州恒大在争冠天王山大战中3-1战胜北京国安豪取13连胜，球队追平了鲁能2006赛季创造的连胜纪录。本场比赛，广州恒大只要主场战胜重庆，恒大即可打破鲁能的纪录，同时提前7轮锁定下赛季亚冠联赛资格。

赛前，恒大主教练卡纳瓦罗表示：现在有一个最担心最不想看到的现象,就是往往经历一场重要胜利之后,球队整个氛围就似乎是,后面的比赛不用踢就结束了,特别是回到主场面对积分靠后的对手,球队更会陷入轻敌或者思想放松的陷阱。当你一直连胜的时候,就是最接近输球的时候,这个最危险。

他还说：“对于14连胜,此前没有一个人会想到球队会有这样的成绩,甚至我自己也感觉非常惊喜,特别是能够在客场连胜,这是非常好的状态和纪录,但如果这些连胜最终没有带来什么荣誉的话,都只是数字而已。</p>
				</div>
			</div>
			<div class="play_detailkd">
				<div class="play_kdnav">
					<h1></h1>
					<h2>交手记录</h2>
				</div>
				<div class="play_kdcontent">
					<p>恒大和重庆交战9场，恒大6胜1平2负，上赛季，广州恒大主场5-0大胜重庆斯威。</p>
				</div>
			</div>
		</div>
		<nav-footer class="footer_back"></nav-footer>
	</div>
</template>

<script>
import NavHeader from '@/components/NavHeader.vue'
import NavFooter from '@/components/NavFooter.vue'
export default {
	data() {
		return{
			
		}
	},
	components:{
    	NavHeader,
    	NavFooter	
   },
   
}
</script>

<style lang="scss">
	.header_back{	
		background:  linear-gradient( #4D4D4D , #8CA1A7);
	}
	.footer_back{
		background:  linear-gradient( to top , #4D4D4D ,#8CA1A7);
	}
	.play_detail{
		width: 1020px;
		margin: 20px auto;
		margin-bottom: 50px;
		.play_detailnav{
			width: 100%;
			background: #475669;
			height: 300px;
			//border-bottom: 10px solid #fff;
			.play_detailnl{
				width: 200px;
				height: 200px;
				float: left;
				margin: 0 20px;
				padding: 50px;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.play_detailnc{
				width: 300px;
				height: 299px;
				float: left;
				margin: 0 20px;
				text-align: center;
				.paly_date{
					height: 50px;
					line-height: 50px;
					font-size: 20px;
					
					font-weight: 600;
				}
				.paly_time{
					height: 50px;
					font-size: 20px;
					line-height: 50px;
					font-weight: 600;
					color: #8CA1A7;
				}
				.play_zhuke{
					height: 60px;
					line-height: 60px;
					font-size: 26px;
					font-weight: 600px;
					h2{
						width: 150px;
						float: left;
						background: #CB0001;
						color: #fff;
					}
				}
				.paly_local{
					height: 50px;
					line-height: 50px;
					color: #CCEBFF;
				}
				.paly_zhibo{
					height: 50px;
					line-height: 50px;
					h2{
						width: 100px;
						margin-left: 100px;
						background: #669900;
					}
				}
			}
			.play_detailnr{
				width: 200px;
				height: 200px;
				float: left;
				margin: 0 20px;
				padding: 50px;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
		.play_detailjk{
			width: 100%;
			margin-top: 30px;
			background: #475669;
			.play_jknav{
				width: 100%;
				height: 50px;
				line-height: 50px;
				h2{
					width: 510px;
					font-size: 24px;
					font-weight: 600;
					color: #B3D4FC;
					text-align: center;
					float: left;
				}
			}
			.play_jk{
				width: 100%;
				
				.play_jkcontent{
					width: 500px;
					display: inline-block;
					 vertical-align:top;
					p{
						letter-spacing: 2px;
						line-height: 20px;
						color: #D3DCE6;
						text-indent: 2em;
	 					padding: 25px;
					}
				}	
			}
			
		}
		.play_detailkd{
			margin-top: 30px;
			width: 100%;
			.play_kdnav{
				height: 60px;
				line-height:60px;
				h1{
					float: left;
					width: 150px;
					height: 60px;
					background:  linear-gradient( to bottom , #FF1111 ,#FEDEDE);
				}
				h2{
					float: left;
					width: 870px;
					height: 60px;
					font-size: 26px;
					font-weight: 600;
					text-align: center;
					color: #475669;
				}
			}
			.play_kdcontent{
				width: 980px;
				padding: 20px;
				border-bottom: 1px solid #333333;
				p{		
					letter-spacing: 2px;
					line-height: 20px;
					text-indent: 2em;
					padding: 20px 0;
				}
			}
		}
	}
</style>