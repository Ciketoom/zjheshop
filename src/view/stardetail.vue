<template>
	<div>
		<nav-header class="header_back"></nav-header>
		<div class="star_detail">
			<div class="star_detailup">
				<div class="star_detailul">
					<img src="../../static/image/star/eqe.jpg"/>
				</div>
				<div class="star_detailur">
					<div class="star_detailuro">
						<div class="star_durl">
							<h2>姓  名</h2>
							<p>梅苏特·厄齐尔</p>
						</div>
						<div class="star_durr">
							<h2>国  籍</h2>
							<p>德国</p>
						</div>
					</div>
					<div class="star_detailuro">
						<div class="star_durl">
							<h2>出生日期</h2>
							<p>1988年10月15日</p>
						</div>
						<div class="star_durr">
							<h2>身  高</h2>
							<p>181cm</p>
						</div>
					</div>
					<div class="star_detailuro">
						<div class="star_durl">
							<h2>体  重</h2>
							<p>75kg</p>
						</div>
						<div class="star_durr">
							<h2>场上位置</h2>
							<p>前  腰</p>
						</div>
					</div>
					<div class="star_detailuro">
						<div class="star_durl">
							<h2>所属球队</h2>
							<p>阿森纳俱乐部</p>
						</div>
						<div class="star_durr">
							<h2>惯 用 脚</h2>
							<p>左脚</p>
						</div>
					</div>
				</div>
			</div>
			
			<div class="star_detaildown">
				<div class="star_detailnav">
					<h1></h1>
					<h2>球星简介</h2>
				</div>
				<div class="star_detailcontent">
					<p>
						梅苏特·厄齐尔（Mesut Özil），1988年10月15日出生于德国盖尔森基兴，德国足球运动员，场上司职前腰，效力于英超联赛的阿森纳足球俱乐部 [1]  。
