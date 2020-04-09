<template>
	<view class="store-center">
		<store-list @goodsItemClick="goGoodsDetail" :goods="goods"></store-list>
		<view class="isOver" v-if="flag">------我是有底线的------</view>
		<image src="" mode=""></image>
	</view>
</template>

<script>
import storeList from '../../../component/store-list/store-list.vue';
export default {
	data() {
		return {
			pageindex: 1,
			flag: true,
			goods: [
				
			]
		};
	},
	// 页面加载
	onLoad() {
		this.getStoreList();
	},
	// 监听触底
	onReachBottom() {
		if (this.goods.length < this.pageindex * 10) return (this.flag = true);
		console.log('触底了');
		this.pageindex++;
		this.getStoreList();
	},
	// 监听下拉刷新
	onPullDownRefresh() {
		console.log('触发了 下拉刷新');
		this.pageindex = 1;
		this.goods = [];
		this.flag = false;
		setTimeout(() => {
			this.getStoreList(() => {
				uni.stopPullDownRefresh();
			});
		}, 500);
	},
	//组件注册
	components: { 'store-list': storeList },
	// 方法
	methods: {
		// 获取商品列表的数据
		async getStoreList(callBack) {
			const res = await this.$myRequest({
				url: '/product/product?num=' + this.pageindex
			});
			console.log(res);
			this.goods = [...this.goods, ...res.data.data.records];
			callBack() && callBack();
		},
		// 跳转到商品详情页
		goGoodsDetail(id) {
			// console.log("aaa")
			uni.navigateTo({
				url: '../../goods-detail/goods-detail?id=' + id
			});
		}
	}
};
</script>

<style>
.store-center {
	background-color: #eee;
}
.isOver {
	width: 100%;
	height: 40px;
	line-height: 40px;
	color: #929191;
	font-size: 28rpx;
	text-align: center;
}
</style>
