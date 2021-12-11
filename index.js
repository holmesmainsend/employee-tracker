const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');


// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'employee_tracker'
    },
  );


// Main Database Interactions
function viewAllDepartments() {
    db.query(
        'SELECT * FROM department',
        function(err, results, fields) {
            console.log(" ");
            console.log(" ");
            console.table(results);
            console.log(" ");
            console.log("Press up or down arrow key to return to home screen");
        }
    )
    homeScreen();
}
function viewAllRoles() {
    db.query(
        'SELECT * FROM role',
        function(err, results, fields) {
            console.log(" ");
            console.log(" ");
            console.table(results);
            console.log(" ");
            console.log("Press up or down arrow key to return to home screen");
        }
    )
    homeScreen();
}
function viewAllEmployees() {
    db.query(
        'SELECT * FROM employee',
        function(err, results, fields) {
            console.log(" ");
            console.log(" ");
            console.table(results);
            console.log(" ");
            console.log("Press up or down arrow key to return to home screen");
        }
    )
    homeScreen();
}
function viewAllManagers() {
    db.query(
        'SELECT * FROM manager',
        function(err, results, fields) {
            console.log(" ");
            console.log(" ");
            console.table(results);
            console.log(" ");
            console.log("Press up or down arrow key to return to home screen");
        }
    )
    homeScreen();
}
function departmentAdder() {
    const sql = 'INSERT INTO department (name) VALUES (?)';
    const params = 'The Fishery';

    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(" ");
            console.log(" ");
            console.table(result);
            console.log(" ");
            console.log("Press up or down arrow key to return to home screen");
        }
      });
    homeScreen();
}
function roleAdder() {
    const sql = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
    const params = ['Junior Stocker', 20000, 1];

    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(" ");
            console.log("Role Added");
            console.log(" ");
            console.log("Press up or down arrow key to return to home screen");
        }
      });
    homeScreen();
}
function employeeAdder() {
    const sql = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
    const params = ['Jimmy', 'Holiday', 2, 1];

    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(" ");
            console.log("Employee Added");
            console.log(" ");
            console.log("Press up or down arrow key to return to home screen");
        }
      });
    homeScreen();
}
function roleUpdater() {
    const sql = 'UPDATE employee SET role_id = ? WHERE id = ?';
    const params = [1, 5];

    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(" ");
            console.log("Employee Role Updated");
            console.log(" ");
            console.log("Press up or down arrow key to return to home screen");
        }
      });
    homeScreen();
}


// Home Screen
function homeScreen() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'home',
            message: 'Employee Tracker Home Screen',
            choices: ['View all departments', 'View all roles', 'View all employees', 'View all managers', 'Add a department', 'Add a role', 'Add an employee', 'Update employee role']
        }
    ])
    .then((data) => {
        switch (data.home) {
            case 'View all departments':
                viewAllDepartments();
                break;
            case 'View all roles':
                viewAllRoles();
                break;
            case 'View all employees':
                viewAllEmployees();
                break;
            case 'View all managers':
                viewAllManagers();
                break;
            case 'Add a department':
                departmentAdder();
                break;
            case 'Add a role':
                roleAdder();
                break;
            case 'Add an employee':
                employeeAdder();
                break;
            case 'Update employee role':
                roleUpdater();
                break;
        }
    })
}


// Impetus
homeScreen();