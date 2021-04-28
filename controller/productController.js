const Product = require('../models/Product');
const format = require('../joi_request_format');

function getAllProducts(req, res)
{
	Product.find()
		.then(products => res.status(200).json(products))
		.catch(error => res.status(500).json({error: error}));
}

module.exports = {getAllProducts: getAllProducts};