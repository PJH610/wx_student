<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view @click="handleClickLeft(index, item.id)" :class="active === index ? 'active' : ''" v-for="(item, index) in cates" :key="item.id">{{ item.title }}</view>
		</scroll-view>
		<scroll-view scroll-y class="right">
			<view class="item" v-for="item in secondData" :key="item.id">
				<image @click="previewImg(item.img_url)" :src="item.img_url" mode=""></image>
				<text>{{ item.title }}</text>
			</view>
			<text v-if="secondData.length === 0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			cates: [
				{ id: 1, title: '拼装1' },
				{ id: 2, title: '拼装2' },
				{ id: 3, title: '拼装3' },
				{ id: 4, title: '虚拟编程1' },
				{ id: 5, title: '虚拟编程2' },
				{ id: 6, title: '虚拟编程3' },
				{ id: 7, title: '实体编程1' },
				{ id: 8, title: '实体编程2' },
				{ id: 9, title: '实体编程3' },
				{ id: 10, title: '米思齐1' },
				{ id: 11, title: '米思齐2' },
				{ id: 12, title: '米思齐4' },
				{ id: 13, title: 'c++1' },
				{ id: 14, title: 'c++2' },
				{ id: 15, title: 'c++3' }
			],
			active: 0,
			secondData: [
				{
					id: 1,
					title: '这是一段课程介绍的文字',
					img_url: '../../../static/img/banner2.b5e49622.jpg',
					zhaiyao: '这是一段摘要文字 这是一段摘要文字 这是一段摘要文字 这是一段摘要文字 这是一段摘要文字 这是一段摘要文字'
				},
				{
					id: 2,
					title: '这是一段课程介绍的文字',
					img_url: '../../../static/img/banner2.b5e49622.jpg',
					zhaiyao: '这是一段摘要文字 这是一段摘要文字 这是一段摘要文字 这是一段摘要文字 这是一段摘要文字 这是一段摘要文字'
				},
				{
					id: 3,
					title: '这是一段课程介绍的文字',
					img_url: '../../../static/img/banner2.b5e49622.jpg',
					zhaiyao: '这是一段摘要文字 这是一段摘要文字 这是一段摘要文字 这是一段摘要文字 这是一段摘要文字 这是一段摘要文字'
				}
			]
		};
	},
	onLoad() {
		// this.getPicsCate()
	},
	methods: {
		async getPicsCate() {
			const res = await this.$myRequest({
				url: '/xxx/xxx'
			});
			console.log(res.data.data);
			this.cates = res.data.data.records;
			// this.handleClickLeft(0,this.cates[0].id)
		},
		async handleClickLeft(index, id) {
			this.active = index;
			// const res = await this.$myRequest({
			// 	url: '/xxx/xxx' + id
			// });
			// console.log(res.data.data);
			// this.secondData = res.data.data.records;
		},
		previewImg(current) {
			console.log('点了');
			const urls = this.secondData.map(item => {
				return item.img_url;
			});
			console.log(urls)
			uni.previewImage({
				urls,
				current
			});
		}
	}
};
</script>

<style lang="scss">
page {
	height: 100%;
}
.pics {
	height: 100%;
	display: flex;
	.left {
		width: 200rpx;
		height: 100%;
		border-right: 1px solid #eeeeee;
		view {
			height: 60px;
			line-height: 60px;
			color: #333333;
			text-align: center;
			border-top: 1px solid #eeeeee;
		}
		.active {
			background-color: $main-color;
			color: #ffffff;
		}
	}
	.right {
		height: 100%;
		width: 530rpx;
		margin: 0 auto;
		.item {
			image {
				width: 530rpx;
				height: 530rpx;
				border-radius: 5rpx;
			}
			text {
				font-size: 30rpx;
				line-height: 60rpx;
			}
		}
	}
}
</style>
