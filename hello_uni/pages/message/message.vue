<template>
	<view class="news"><news-item @itemClick='goDetail' :list="newsList"></news-item></view>
</template>

<script>
import newsItem from '../../component/news-item/news-item.vue';
export default {
	data() {
		return {
			newsList: [
				{
					id: 1,
					title: '这是一段title啊啊啊',
					add_time: '2020-03-16',
					zhaiyao: '这是一段摘要',
					click: 1,
					img_url: '../../static/img/banner3.9922a919.jpg'
				}
			]
		};
	},
	onLoad() {
		// this.getNews()
	},
	methods: {
		// 获取新闻数据
		async getNews() {
			const res = await this.$myRequest({
				url: '/carousel/carousel'
			});
			console.log(res.data.data);
			this.newsList = res.data.data.records;
		},
		goDetail(id){
			uni.navigateTo({
				url:'../news-detail/news-detail?id='+id
			})
		}
	},
	components: { 'news-item': newsItem }
};
</script>

<style lang="scss"></style>
