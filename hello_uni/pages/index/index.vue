<template>
	<view class="home">
		<!-- 轮播图 -->
		<swiper indicator-dots circular autoplay>
			<swiper-item v-for="item in swipers" :key="item.id"><image :src="item.img" mode=""></image></swiper-item>
		</swiper>
		<!-- 导航区 -->
		<view class="nav">
			<view class="nav_item" v-for="(item, index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{ item.title }}</text>
			</view>
		</view>
		<!-- 商品推荐 -->
		<view class="hot_googs"><view class="tit">推荐商品</view></view>
		<store-list @goodsItemClick="goGoodsDetail" :goods="goods"></store-list>
		<image src="" mode=""></image>
	</view>
</template>

<script>
import storeList from '../../component/store-list/store-list.vue';

export default {
	data() {
		return {
			swipers: [],
			goods: [],
			navs: [
				{
					icon: 'iconfont .icon-chaoshishangpin',
					title: '乐同商城',
					path: '/pages/nav/store/store'
				},
				{
					icon: 'iconfont .icon-kebiao',
					title: '课程介绍',
					path: '/pages/nav/courseB/courseB'
				},
				{
					icon: 'iconfont .icon-shipin',
					title: '学习视频',
					path: '/pages/nav/videos/videos'
				},
				{
					icon: 'iconfont .icon-lianxi',
					title: '联系我们',
					path: '/pages/nav/contact/contact'
				}
			]
		};
	},
	// 页面加载前调用
	onLoad() {
		this.getSwipers();
		this.getHotGoogs();
	},
	components: {
		'store-list': storeList
	},
	methods: {
		// 获取轮播图数据
		async getSwipers() {
			const res = await this.$myRequest({
				url: '/carousel/carousel'
			});
			console.log(res.data.data);
			this.swipers = res.data.data.records;
		},
		// 获取热门商品数据
		async getHotGoogs() {
			const res = await this.$myRequest({
				url: '/product/product?num=1'
			});
			console.log(res.data.data.records);
			this.goods = res.data.data.records;
		},
		// 导航点击的处理函数
		navItemClick(url) {
			console.log(url);
			uni.navigateTo({
				url: url
			});
		},
		// 跳转到商品详情页
		goGoodsDetail(id) {
			uni.navigateTo({
				url: '../goods-detail/goods-detail?id=' + id
			});
		}
	}
};
</script>

<style lang="scss">
.home {
	swiper {
		width: 750rpx;
		height: 380rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.nav {
		display: flex;
		.nav_item {
			width: 25%;
			text-align: center;
			view {
				width: 120rpx;
				height: 120rpx;
				background-color: $main-color;
				border-radius: 60rpx;
				margin: 10px auto;
				line-height: 120rpx;
				color: #ffffff;
				font-size: 50rpx;
			}
			text {
				font-size: 30rpx;
			}
		}
	}
	.hot_googs {
		background-color: #eeeeee;
		overflow: hidden;
		.tit {
			height: 50px;
			line-height: 50px;
			color: $main-color;
			text-align: center;
			// 字体间距
			letter-spacing: 20px;
			background-color: #ffffff;
			margin: 8rpx 0;
		}
	}
}
</style>
