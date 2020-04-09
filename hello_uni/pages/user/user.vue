<template>
	<view class="content">
		<view class="top">
			<image :src="img_url" mode="404"></image>
			<view class="top_text">
				<view class="top_text_name">
					<text>{{ name }}</text>
					<image class="top_text_name_img" src="../../static/img/bianji.png" mode="404"></image>
				</view>
				<text v-if="phone_num == ''">未绑定手机号</text>
				<text v-if="phone_num !== ''">{{ phone_num }}</text>
			</view>
		</view>
		<view class="main">
			<view class="item" v-for="(item, index) in mains" :key="index">
				<image :src="item.icon_url" mode="404"></image>
				<text>{{ item.title }}</text>
			</view>
		</view>
		<view class="footer">
			<user-item @userItemClick="userItemClick" :list="mains_item"></user-item>
		</view>
		<view class="test"></view>
	</view>
</template>

<script>
import tstData from '../../data/testData.js';
import userItem from '../../component/user-item/user-item.vue';
let loginRes;
export default {
	data() {
		return {
			name: '金龟',
			img_url: '../../static/logo.png',
			phone_num: '',
			mains: tstData.data.mains,
			mains_item: tstData.data.mains_item
		};
	},
	onLoad(options) {
		// loginRes = this.$checkLogin('../user/user',2);
		// if (!loginRes) {
		// 	return;
		// }
	},
	components: {
		'user-item': userItem
	},
	methods: {
		// 跳转到每项的路径
		userItemClick(url) {
			// let SUID = uni.getStorageSync('SUID');
			// let user_url = url + SUID;
			let user_url = url;
			uni.navigateTo({
				url: user_url
			});
		}
	}
};
</script>

<style lang="scss">
.content {
	background-color: $bg-color-gray;
	.top {
		display: flex;
		height: 350rpx;
		// background-color: #c3c32b;
		background: url(../../static/img/banner4.ea27426a.png) no-repeat center top;
		image {
			width: 150rpx;
			height: 150rpx;
			border-radius: 75rpx;
			margin: 25px 10px 25px 25px;
		}
		.top_text {
			margin-top: 40px;
			display: flex;
			flex-direction: column;
			font-size: 38rpx;
			color: #ffffff;
			.top_text_name {
				display: flex;
				text {
					margin: 0;
					font-size: 38rpx;
					vertical-align: middle;
				}
				.top_text_name_img {
					margin: 0;
					width: 48rpx;
					height: 48rpx;
					margin-left: 5px;
				}
			}
			text {
				margin-top: 5px;
				font-size: 32rpx;
			}
		}
	}
	.main {
		display: flex;
		// 换行
		flex-wrap: wrap;
		width: 690rpx;
		// height: 350rpx;
		margin: 30rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
		text-align: center;
		.item {
			width: 25%;
			height: 50%;
			// margin: 0 auto;
			margin: 15px 0;
			image {
				width: 80rpx;
				height: 80rpx;
			}
			text {
				display: block;
				font-size: 28rpx;
			}
		}
	}
	.footer {
		margin: 30rpx;
		// width: 690rpx;
		// height: 700rpx;
		border-radius: 10rpx;
		background-color: #ffffff;
		// .item {
		// 	display: flex;
		// 	// justify-content:space-between ;

		// 	align-items: center;
		// 	// background-color: #eee;
		// 	width: 100%;
		// 	height: 100rpx;
		// 	// line-height: 90rpx;
		// 	// text-align: center;
		// 	image {
		// 		width: 50rpx;
		// 		height: 50rpx;
		// 		margin: 0 10px;
		// 	}
		// 	.item_text{
		// 		width: 600rpx;
		// 		height: 100rpx;
		// 		line-height: 100rpx;
		// 		position: relative;
		// 		border-bottom: 1px solid $bg-color-gray;
		// 		font-size: 30rpx;
		// 	}
		// 	.code {
		// 		position: absolute;
		// 		right: 20px;
		// 	}
		// }
	}
	.test {
		height: 10px;
	}
}
</style>
