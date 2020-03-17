<template>
	<div>
		<nav-header class="header_back"></nav-header>
		<div class="starlist_nav">
			世界巨星
		</div>
		<div class="starlist">
			<div class="starlist_one">
				<div class="starlist_onepic" @click="stardetail">
					<img src="../../static/image/star/modi.jpg"/>
					<div class="cover"></div>
				</div>
				<p class="starlist_onename">莫德里奇</p>
			</div>
			<div class="starlist_one">
				<div class="starlist_onepic" >
					<img src="../../static/image/star/modi.jpg"/>
					<div class="cover"></div>
				</div>
				<p class="starlist_onename">莫德里奇</p>
			</div>
			<div class="starlist_one">
				<div class="starlist_onepic">
					<img src="../../static/image/star/modi.jpg"/>
					<div class="cover"></div>
				</div>
				<p class="starlist_onename">莫德里奇</p>
			</div>
			<div class="starlist_one">
				<div class="starlist_onepic">
					<img src="../../static/image/star/modi.jpg"/>
					<div class="cover"></div>
				</div>
				<p class="starlist_onename">莫德里奇</p>
			</div>
			<div class="starlist_one">
				<div class="starlist_onepic">
					<img src="../../static/image/star/modi.jpg"/>
					<div class="cover"></div>
				</div>
				<p class="starlist_onename">莫德里奇</p>
			</div>
			<div class="starlist_one">
				<div class="starlist_onepic">
					<img src="../../static/image/star/modi.jpg"/>
					<div class="cover"></div>
				</div>
				<p class="starlist_onename">莫德里奇</p>
			</div>
			<div class="starlist_one">
				<div class="starlist_onepic">
					<img src="../../static/image/star/modi.jpg"/>
					<div class="cover"></div>
				</div>
				<p class="starlist_onename">莫德里奇</p>
			</div>
			<div class="starlist_one">
				<div class="starlist_onepic">
					<img src="../../static/image/star/modi.jpg"/>
					<div class="cover"></div>
				</div>
				<p class="starlist_onename">莫德里奇</p>
			</div>
			<div class="starlist_one">
				<div class="starlist_onepic">
					<img src="../../static/image/star/modi.jpg"/>
					<div class="cover"></div>
				</div>
				<p class="starlist_onename">莫德里奇</p>
			</div>
		</div>		
		<nav-lengzishi></nav-lengzishi>
		<nav-footer class="footer_back"></nav-footer>
	</div>
</template>

<script>
import NavHeader from '@/components/NavHeader.vue'
import NavFooter from '@/components/NavFooter.vue'
import NavLengzishi from '@/components/NavLengzishi.vue'
export default {
	data(){
		return{
			
		}
	},
	components:{
    	NavHeader,
    	NavFooter,
    	NavLengzishi
   },
   methods:{
   		stardetail() {
   			this.$router.push({
	  			path:"/stardetail"
	  		})
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
	.starlist_nav{
		width: 1000px;
		font-size: 30px;
		font-weight: 530;
		overflow: hidden;
		text-align: center;
		line-height: 50px;
	    margin: 20px auto 20px;
	    border-bottom: 1px solid #4D4D4D;
	}
	.starlist{
		width: 1046px;
		height: 750px;
		overflow: hidden;
		border-bottom: 1px solid #4D4D4D;
	    margin: 20px auto 40px;
	    
	    .starlist_one{
	    	width: 218px;
	    	display: inline-block;
	    	height: 178px;
	    	margin: 20px 20px;
	    	.starlist_onepic{
	    		float: left;
	    		width: 198px;
	    		height: 138px;
	    		padding: 5px 10px;
	    		background: #8CA1A7;
	    		border: 1px solid #8C939D;
	    		&:hover{
	    			.cover{
	    				cursor: pointer;
	    				background: rgba(255, 255, 255, 0.1);
	    			}
	    		}
	    		img{
	    			width: 100%;
	    			height: 100%;
	    			
	    		}
	    		.cover{
	    			width: 198px;
	    			height: 138px;
	    			position: relative;
	    			top: -140px;
	    		}
	    	}
	    	.starlist_onename{
	    		float: right;
	    		line-height: 25px;
	    		margin-right: 20px;
	    		&:hover{
	    			cursor: pointer;
	    			//color: #4D4D4D;
	    			text-shadow: 1px 1px #CEDB32;
	    		}
	    	}
	    }
	}
</style>