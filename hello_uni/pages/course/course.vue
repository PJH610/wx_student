<template>
	<view>
		<view class="content"><text>这是课程页</text></view>
	</view>
</template>

<script>
let loginRes;
export default {
	data() {
		return {};
	},
	onLoad(options) {
		loginRes = this.$checkLogin('../coures/coures', 2);
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
