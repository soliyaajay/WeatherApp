export const ENV = {
	DEV: "development",
	PROD: "production",
	TEST: "test",
	QA: "qa"
};
export const BASE_URL = "http://api.openweathermap.org"; // Development URL

export const API_URL = {
	SIGNUP: "auth/register/",
	LOGIN: "auth/login/",
	FORGOT_PWD: 'auth/password/reset/',
	CHANGE_PWD: 'auth/password/change/',
	getCityList: '/data/2.5/find?lat=23.68&lon=90.35&cnt=50&appid=f9e0fd2e2dc06663bd136c983700a0e9',
};