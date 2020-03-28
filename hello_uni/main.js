import Vue from 'vue'
import App from './App'
import {
	myRequest
} from './util/api.js'
import {
	checkLogin
} from './util/checkLogin.js'

Vue.prototype.$myRequest = myRequest

Vue.prototype.$checkLogin = checkLogin

Vue.filter('fromatDate', (date) => {
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
})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
