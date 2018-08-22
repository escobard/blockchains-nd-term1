"use strict";

const router = require("express").Router(),
WAValidator = require("wallet-address-validator"),
validation = require("../utils")

// This route expects the following JSON {body: 'walletAddressString'}
router.post("/", (req, res) => {
	let { body } = req;

	// should handle this via a class function instance, to keep all logic centralized
	if (!body) {
		console.log("Wallet address is undefined!");
		res.status(401).json({
			walletAddress: "Wallet address is undefined!"
		});
	} else {
		let valid = WAValidator.validate(body, "BTC");

		if (valid) {
			// handle valid logic here
			// using recommended number only format
			let timestamp = new Date().getTime().toString().slice(0, -3);
			let message = `${body}:${timestamp}:starRegistry`;
			validation(message)
			console.log("This is a valid address");
			res.status(200).json({
				status: 'Success, copy the string below to sign your block'
				message,
			});
		} else {
				console.log('Failed, address is invalid');
				res.status(401).json({
				status: 'Failed, address is invalid',
				message: undefined,
			});
		}
	}
});

module.exports = router;