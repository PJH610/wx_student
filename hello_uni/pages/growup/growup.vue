<template>
	<view class="content">您还没登录哦 请登录!!!</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad(options) {
		console.log(options);
	},
	methods: {}
};
</script>

<style>
.content {
	display: flex;
	justify-content: center;
}
</style>