2005年，厄齐尔被沙尔克04足球俱乐部看中，便签约加入沙尔克04青年队。2007年至2010年夏天，厄齐尔在云达不来梅足球俱乐部共效力过三个赛季，夺得过一次德国杯冠军。2010年，厄齐尔加盟至西甲皇家马德里足球俱乐部，在皇马效力了三个赛季，跟随皇马夺得过2010-11赛季西班牙国王杯和2011-12赛季西班牙甲级联赛冠军。
2013年9月3日，厄齐尔加盟至阿森纳，以5000万欧元的转会费成为阿森纳新的历史标王。2013-14赛季，厄齐尔帮助阿森纳夺得英格兰足总杯和英格兰社区盾杯两个冠军。2017年9月20日，厄齐尔入选2017世界最佳阵容候选名单 [2]  。
在国家队方面，厄齐尔在2009年德国队对阵挪威队的比赛中完成了自己的国家队首秀。2010年南非世界杯，厄齐尔的优异表现为他赢得了金球奖提名。此外，厄齐尔也是2012年波兰乌克兰欧洲杯最佳阵容的成员，并随德国国家队夺得了2014年巴西世界杯的冠军。2018年7月23日，厄齐尔宣布退出德国国家队 [3]  。
					</p>
				</div>
				<div class="star_detailnav">
					<h1 class="h_back0"></h1>
					<h2>国家队生涯</h2>
				</div>
				<div class="star_detailcontent">
					<p>2006年9月，厄齐尔的第一次国家队亮相是在德国U19国家队。同时厄齐尔也入选了德国参加2007年欧洲U19足球锦标赛的大名单。在首战德国U-19队对阵俄罗斯U19队以及次战对阵法国U19队的比赛中各攻入一球。2007年，厄齐尔开始为德国U21国家队效力。2007年11月，厄齐尔正式放弃土耳其国籍，选择为德国国家队效力。</p>
				</div>
				<div class="star_detailnav">
					<h1 class="h_back1"></h1>
					<h2>俱乐部生涯</h2>
				</div>
				<div class="star_detailcontent">
					<p>2006年9月，厄齐尔的第一次国家队亮相是在德国U19国家队。同时厄齐尔也入选了德国参加2007年欧洲U19足球锦标赛的大名单。在首战德国U-19队对阵俄罗斯U19队以及次战对阵法国U19队的比赛中各攻入一球。2007年，厄齐尔开始为德国U21国家队效力。2007年11月，厄齐尔正式放弃土耳其国籍，选择为德国国家队效力。</p>
				</div>
				<div class="star_detailnav">
					<h1 class="h_back2"></h1>
					<h2>获奖记录</h2>
				</div>
				<div class="star_detailcontent">
					<p>2006年9月，厄齐尔的第一次国家队亮相是在德国U19国家队。同时厄齐尔也入选了德国参加2007年欧洲U19足球锦标赛的大名单。在首战德国U-19队对阵俄罗斯U19队以及次战对阵法国U19队的比赛中各攻入一球。2007年，厄齐尔开始为德国U21国家队效力。2007年11月，厄齐尔正式放弃土耳其国籍，选择为德国国家队效力。</p>
				</div>
				
			</div>
			<div class="biaoqian">
				<el-tag
				  :key="tag"
				  v-for="tag in dynamicTags"
				  closable
				  :disable-transitions="false"
				  @close="handleClose(tag)">
				  {{tag}}
				</el-tag>
				<el-input
				  class="input-new-tag"
				  v-if="inputVisible"
				  v-model="inputValue"
				  ref="saveTagInput"
				  size="small"
				  @keyup.enter.native="handleInputConfirm"
				  @blur="handleInputConfirm"
				>
				</el-input>
				<el-button v-else class="button-new-tag" size="small" @click="showInput">+ 给个评价呗</el-button>
			</div>
		
			<div class="star_picnav">
				<h2>球星图集</h2>
				<i class="iconfont icon-backward" @click="xiangzuo"></i>
				<i class="iconfont icon-forward"  @click="xiangyou"></i>
			</div>
			<div class="star_picwrap" ref="star_picwrap">
				<div class="star_piccontent" ref="star_piccontent">
					<viewer :images="images" >
			        	<img v-for="item in images" :src="item.src"  height="100">
			  		</viewer>
				</div>
			</div>
			
		</div>
		<nav-footer class="footer_back"></nav-footer>
	</div>
</template>

