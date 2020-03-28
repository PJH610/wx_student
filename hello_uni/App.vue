<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@font-face {font-family: "iconfont";
	  src: url('~@/static/font/iconfont.eot?t=1583742062311'); /* IE9 */
	  src: url('~@/static/font/iconfont.eot?t=1583742062311#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
	  url('~@/static/font/iconfont.woff?t=1583742062311') format('woff'),
	  url('~@/static/font/iconfont.ttf?t=1583742062311') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	  url('~@/static/font/iconfont.svg?t=1583742062311#iconfont') format('svg'); /* iOS 4.1- */
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-lianxi:before {
	  content: "\e628";
	}
	
	.icon-chaoshishangpin:before {
	  content: "\e631";
	}
	
	.icon-kebiao:before {
	  content: "\e678";
	}
	
	.icon-shipin:before {
	  content: "\e71f";
	}
	/* 处理详情页加载内容图片样式问题 */
	.gomeImgLoad{
		width: 750rpx ;
		height: auto;
	}
	
</style>
