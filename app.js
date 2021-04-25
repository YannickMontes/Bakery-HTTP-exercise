const fs = require('fs');
const express = require('express');

const format = require('./joi_request_format');
const DATABASE = './data/products.json';

const app = express();
app.use(express.json());


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => `Listening on http://localhost:${PORT} ...`);