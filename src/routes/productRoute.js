const express = require("express");
const app = express.Router();
const productController = require('../controllers/productController');

app.get("/", productController.getProducts);

app.get("/:id",productController.getProductsById);

app.get("/name/:name",productController.getProductsByName);

app.post("/",productController.addProducts)

app.put("/:id",productController.editProduct);

app.patch("/:id",productController.patchProduct);

app.delete("/:id",productController.deleteProduct);

module.exports = app;