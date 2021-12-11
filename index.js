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


// Refreshers
db.query(
      'source db/schema.sql',
      function(err, results, fields) {
        console.log("Refreshed schema");
      }
)
db.query(
    'source db/seeds.sql',
    function(err, results, fields) {
        console.log("Refreshed seeds");
    }
)


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
// function roleAdder() {
//     db.query(
//         '',
//         function(err, results, fields) {
//             console.log(" ");
//             console.log(" ");
//             console.table(results);
//             console.log(" ");
//             console.log("Press up or down arrow key to return to home screen");
//         }
//     )
//     homeScreen();
// }
// function employeeAdder() {
//     db.query(
//         '',
//         function(err, results, fields) {
//             console.log(" ");
//             console.log(" ");
//             console.table(results);
//             console.log(" ");
//             console.log("Press up or down arrow key to return to home screen");
//         }
//     )
//     homeScreen();
// }
// function roleUpdater() {
//     db.query(
//         '',
//         function(err, results, fields) {
//             console.log(" ");
//             console.log(" ");
//             console.table(results);
//             console.log(" ");
//             console.log("Press up or down arrow key to return to home screen");
//         }
//     )
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
            choices: ['View all departments', 'View all roles', 'View all employees', 'View all managers', 'Add a department', 'Add a role', 'Add an employee', 'Update Employee Role']
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