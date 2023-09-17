const express = require('express');
require('dotenv/config');

function makeApp()
{
	const app = express();
	app.use(express.json());

	app.get('/', (req, res) => {
		res.send("Welcome to the bakery.");
	});

	app.PORT = process.env.PORT || 3000;
	
	return app;
}

module.exports = 
{
	makeApp
}