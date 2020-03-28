<template>
	<view class="googs_list">
		<view class="googs_item" v-for="item in goods" :key="item.id" @click="navigator(item.id)">
			<image :src="item.imgUrl"></image>
			<view class="price">
				<text>${{ item.sellPrice }}</text>
				<text>${{ item.marketPrice }}</text>
			</view>
			<view class="name">{{ item.title }}</view>
		</view>

		<!-- <view class="googs_item">
			<image src="../../static/img/banner1.c0f49551.jpg"></image>
			<view class="price">
				<text>$2199</text>
				<text>$2699</text>
			</view>
			<view class="name">苹果(iphone) x</view>
		</view> -->
	</view>
</template>

<script>
export default {
	props: ['goods'],
	methods: {
		navigator(id) {
			this.$emit('goodsItemClick', id);
		}
	}
};
</script>

<style lang="scss">
.googs_list {
	padding: 0 15rpx;
	display: flex;
	// 换行
	flex-wrap: wrap;
	justify-content: space-between;
	background-color: #eee;
	.googs_item {
		background-color: #ffffff;
		width: 355rpx;
		margin: 10rpx 0;
		padding: 15rpx;
		box-sizing: border-box;
		image {
			display: block;
			width: 80%;
			height: 150px;
			margin: 0 auto;
		}
		.price {
			color: $main-color;
			font-size: 36rpx;
			margin: 15rpx 0 5rpx 0;
			text:nth-child(2) {
				color: #ccc;
				font-size: 28rpx;
				margin-left: 15rpx;
				// 中划线
				text-decoration: line-through;
			}
		}
		.name {
			// padding-bottom: 15rpx;
			font-size: 28rpx;
			line-height: 50rpx;
			padding-top: 10rpx;
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			// // 超出部分...表示
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			line-clamp: 2;
			-webkit-box-orient: vertical;
		}
	}
}
</style>
