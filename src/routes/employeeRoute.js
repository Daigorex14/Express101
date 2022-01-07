const express = require("express");
const app = express.Router();
const employeeController = require('../controllers/employeeController');

app.get("/", employeeController.getEmployee);

app.get("/:id",employeeController.getProductsById);

app.get("/tax/:sal",employeeController.getProductsByName);

app.get("/retire/:age",employeeController.getProductsByName);

app.post("/",employeeController.addEmployee)

module.exports = app;