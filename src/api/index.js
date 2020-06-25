import request from '@/utils/request';

export function sendPerscription(data) {
	console.log(data);
	return request({
		method: 'post',
		url: '/data',
		data: data,
	});
}
