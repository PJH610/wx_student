<template>
	<view class="news_detail">
		<text class="title">{{detail.title}}</text>
		<view class="info">
			<text>发表时间: {{detail.add_time | fromatDate}}</text>
			<text>浏览: {{detail.click}}</text>
		</view>
		<view class="content">
			<rich-text :nodes="detail.content">
				
			</rich-text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			id: 0,
			detail:{
				title:"这是一个标题",
				add_time:"2020-03-16",
				content:"这是内容",
				click:1
			}
		};
	},
	onLoad(options) {
		// console.log(options)
		this.id = options.id;
	},
	methods: {
		async getNewsDetail() {
			const res = await this.$myRequest({
				url: '/xxx/xxx'+this.id
			});
			console.log(res.data.data);
			this.detail = res.data.data.records;
		}
	}
};
</script>

<style lang="scss">
.news_detail {
	font-size: 30rpx;
	padding: 0 20rpx;
	.title {
		width: 710rpx;
		text-align: center;
		display: block;
		margin: 20rpx 0;
	}
	.info {
		display: flex;
		justify-content: space-between;
	}
}
</style>
