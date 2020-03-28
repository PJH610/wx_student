<template>
	<view>
		您需要登录
		<!-- #ifdef MP-WEIXIN -->
		<button type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">使用微信登录</button>
		<!-- #endif -->
	</view>
</template>

<script>
let _self;
export default {
	data() {
		return {};
	},
	onLoad(options) {
		_self = this;
		console.log(options);
		// 微信端
		// #ifdef MP-WEIXIN
		uni.login({
			success(res) {
				console.log(res.code);
				uni.request({
					url: 'http://localhost:8080/wx/login/?code=' + res.code,
					method: 'GET',
					success: res => {
						console.log(res);
					},
					fail: () => {},
					complete: () => {}
				});
			}
		});
		// #endif

		// #ifdef APP-PLUS
		uni.login({
			provider: 'weixin',
			success: res => {
				// 连上手机看
				// console.log(JSON.stringify(res))
				uni.getUserInfo({
					success: info => {
						// console.log(JSON.stringify(info))
						// 原生写法
						uni.request({
							url: 'https://www.ltedu.xyz/api/user/login',
							method: 'POST',
							header: {
								'content-type': 'application/x-www-form-urlencoded'
							},
							data: {
								openid: info.userInfo.openId,
								name: info.userInfo.nickName,
								face: info.userInfo.avatarUrl
							},
							success: res => {
								console.log(JSON.stringify(res));
								res = res.data;
								if (res.data.status === 200) {
									uni.showToast({
										title: '登录成功'
									});
									uni.setStorageSync('SUID', res.data.u_id + '');
									uni.setStorageSync('SRADN', res.data.u_random + '');
									uni.setStorageSync('SNAME', res.data.u_name + '');
									uni.setStorageSync('SFACE', res.data.u_face + '');
									// 跳转
									if (options.backtype === 1) {
										uni.redirectTo({
											url: options.backpage
										});
									} else {
										uni.switchTab({
											url: options.backpage
										});
									}
								} else {
									// 打印具体错误信息 生产环境直接告诉用户失败!!
									uni.showToast({
										title: res.data
									});
								}
							},
							fail: () => {},
							complete: () => {}
						});
					},
					fail: () => {
						uni.showToast({
							title: '微信授权失败',
							icon: 'none'
						});
					}
				});
			},
			fail: () => {
				uni.showToast({
					title: '微信授权失败',
					icon: 'none'
				});
			}
		});
		// #endif
	},
	methods: {
		getUserInfo(res) {
			console.log(res);
		}
	}
};
</script>

<style></style>
