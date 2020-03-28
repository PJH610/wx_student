<template>
	<view class="content"><text>这是user页</text></view>
</template>

<script>
let loginRes;
export default {
	data() {
		return {};
	},
	onLoad(options) {
		loginRes = this.$checkLogin('../user/user',2);
		if (!loginRes) {
			return;
		}
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
