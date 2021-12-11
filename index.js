// TODO: add inquirer to adder/updater functions
// TODO: create walkthrough video + README

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
        'SELECT role.id, role.title, role.salary, department.department_name FROM role LEFT JOIN department ON role.department_id=department.id',
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
        'SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.department_name, manager.boss_last_name FROM employee LEFT JOIN role ON employee.role_id=role.id LEFT JOIN department ON role.department_id=department.id LEFT JOIN manager ON employee.manager_id=manager.id;',
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
        'SELECT manager.id, manager.boss_first_name, manager.boss_last_name, role.title, role.salary FROM manager LEFT JOIN role on manager.role_id=role.id;',
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
// function departmentAdder() {
//     const sql = 'INSERT INTO department (department_name) VALUES (?)';
//     const params = '';

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             console.log(err);
//             return;
//         } else {
//             console.log(" ");
//             console.log("Department Added");
//             console.log(" ");
//             console.log("Press up or down arrow key to return to home screen");
//         }
//       });
//     homeScreen();
// }
// function roleAdder() {
//     const sql = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
//     const params = [ , , ];

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             console.log(err);
//             return;
//         } else {
//             console.log(" ");
//             console.log("Role Added");
//             console.log(" ");
//             console.log("Press up or down arrow key to return to home screen");
//         }
//       });
//     homeScreen();
// }
// function employeeAdder() {
//     const sql = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
//     const params = [ , , , ];

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             console.log(err);
//             return;
//         } else {
//             console.log(" ");
//             console.log("Employee Added");
//             console.log(" ");
//             console.log("Press up or down arrow key to return to home screen");
//         }
//       });
//     homeScreen();
// }
// function roleUpdater() {
//     const sql = 'UPDATE employee SET role_id = ? WHERE id = ?';
//     const params = [ , ];

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             console.log(err);
//             return;
//         } else {
//             console.log(" ");
//             console.log("Employee Role Updated");
//             console.log(" ");
//             console.log("Press up or down arrow key to return to home screen");
//         }
//       });
//     homeScreen();
// }


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