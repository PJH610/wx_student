export const checkLogin = (backpage, backtype) => {

	let SUID = uni.getStorageSync('SUID')
	let SRAND = uni.getStorageSync('SRAND')
	let SNAME = uni.getStorageSync('SNAME')
	let SFACE = uni.getStorageSync('SFACE')
	if (SUID === "" || SRAND === "" || SFACE === "") {
		uni.redirectTo({
			url: '/pages/login/login?backpage=' + backpage + '&backtype=' + backtype
		});
		return false
	}
	return [SUID,SRAND,SNAME,SFACE]

}
