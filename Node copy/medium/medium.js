/* MEDIUM: Create a JSON file that will have 10 employees in it, their employeeID, their name, their salary and department name.
Then, create an express API so that when you hit the endpoint with a GET request we want the api to respond with all data on the employees.
If you hit the endpoint with their employeeID, we want to hand up only the information on that one employee.
If you hit the endpoint with an incorrect employeeID, send back the correct HTTP status code and an error message stating that the employee was not found.
GET::myendpointname.com/employees = Json with information from all 10 employees.
GET::myendpointname.com/employees/<employeeID> = Json with the information from that specific employee. */

const express = require("express");

const data = require("../employees.json").employees;

var app = express();

app.get("/employees", (req, res) => {
  res.send(data);
});

app.get("/employees/:id", (req, res) => {
  const id = req.params.id
  const Employee = data.filter(
    employee => employee.employeeID === Number(id)
  );
  if(Employee.length > 0) {
    return res.send(Employee);
  }
  res.status(404).send('Employee Not Found');
});

app.listen(3000);


