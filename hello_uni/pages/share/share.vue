<template>
	<view>
		分享
	</view>
</template>

<script>
	let loginRes;
	export default {
		data() {
			return {};
		},
		onLoad(options) {
			loginRes = this.$checkLogin('../share/share',2);
			if (!loginRes) {
				return;
			}
		},
		methods: {}
	};
</script>

<style>

</style>
