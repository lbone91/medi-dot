import axios from 'axios';
// create an axios instance
const service = axios.create({
	baseURL: 'http://10.10.10.110:3000', // url = base url + request url
	//baseURL: 'http://127.0.0.1:3000',
	// withCredentials: true, // send cookies when cross-domain requests
	timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
	config => {
		// do something before request is sent

		// let each request carry token
		// ['X-Token'] is a custom headers key
		// please modify it according to the actual situation

		return config;
	},
	error => {
		// do something with request error
		console.log(error); // for debug
		return Promise.reject(error);
	},
);

// response interceptor
service.interceptors.response.use(
	/**
	 * If you want to get http information such as headers or status
	 * Please return  response => response
	 */

	/**
	 * Determine the request status by custom code
	 * Here is just an example
	 * You can also judge the status by HTTP Status Code
	 */
	response => {
		let data = response.data;

		if (response.status == 200 || response.status == 204) {
			if (typeof data == 'undefined' || data == null || data == '') return true;
			else return data;
		} else if (response.status == 400 || response.status == 404) {
			return Promise.reject(new Error(data.message || 'Error'));
		}
		return response;
	},
	error => {
		console.log('err' + error); // for debug
		// Message({
		// 	message: error.message,
		// 	type: 'error',
		// 	duration: 5 * 1000,
		// });
		return Promise.reject(error);
	},
);

export default service;
