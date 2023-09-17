const request = require("supertest");
const fs = require("fs");
const path = require('path');

const DATABASE = path.resolve(__dirname, "./../data/products.json");
let products = null;

function readProducts()
{
	let data = fs.readFileSync(DATABASE);
	products = JSON.parse(data);
}

const getAllProducts = jest.fn(() => products);

describe("**PRODUCTS MODULE**", () => {

	beforeEach(() => {
		readProducts();
	});

	// Test create product success

	// Test create product failed

	test("GET all products success", async () => {
		getAllProducts.mockReset();
		getAllProducts.mockReturnValueOnce({products});

		const response = await request(app).get("/api/products/").send();
		
		expect(response.statusCode).toBe(200);
		expect(getAllProducts.mock.calls.length).toBe(1);
		expect(response.body).toEqual({products});
	});

	// Test get all products failed

	// Test get existing product

	// Test Get unexisting product

	// Test modify product

	// Test modify empty product

	// Test modify non existing product

	// Test delete product
});