/* HARD: Add the remaining CRUD functionality to your medium problem.
Make sure you return the proper HTTP status codes based on the outcome of the request. Be sure to implement error checking here.
If an invalid request is made, we want to return some sort of error message and the correct HTTP status code for the situation.
HTTP Status Codes: http://www.restapitutorial.com/httpstatuscodes.html

 
POST::myendpointname.com/employees  =  Inserts new employee into your data.
GET::myendpointname.com/employees = Returns json with information from all employees.
GET::myendpointname.com/employees/<employeeID>  =  Returns json with the information from that specific employee.
PUT::myendpointname.com/employees/<employeeID>  =  Updates information for specified employee.
DELETE::myendpointname.com/employees/<employeeID>  =  Removes the employee with that ID from the data. */

const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");


var app = express();

app.use(bodyParser.json());

const data = JSON.parse(fs.readFileSync('../employees.json', 'utf-8'))

app.get("/employees", (req, res) => {
  res.send(data);
});
// GET EMPLOYEES FROM USER INPUT
app.get("/employees/:id", (req, res) => {

  const Employee = data.filter(
    employee => employee.employeeID === Number(req.params.id)
  );

  if (Employee.length > 0) {
    return res.send(Employee);
  }
  res.status(404).send("Employee Not Found");
});

// POSTING NEW EMPLOYEES
app.post("/employees/", (req, res) => {

  const { name, salary, department, employeeID } = req.body;

  if (name && salary && department && employeeID) {
    const newEmployee = {
      name,
      salary,
      department,
      employeeID
    };

    data.push(newEmployee);
    fs.writeFileSync("../employees.json", JSON.stringify(data));
    res.send(newEmployee);

  } else {
    res.status(422).send("Unable To Add");
  }
});
// DELETING EMPLOYEES
app.delete('/employees/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const filteredEmployees = data.filter(employee => employee.employeeID !== id)
    if(filteredEmployees.length === data.length) {
        return res.status(404).send("Didnt Delete")
    }
    fs.writeFileSync('../employees.json', JSON.stringify(filteredEmployees))
    res.send(filteredEmployees)
})
// UPDATES EXISTING EMPLOYEE BASED ON EMPLOYEEID OR POSTS NEW EMPLOYEE IF EMPLOYEE DOESNT EXIST
app.put('/employees/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const { name, salary, department, employeeID } = req.body;

    const newEmployee = {
      name,
      salary,
      department,
      employeeID
    };

    for(let i = 0; i < data.length; i++) {
        if(data[i].employeeID === id) {
          if (name && salary && department && employeeID) {
            data[i] = newEmployee
            fs.writeFileSync('../employees.json', JSON.stringify(data))
            return res.send(data[i])
          } else {
            res.status(400).send('Couldnt Update User')
          }
        } 
    }   
    if (name && salary && department && employeeID) {
      data.push(newEmployee);
      fs.writeFileSync("../employees.json", JSON.stringify(data));
      res.send(newEmployee);  
    }
})
app.listen(3000);
