<template>
	<view>
		<view class="login">
			<view class="login_log"><image src="../../static/logo.png" mode=""></image></view>
			<view class="login_btn">
				<!-- #ifdef MP-WEIXIN -->
				<button type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">微信快速登录</button>
				<!-- #endif -->
			</view>
			<view class="login_text">
				<text>手机验证码登录</text>
				<text>|</text>
				<text>账号密码登录</text>
			</view>
			<view class="agreement">
				<text>使用即为同意</text>
				<text class="text_color">{{ code_1 }}用户服务协议{{ code_2 }}</text>
				<text>和</text>
				<text class="text_color">{{ code_1 }}隐私政策{{ code_2 }}</text>
			</view>
		</view>
	</view>
</template>

<script>
let _self;
export default {
	data() {
		return {
			appId: '',
			code_wx: '',
			code_1: '《',
			code_2: '》'
		};
	},
	onLoad(options) {
		_self = this;
		// console.log(options);
		// 微信端
		// #ifdef MP-WEIXIN
		uni.login({
			success(res) {
				console.log(res.code);
				_self.code_wx = res.code;
				// uni.request({
				// 	url: 'http://localhost:8080/wx/getappid/?code=' + res.code,
				// 	method: 'POST',
				// 	success: res => {
				// 		console.log(res.data.data);
				// 		_self.appId = res.data.data;
				// 	},
				// 	fail: () => {},
				// 	complete: () => {}
				// });
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
			let wxdata = {
				code: this.code_wx, //临时登录凭证
				rawData: res.detail.rawData, //用户非敏感信息
				signature: res.detail.signature, //签名
				encrypteData: res.detail.encryptedData, //用户敏感信息
				iv: res.detail.iv //解密算法的向量
			};
			console.log(wxdata)
			uni.request({
				url: 'http://localhost:8080/wx/login',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				method: 'POST',
				data: wxdata,
				success: res => {
					console.log(res);
					if (res.data.status == 200) {
						// 7.小程序存储skey（自定义登录状态）到本地
						// wx.setStorageSync('userInfo', userInfo);
						// wx.setStorageSync('skey', res.data.data);
						console.log('以下是登录成功的信息!!');
						console.log(res);
					} else {
						console.log('服务器异常');
					}
				},
				fail: error => {
					//调用服务端登录接口失败
					console.log(error);
				},
				complete: () => {}
			});
		}
	}
};
</script>

<style lang="scss">
.login {
	width: 750rpx;
	// align-items: center; /*y轴对滴方式*/
	// height: 100vh;
	.login_log {
		margin-top: 80px;
		display: flex;
		justify-content: center; /*x轴对齐方式*/
		image {
			width: 150rpx;
			height: 150rpx;
		}
	}
	.login_btn {
		margin-top: 50px;
		button {
			width: 650rpx;
		}
	}
	.login_text {
		display: flex;
		justify-content: center; /*x轴对齐方式*/
		margin-top: 25px;
		color: #3f3f3f;
		font-size: 32rpx;
		text:nth-child(2) {
			margin: 0 8px;
		}
	}
	.agreement {
		width: 750rpx;
		position: fixed;
		bottom: 15px;
		left: 50%;
		margin-left: -300rpx;
		// background-color: #EEEEEE;
		text {
			font-size: 28rpx;
			color: #777777;
		}
		.text_color {
			color: #8ec7f7;
		}
	}
}
</style>
