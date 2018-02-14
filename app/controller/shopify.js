import request from 'request-promise';
import axios from 'axios';
import { accessSync } from 'fs';

export const handleAxiosError = (error) => {
	if (!error) return;
	let errorMsg = '';
	if (error.response) errorMsg = error.response.statusText;
	else if (error.message) errorMsg = error.message;
	else errorMsg = error;
	return errorMsg;	
};


const Shopify = (req, res) => {
	console.log('hello shopify controller');
	const accessTokenRequestUrl = `https://shami-ai.myshopify.com/admin/oauth/access_token`;
	const accessTokenPayload = {
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

	const baseURL = 'https://shami-ai.myshopify.com/admin/products.json';
	const shopRequestHeaders = {
	  'X-Shopify-Access-Token': 'da8f78abf6fe6502b8bd0b244016c74b',
	};

	axios({baseURL, headers: shopRequestHeaders})
	.then((shopResponse) => {
		console.log('response promise*******', shopResponse.data);
		res.send(shopResponse.data)
	})
	// .then(data=>res.send(data))
	.catch((error) => {
		console.log('error promise*******', error);
		handleAxiosError(error);
	  res.status(error.statusCode).send(error.error.error_description);
	});
};

export default Shopify;




// request.get(shopRequestUrl, { headers: shopRequestHeaders })
// .then((shopResponse) => {
//   res.end(shopResponse);
// })
// .catch((error) => {
//   res.status(error.statusCode).send(error.error.error_description);
// });