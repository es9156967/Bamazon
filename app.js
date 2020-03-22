const inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "es915696",
    database: "employee_db"
  });

  //initial prompt. Moves user to a number of different actions.
var promptStart = function () {
    inquirer
    .prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: ["View Departments", "View Roles", "View Employees", "Add Department", "Add Role", "Add Employee", "Update Employee Role", "Exit"],
            name: "Next_Section"
        },
    ])
    .then(function(answers){
        if(answers.Next_Section === "View Departments"){
            console.log ("\n--------------")
            console.log("Current Departments:")
            console.log("\n--------------")
        }
    })
}

promptStart()