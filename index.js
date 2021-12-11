const inquirer = require('inquirer');
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'password',
      database: 'employee_tracker'
    },
    console.log('Connected to the employee_tracker database.')
  );

  db.query(
      'source db/schema.sql',
      'source db/seeds.sql',
      function(err, results, fields) {
      }
)
  db.query(
    'SELECT * FROM employee',
    function(err, results, fields) {
        console.log(results);
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