<template>
	<view>
		<view class="content"><text>这是课程页</text></view>
		<uni-calendar :insert="true" :lunar="true" :start-date="'2019-3-2'" :end-date="'2019-5-20'" @change="change"></uni-calendar>
	</view>
</template>

<script>
import uniCalendar from '@/components/uni-calendar/uni-calendar.vue';
let loginRes;
export default {
	data() {
		return {
			uniCalendar
		};
	},
	onLoad(options) {
		// loginRes = this.$checkLogin('../coures/coures', 2);
		// if (!loginRes) {
		// 	return;
		// }
	},
	components: {
		uniCalendar
	},
	methods: {
		change(e) {
			console.log(e);
		}
	}
};
</script>

<style>
.content {
	display: flex;
	justify-content: center;
}
</style>
