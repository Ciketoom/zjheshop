<template>
	<div>
		<div class="footer">
			<div class="footer_l">
				<h5>浏览指南</h5>
				<ul>
					<li>特色介绍</li>
					<li>劲爆头条</li>
					<li>球星专栏</li>
					<li>热门比赛直播</li>
					<li>常见问题</li>
					<li>联系客服</li>
				</ul>
			</div>
			<div class="footer_c">
				<h5>更多足球资讯</h5>
				<ul>
					<li>懂球帝</li>
					<li>虎扑足球</li>
					<li>国际足球网</li>
					<li>直播吧</li>
				</ul>
			</div>
			<div class="footer_r">
				<h5>装备购买指引</h5>
				<ul>
					<li>配送服务</li>
					<li>特色专业定制</li>
					<li>热门装备</li>
					<li>常见问题</li>
					<li>联系客服</li>
				</ul>
			</div>
			<div class="footer_down">	
				<a href="#">关于我们</a>
				<span>|</span>
				<a href="#">联系我们</a>
				<span>|</span>
				<a href="#">广告招商</a>
				<span>|</span>
				<a href="#">更多帮助</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss">
	.footer{
		height: 260px;
		width: 1482px;
		
		margin: auto;
		padding: 20px;
		text-align: center;
		h5{
				font-size: 16px;
				height: 50px;
				line-height: 50px;
				font-weight: 800;
			}
			li{
				height: 20px;
				line-height: 20px;
				font-size: 12px;
				color: #333333;
				&:hover{
					cursor: pointer;
					color: #CEDB32;
				}
			}
		.footer_l{
			height: 200px;
			float: left;
			width:300px;
			margin-left: 300px;
			border-bottom: 1px solid #333333;
		}
		.footer_c{
			height: 200px;
			width:300px;
			float: left;
			
			border-bottom: 1px solid #333333;
		}
		.footer_r{
			height: 200px;
			width:300px;
			float: left;
			
			border-bottom: 1px solid #333333;
		}
		.footer_down{
			height: 60px;
			position: relative;
			width: 400px;	
			line-height:60px;
			margin-left: 360px;
			a{
				font-size: 14px;
				&:hover{
					color: #CEDB32;
				}
			}		
		}
	}
</style>