<template>
	<view>
		<view class="content">
			<image src="../../static/img/empty.png" mode="404"></image>
			<text>暂无数据</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss">
.content {
	width: 750rpx;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center; // 垂直居中，针对的是mycontainer类下面的子元素，不包含“孙子”元素
	justify-content: center; // 水平居中，针对的是mycontainer类下面的子元素，不包含“孙子”元素

	image {
		margin-top: 100px;
	}
	text {
		font-size: 48rpx;
		color: #efefef;
	}
}
</style>
