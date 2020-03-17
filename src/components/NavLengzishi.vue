<template>
	<div>
		<div class="starlist_nav">
			足球冷知识
		</div>
		<div class="starlist_lzs">
			<div class="starlist_lzsl" style="float: right;">
				<img src="../../static/image/star/luomei.jpg"/>
			</div>
			<div class="starlist_lzsr" style="float: right;">
				<p>
					C罗出生于1985年2月5日，梅西出生于1987年6月24日。C罗比梅西大了870天。C罗儿子迷你罗出生于2010年6月17日，梅西儿子蒂亚戈则在2012年11月2日出生。迷你罗比蒂亚戈大了870天。绝对双骄的横空出世绝对不是偶然的，他可能带着另一种神秘的色彩！
				</p>
			</div>
		</div>
		<div class="starlist_lzs">
			<div class="starlist_lzsl">
				<img src="../../static/image/star/zhenxing.jpg"/>
			</div>
			<div class="starlist_lzsr">
				<p>
					最早出现的有着科学的攻守平衡的阵型是2-3-5阵型，从前到后包括守门员正好是一个三角形。现代足球阵型中有一个4-3-2-1阵型，被称为圣诞树阵型，当然除去守门员就是一个倒过来的三角形。所以英国人乔纳森威尔逊在写一本关于足球战术发展的书的时候起名叫做《倒转金字塔》。当然2-3-5阵型现在看上去头重脚轻，攻强守弱，但由于当时越位的判定是三名防守队员而不是两名，所以当时的比赛进球也不是那么多。
				</p>
			</div>
		</div>
		<div class="starlist_lzs">
			<div class="starlist_lzsl" style="float: right;">
				<img src="../../static/image/star/xiaobei.jpg"/>
			</div>
			<div class="starlist_lzsr" style="float: right;">
				<p>贝克汉姆有“恐鸟症(Ornithophobia)”，就是怕鸟。媳妇儿维多利亚揭秘：贝克汉姆对于有羽毛的动物特别敏感，想让他伸手抚摸鸟类？简直比登天还难！顺便说一下，NBA球星韦德也有恐鸟症。</p>
			</div>
		</div>
		<div class="starlist_lzs">
			<div class="starlist_lzsl">
				<img src="../../static/image/star/qiumi.jpg"/>
			</div>
			<div class="starlist_lzsr">
				<p>
					如果一个人跟你说“西甲三强”，那他肯定是马竞球迷；如果有人跟你说“罗马双雄”，那他多半喜欢拉齐奥；如果有人跟你说“鲁尔双雄”，这个人多半喜欢沙尔克04；如果有人跟你说“英超六强”，那么他八成是热刺球迷。还有判断一个男生是不是喜欢足球就让他说出以下的城市属于哪个国家就好了：比利亚雷亚尔，卡利亚里，多特蒙德，纽卡斯尔，埃因霍温，布鲁日。如果都知道在哪个国家的话，除了地理大神多半是球迷。
				</p>
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
	.starlist_nav{
		width: 1000px;
		font-size: 30px;
		font-weight: 530;
		overflow: hidden;
		text-align: center;
		line-height: 50px;
	    margin: 20px auto 20px;
	}
	.starlist_lzs{
		width: 1000px;
		overflow: hidden;
	    margin: 20px auto 40px;
	    .starlist_lzsl{
	    	float: left;
	    	width: 300px;
	    	height: 200px;
	    	img{
	    		width: 100%;
	    		height: 100%;
	    		
	    	}
	    	
	    }
	    .starlist_lzsr{
	    	float: left;
	    	width: 658px;
	    	height: 158px;
	    	padding: 20px 20px;
	    	border: 1px solid #8C939D;
	    	p{
	    		text-indent: 2em;
	    		letter-spacing: 3px;
	    		line-height: 20px;
	    	}
	    }
	}
</style>