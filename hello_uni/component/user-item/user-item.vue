<template>
	<view>
		<view class="item" v-for="(item, index) in list" :key="index" @click="navigator(item.path)">
			<image :src="item.img_url" mode="404"></image>
			<view class="item_text">
				<text>{{ item.name }}</text>
				<text class="code">{{ code }}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: ['list'],
	data() {
		return {
			code: '>'
		};
	},
	methods: {
		navigator(path) {
			console.log(path);
			this.$emit('userItemClick', path);
		}
	}
};
</script>

<style lang="scss">
.item {
	display: flex;
	// justify-content:space-between ;

	align-items: center;
	// background-color: #eee;
	width: 100%;
	height: 100rpx;
	// line-height: 90rpx;
	// text-align: center;
	image {
		width: 50rpx;
		height: 50rpx;
		margin: 0 10px;
	}
	.item_text {
		width: 600rpx;
		height: 100rpx;
		line-height: 100rpx;
		position: relative;
		border-bottom: 1px solid $bg-color-gray;
		font-size: 30rpx;
	}
	.code {
		position: absolute;
		right: 20px;
	}
}
</style>
