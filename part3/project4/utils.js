const bitcoin = require("bitcoinjs-lib"), // v3.x.x
	bitcoinMessage = require("bitcoinjs-message");

// sets regex to test if stored value is in hex encoding
const hexRegex = /[0-9A-Fa-f]{6}/g;

// returns true if string is hex encoded
const checkHex = string => {
	if (hexRegex.test(string)) {
		return true;
	} else {
		return false;
	}
};

// sets the ascii js regex
const asciiRegex = /^[\x00-\x7F]*$/;

// returns true if string contains only ascii characters
const checkAscii = str => {
	if (asciiRegex.test(str)) {
		return true;
	} else {
		return false;
	}
};

// encodes unicode string to hex
const asciiToHex = str => {
	var result = "";
	for (var i = 0; i < str.length; i++) {
		result += str.charCodeAt(i).toString(16);
	}
	return result;
};

// decodes hex string to unicode
const hexToAscii = hex => {
	var str = "";
	for (var i = 0; i < hex.length; i += 2)
		str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
	return str;
};

const wordCount = str => {
	return str.split(" ").filter(function(n) {
		return n != "";
	}).length;
};

const timer = countDownDate => {
	setInterval(function() {
		// Get todays date and time
		let now = new Date().getTime();

		// Find the distance between now and the count down date
		let distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		let hours = Math.floor(
			(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// returns full date
		let time = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

		let secondsLeft = (distance / 1000) | 0;
		let message = `New star registration requests valid for another ${secondsLeft} seconds`;
		// sets global variable for remaining seconds
		global.authWindow = message;

		switch (secondsLeft) {
			case 299: {
				console.log(message);
				return global.message;
			}
			case 240: {
				console.log(message);
				return global.message;
			}
			case 180: {
				console.log(message);
				return global.message;
			}
			case 120: {
				console.log(message);
				return global.message;
			}
			case 60: {
				console.log(message);
				return global.message;
			}
			case 0: {
				console.log(message);

				// deletes all authentication globals
				delete global.signature;
				delete global.address;
				delete global.authWindow;
				delete global.authenticated;
				delete global.timestamp;
				delete global.countDownDate;
				delete global.message;
				console.log(
					`Your validation has expired, please send a post request to /requestValidation route to authenticate`
				);
				return global.message;
			}
			default:
				return "default case";
		}
		// returns expired once expired
		if (distance < 0) {
			clearInterval(x);
			return "EXPIRED";
		}
	}, 1000);
};

const validateProperties = star => {
	let checkProperties = true;

	// maps through the object keys, checks that only valid properties are passed in request
	Object.keys(star).map(function(key, index) {
		if (
			key == "dec" ||
			key == "ra" ||
			key == "mag" ||
			key == "con" ||
			key == "star_story"
		) {
			console.log("Valid property!");
		} else {
			console.log("Invalid property:", key);
			checkProperties = false;
		}
	});
	return checkProperties;
};

const validateSignature = (message, address, signature) => {
	try {
		let signatureCheck = bitcoinMessage.verify(message, address, signature);
		return signatureCheck;
	} catch (err) {
		console.log('Signature validation error:', err);
		return false;
	}
};

module.exports = {
	validateSignature,
	validateProperties,
	checkHex,
	checkAscii,
	asciiToHex,
	hexToAscii,
	wordCount,
	timer
};