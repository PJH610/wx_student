<template>
	<view class="contact">
		<image src="../../../static/img/banner1.c0f49551.jpg"></image>
		<view class="info">
			<view @click="callUp">联系电话: 131-605-12110 ( 点击拨打 )</view>
			<view><text selectable="selectable">联系地址: 广东省广州市越秀区北京路青年文化宫210室</text></view>
		</view>
		<map class="map" :longitude="longitude" :latitude="latitude" :scale="scale" :markers="markers"></map>
	</view>
</template>

<script>
export default {
	data() {
		return {
			selectable:true,
			longitude: 113.26902688,
			latitude: 23.12423362,
			scale: 18,
			markers: [
				{
					longitude: 113.269033,
					latitude: 23.124127,
					iconPath: '../../../static/img/letopo.png',
					width: 30,
					height: 30
				}
			]
		};
	},
	methods: {
		callUp() {
			uni.makePhoneCall({
				phoneNumber: '13160512110'
			});
		}
	}
};
</script>

<style lang="scss">
.contact {
	image {
		width: 750rpx;
		height: 320rpx;
	}
	.info {
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		view {
			line-height: 70rpx;
			border-bottom: 1px solid #eeeeee;
		}
	}
	.map {
		width: 750rpx;
		height: 750rpx;
	}
}
</style>
