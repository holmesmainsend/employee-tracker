const inquirer = require("inquirer");

function generalPrompts() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'home',
            message: 'Employee Tracker Home Screen',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update Employee Role']
        }
    ])
    .then((data) => {

    })
}

generalPrompts();