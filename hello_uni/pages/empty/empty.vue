<template>
	<view>
		<empty-data></empty-data>
	</view>
</template>

<script>
import emptyData from '../../component/empty-data/empty-data.vue';
export default {
	data() {
		return {};
	},
	components: {
		'empty-data': emptyData
	}
};
</script>

<style lang="scss"></style>