<script>
import NavHeader from '@/components/NavHeader.vue'
import NavFooter from '@/components/NavFooter.vue'
import BScroll from 'better-scroll'
export default {
	data(){
		return{
			dynamicTags: ['帅哥', '踢球更帅', '牛逼'],
	        inputVisible: false,
	        inputValue: '', 
	        images:[
	            {src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3272199364,3404297250&fm=26&gp=0.jpg'},
	            {src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3267295166,2381808815&fm=26&gp=0.jpg'},
	            {src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3429654663,2972188411&fm=26&gp=0.jpg'},
	            {src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3597323878,2962972725&fm=26&gp=0.jpg'},
	            {src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3272199364,3404297250&fm=26&gp=0.jpg'},
	            {src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3267295166,2381808815&fm=26&gp=0.jpg'},
	            {src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3429654663,2972188411&fm=26&gp=0.jpg'},
	            {src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3597323878,2962972725&fm=26&gp=0.jpg'},
	        	{src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3429654663,2972188411&fm=26&gp=0.jpg'},
	            {src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3597323878,2962972725&fm=26&gp=0.jpg'},
				{src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3429654663,2972188411&fm=26&gp=0.jpg'},
          		{src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3597323878,2962972725&fm=26&gp=0.jpg'},
	        ]
		};
	},
	components:{
    	NavHeader,
    	NavFooter	
    },
    mounted: function () {
	  	this.picscroll = new BScroll(this.$refs.star_picwrap,{
	  		scrollX:true,
	  		eventPassthrough:'vertical',
	  		click:true,	
	  	});
	  	this.picscroll.refresh();
	  
	 },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
      xiangzuo () {
  			this.picscroll.scrollBy(200, 0, 2000)
	  	},
	  xiangyou() {
	  		this.picscroll.scrollBy(-200, 0, 2000)
	  	}
    }
  
}
</script>

<style lang="scss">
	.header_back{	
		background:  linear-gradient( #4D4D4D , #8CA1A7);
	}
	.footer_back{
		background:  linear-gradient( to top , #4D4D4D ,#8CA1A7);
	}
	.el-tag + .el-tag {
   		 margin-left: 10px;
	}
	 .button-new-tag {
	    margin-left: 10px;
	    height: 32px;
	    line-height: 30px;
	    padding-top: 0;
	    padding-bottom: 0;
	 }
	 .input-new-tag {
	    width: 90px;
	    margin-left: 10px;
	    vertical-align: bottom;
	 }
	 .biaoqian{
	 	width: 100%;
	 	margin-bottom: 80px;
	 	border: 1px solid #B3D4FC;
	 	padding: 20px;
	 	float: left;
	 }
	.star_detail{
		width: 1000px;
		margin: 20px auto;
		
		.star_detailup{
			width: 100%;
			height: 400px;
			.star_detailul{
				float: left;
				width: 360px;
				height: 360px;
				margin: 20px;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.star_detailur{
				float: left;
				width: 560px;
				height: 360px;
				margin: 20px;
				.star_detailuro{
					width: 100%;
					height: 90px;
					border-bottom: 1px solid #D3DCE6;
					.star_durl{
						width: 280px;
						height: 90px;
						line-height: 90px;
						float: left;
						h2{
							width: 80px;
							float: left;
							color: #999999;
						}
						p{
							width: 180px;
							float: left;
							margin-left: 10px;
						}
					}
					.star_durr{
						width: 280px;
						line-height: 90px;
						height: 90px;
						float: left;
						h2{
							width: 80px;
							float: left;
							color: #999999;
						}
						p{
							width: 180px;
							float: left;
							margin-left: 10px;
							
						}
					}
				}
			}
		}
		.star_detaildown{
			width: 100%;
			.star_detailnav{
				padding: 20px;
				width: 100%;
				float: left;
				h1{
					height: 60px;
					width: 150px;
					background:  linear-gradient( to bottom , #FF1111 ,#FEDEDE);
					float: left;
					border-radius: 8px;
				}
				.h_back0{
					background:  linear-gradient( to bottom, #00A3CC ,#CCEBFF);
				}
				.h_back1{
					background:  linear-gradient( to bottom , #00DD2C ,#C9F1C9);
				}
				.h_back2{
					background:  linear-gradient( to bottom , #FFFF00 ,#FFFF99);
				}
				h2{
					height: 60px;
					width: 850px;
					line-height: 60px;
					font-size: 30px;
					font-weight: 600;
					text-align: center;
					color: #8CA1A7;
					float: left;
				}
			}
			.star_detailcontent{
				width: 920px;
				padding: 20px 40px;
				border-bottom: 1px solid #D3DCE6;
				float: left;
				margin-bottom: 80px;
				p{
					float: left;
					margin: 20px 0;
					text-indent: 2em;
		    		letter-spacing: 3px;
		    		line-height: 20px;
				}
			}
		}
		.star_picnav{
			width: 100%;
			text-align: center;
			h2{
				line-height: 50px;
				font-size: 26px;
				font-weight: 600;
				color: #708090;
				letter-spacing: 10px;
			}
			i{
				padding: 0 100px;
				font-size: 30px;
				color: #475669;
			}
			
		}
		.star_picwrap{
			width: 1042px;
			padding: 40px 0;
			overflow: hidden;
			background: #475669;
			margin: 40px 0;
			.star_piccontent{
				width: 220%;
				background: #475669;
				img{
					margin-left: 35px;
				}
			}
		}
	}
</style>