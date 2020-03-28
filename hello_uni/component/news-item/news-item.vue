<template>
	<view>
		<view class="news_item" @click="navigator(item.id)" v-for="item in list" :key="item.id">
			<image :src="item.img_url"></image>
			<view class="right">
				<view class="tit">{{ item.title }}</view>
				<view class="info">
					<text>发表时间: {{ item.add_time | formatDate }}</text>
					<text>浏览: {{ item.click }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: ['list'],
	filters: {
		formatDate(date) {
			const ndate = new Date(date);
			const year = ndate.getFullYear();
			const month = ndate
				.getMonth()
				.toString()
				.padStart(2, 0);
			const day = ndate
				.getDay()
				.toString()
				.padStart(2, 0);
			return year + '-' + month + '-' + day;
		}
	},
	data() {
		return {};
	},
	methods: {
		navigator(id) {
			this.$emit('itemClick',id);
		}
	}
};
</script>

<style lang="scss">
.news {
	.news_item {
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid $main-color;
		image {
			max-width: 200rpx;
			min-width: 200rpx;
			height: 150rpx;
		}
		.right {
			display: felx;
			// 竖排显示
			flex-direction: column;
			// 左右两边对齐
			justify-content: space-between;
			margin-left: 15rpx;
			.tit {
				font-size: 30rpx;
			}
			.info {
				font-size: 24rpx;
				text:nth-child(2) {
					margin-left: 30rpx;
				}
			}
		}
	}
}
</style>
