/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
	return /^(https?:|mailto:|tel:)/.test(path);
}

export function isEmail(val) {
	var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
	if (exptext.test(val) == false) {
		return false;
	} else {
		return true;
	}
}

export function isTel(val) {
	var exptext = /^\d{2,3}-\d{3,4}-\d{4}$/;
	if (exptext.test(val) == false) {
		return false;
	} else {
		return true;
	}
}

export function isDepartment(val) {
	// need to input
	return true;
}

export function isTitle(val) {
	// need to input
	return true;
}

export function isName(val) {
	var exptext = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;

	if (exptext.test(val) == false) {
		return false;
	} else {
		return true;
	}
}

export function isAppleDevice() {
	if (navigator.userAgent.match(/(iPhone|iPod|iPad)/) != null) {
		return true;
	}
	return false;
}

export function isMobile() {
	let filter = 'win16|win32|win64|mac|macintel';
	if (navigator.platform) {
		if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
			return true;
		} else {
			return false;
		}
	}
}

// /**
//  * @param {string} str
//  * @returns {Boolean}
//  */
// export function validUsername(str) {
// 	const valid_map = ['admin', 'editor', 'CMS_SMT_001'];
// 	return valid_map.indexOf(str.trim()) >= 0;
// }
