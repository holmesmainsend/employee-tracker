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

db.query(
    'SELECT * FROM role',
    function(err, results, fields) {
        console.table(results);
    }
)


// function generalPrompts() {
//     inquirer
//     .prompt([
//         {
//             type: 'list',
//             name: 'home',
//             message: 'Employee Tracker Home Screen',
//             choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update Employee Role']
//         }
//     ])
//     .then((data) => {

//     })
// }

// generalPrompts();