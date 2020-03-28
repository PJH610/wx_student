<template>
	<view class="good-detail">
		<!-- 商品详情页轮播图 -->
		<swiper indicator-dots>
			<swiper-item v-for="(item, index) in swipers" :key="index"><image :src="item.src" mode=""></image></swiper-item>
		</swiper>
		<!-- 价格 box1 -->
		<view class="box1">
			<view class="price">
				<text>${{ info.sell_price }}</text>
				<text>${{ info.market_price }}</text>
			</view>
			<view class="goods_name">{{ info.title }}</view>
		</view>
		<!-- 分割线 -->
		<view class="line"></view>
		<!-- box2 -->
		<view class="box2">
			<view>货号: {{ info.goods_no }}</view>
			<view>库存: {{ info.stock_quantity }}</view>
		</view>
		<!-- 分割线 -->
		<view class="line"></view>
		<!-- 详细介绍 box3 -->
		<view class="box3">
			<view class="tit">详情介绍</view>
			<view class="content"><rich-text :nodes="content"></rich-text></view>
		</view>
		<!-- 导航栏 -->
		<view class="goods_nav"><uni-goods-nav :fill="true" :options="options" :button-group="buttonGroup" @click="onClick" @buttonClick="buttonClick"></uni-goods-nav></view>
	</view>
</template>

<script>
import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue';

export default {
	data() {
		return {
			id: 0,
			options: [
				{
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/kefu.png',
					text: '客服'
				},
				{
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png',
					text: '店铺'
				},
				{
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png',
					text: '购物车',
					info: 2
				}
			],
			buttonGroup: [
				{
					text: '加入购物车',
					backgroundColor: '#ff0000',
					color: '#fff'
				},
				{
					text: '立即购买',
					backgroundColor: '#ffa200',
					color: '#fff'
				}
			],
			swipers: [
				{
					src: '../../static/img/banner1.c0f49551.jpg'
				},
				{
					src: '../../static/img/banner2.b5e49622.jpg'
				}
			],
			info: {
				id: 1,
				title: '苹果Apple Iphone 8 Plus 16g 4g手机(三网版)',
				add_time: '2020-03-19',
				goods_no: 'SD12345678',
				stock_quantity: 200,
				market_price: 6000,
				sell_price: 5000
			},
			content: '这是一大段内容'
		};
	},
	onLoad(options) {
		console.log(options);
		this.id = options.id;
		// this.getSwipers()
		// this.getDetailInfo()
	},
	methods: {
		// 获取轮播图数据
		async getSwipers() {
			const res = await this.$myRequest({
				url: '/carousel/carousel' + this.id
			});
			console.log(res.data.data);
			this.swipers = res.data.data.records;
		},
		// 获取详情页数据
		async getDetailInfo() {
			const res = await this.$myRequest({
				url: '/api/goods/getinfo' + this.id
			});
			console.log(res.data.data);
			this.info = res.data.data.records[0];
		},
		// 获取详情页内容数据
		async getDetailContent() {
			const res = await this.$myRequest({
				url: '/api/goods/getdesc' + this.id
			});
			console.log(res.data.data);
			this.content = res.data.data.records[0].content;
		},
		// 导航
		onClick(e) {
			uni.showToast({
				title: `点击${e.content.text}`,
				icon: 'none'
			});
		},
		buttonClick(e) {
			console.log(e);
			this.options[2].info++;
		}
	},
	components: { uniGoodsNav }
};
</script>

<style lang="scss">
.good-detail {
	swiper {
		// width: 750rpx;
		height: 700rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.box1 {
		padding: 10px;
		.price {
			font-size: 34rpx;
			color: $main-color;
			text:nth-child(2) {
				color: #cccccc;
				font-size: 28rpx;
				line-height: 70rpx;
				text-decoration: line-through;
				margin-left: 20rpx;
			}
		}
		.goods_name {
			font-size: 32rpx;
			line-height: 50rpx;
		}
	}
	.box2 {
		padding: 0 10px;
		font-size: 32rpx;
		line-height: 60rpx;
	}
	.box3 {
		padding-bottom: 50px;
		.tit {
			font-size: 32rpx;
			padding-left: 10px;
			border-bottom: 1px solid #eee;
			line-height: 60rpx;
		}
		.content {
			padding: 10px;
			font-size: 28rpx;
			line-height: 40rpx;
		}
	}
	.goods_nav{
		position: fixed;
		bottom: 0;
		width: 750rpx;
	}
}
.line {
	height: 5rpx;
	width: 750rpx;
	background-color: #eeeeee;
}
</style>
