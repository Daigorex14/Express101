const express = require("express");
const app = express.Router();
const employeeController = require('../controllers/employeeController');

app.get("/", employeeController.getEmployee);

app.get("/:id",employeeController.getEmployeeById);

app.get("/tax/:salary",employeeController.getSalary);

app.get("/retire/:age",employeeController.getTax);

app.post("/",employeeController.addEmployee)

module.exports = app;