'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.handleAxiosError = undefined;

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _fs = require('fs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleAxiosError = exports.handleAxiosError = function handleAxiosError(error) {
	if (!error) return;
	var errorMsg = '';
	if (error.response) errorMsg = error.response.statusText;else if (error.message) errorMsg = error.message;else errorMsg = error;
	return errorMsg;
};

var Shopify = function Shopify(req, res) {
	var accessTokenRequestUrl = 'https://shami-ai.myshopify.com/admin/oauth/access_token';
	var accessTokenPayload = {
		client_id: "2312d2eba17dd594fb40ba8734ed10e0",
		client_secret: "a5f3408d00badf77a4dbd00d88d4c080",
		code: '298d82479cffd57bc48e837b91944419'
	};
	// request.post(accessTokenRequestUrl, { json: accessTokenPayload })
	// .then((accessTokenResponse) => {
	//   const accessToken = accessTokenResponse.access_token;
	//   console.log('accessToken response******', accessToken);
	//   res.send(accessToken);
	// })
	// .catch((error) => {
	// 	console.log('error******** ', error);
	// 	res.send(error);
	// });

	var shopRequestUrl = 'https://shami-ai.myshopify.com/admin/products.json';
	var shopRequestHeaders = {
		'X-Shopify-Access-Token': 'da8f78abf6fe6502b8bd0b244016c74b'
	};

	(0, _axios2.default)({ baseURL: shopRequestUrl, headers: shopRequestHeaders }).then(function (shopResponse) {
		res.write(shopResponse.status);
		res.write(shopResponse.data);
		setTimeout(function () {
			return res.send(shopResponse.data);
		}, 3000);
	}).catch(function (error) {
		handleAxiosError(error);
		res.status(error.statusCode).send(error.error.error_description);
	});
};

exports.default = Shopify;

// request.get(shopRequestUrl, { headers: shopRequestHeaders })
// .then((shopResponse) => {
//   res.end(shopResponse);
// })
// .catch((error) => {
//   res.status(error.statusCode).send(error.error.error_description);
// });