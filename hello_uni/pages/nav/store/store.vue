<template>
	<view class="store-center">
		<text>这是商城页</text>
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
				{
					id: 1,
					title: 'letopo乐同护脊书包6-8岁书包减负减压 学龄1-2-3年级小学生书包专注护脊可卸力简约书包回家 宝蓝色',
					addTime: '2020-03-20T15:20:53',
					zhaiyao: '这是一段书包手机的摘要',
					click: 1,
					imgUrl: '../../static/img/655d12caed416c64.jpg',
					sellPrice: 428.0,
					marketPrice: 418.0,
					stockQuantity: 110
				},
				{
					id: 2,
					title: '乐同熊猫网椅 儿童学习椅台湾原装进口 可升降人体工学椅 WR-PANDA 粉红色',
					addTime: '2020-03-20T15:23:12',
					zhaiyao: '这是一段书桌的摘要',
					click: 1,
					imgUrl: '../../static/img/2e87814106ca506e.jpg',
					sellPrice: 2180.0,
					marketPrice: 2080.0,
					stockQuantity: 100
				},
				{
					id: 3,
					title: '乐同 儿童书桌 台湾原装中小学生可升降学习桌椅套装 幼幼桌云朵椅 写字台家用儿童写字画画实木书桌 粉红色+椅子+方便架',
					addTime: '2020-03-20T15:23:53',
					zhaiyao: '这是一段书桌套的摘要',
					click: 1,
					imgUrl: '../../static/img/c22138e843ef1b13.jpg',
					sellPrice: 5517.0,
					marketPrice: 4999.0,
					stockQuantity: 100
				},
				{
					id: 4,
					title: '乐同儿童学习桌桌垫 乘法口诀与字母表桌垫 WR-PZ01 粉蓝色',
					addTime: '2020-03-20T15:23:32',
					zhaiyao: '这是一段书包的摘要',
					click: 1,
					imgUrl: '../../static/img/596436b9Nd81d249d.jpg',
					sellPrice: 70.0,
					marketPrice: 68.0,
					stockQuantity: 100
				},
				{
					id: 5,
					title: '华为 (HAUWEI) 荣耀7Plus 32g双4G版',
					addTime: '2019-06-10',
					zhaiyao: 'xxx',
					click: 0,
					img_url: '../../static/img/banner1.c0f49551.jpg',
					sell_price: 2195,
					market_price: 2499,
					stock_quantity: 60
				},
				{
					id: 6,
					title: '华为 (HAUWEI) 荣耀7Plus 32g双4G版',
					addTime: '2019-06-10',
					zhaiyao: 'xxx',
					click: 0,
					img_url: '../../static/img/banner1.c0f49551.jpg',
					sell_price: 2195,
					market_price: 2499,
					stock_quantity: 60
				},
				{
					id: 7,
					title: '华为 (HAUWEI) 荣耀7Plus 32g双4G版',
					addTime: '2019-06-10',
					zhaiyao: 'xxx',
					click: 0,
					img_url: '../../static/img/banner1.c0f49551.jpg',
					sell_price: 2195,
					market_price: 2499,
					stock_quantity: 60
				},
				{
					id: 8,
					title: '华为 (HAUWEI) 荣耀7Plus 32g双4G版',
					addTime: '2019-06-10',
					zhaiyao: 'xxx',
					click: 0,
					img_url: '../../static/img/banner1.c0f49551.jpg',
					sell_price: 2195,
					market_price: 2499,
					stock_quantity: 60
				},
				{
					id: 9,
					title: '华为 (HAUWEI) 荣耀7Plus 32g双4G版',
					addTime: '2019-06-10',
					zhaiyao: 'xxx',
					click: 0,
					img_url: '../../static/img/banner1.c0f49551.jpg',
					sell_price: 2195,
					market_price: 2499,
					stock_quantity: 60
				},
				{
					id: 10,
					title: '华为 (HAUWEI) 荣耀7Plus 32g双4G版',
					addTime: '2019-06-10',
					zhaiyao: 'xxx',
					click: 0,
					img_url: '../../static/img/banner1.c0f49551.jpg',
					sell_price: 2195,
					market_price: 2499,
					stock_quantity: 60
				}
			]
		};
	},
	// 页面加载
	onLoad() {
		// this.getStoreList();
	},
	// 监听触底
	onReachBottom() {
		if (this.goods.length < this.pageindex * 10) return (this.flag = true);
		console.log('触底了');
		this.pageindex++;
		//this.getStoreList();
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
				url: '/api/store/list' + this.pageindex
			});
			console.log(this.swipers);
			this.goods = [...this.goods, ...res.data.message];
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
