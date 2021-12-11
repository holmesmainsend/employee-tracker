INSERT INTO department (name)
VALUES
('Shipping'),
('Customer Service'),
('Recruiting'),
('Accounting'),
('Management');

INSERT INTO role (title, salary, department_id)
VAlUES
('Foreman', 65000, 1),
('Shipper', 40700, 1),
('Receptionist', 41000, 2),
('Customer Service Intern', 30000, 2),
('Headhunter', 65200, 3),
('Headhunting Assistant', 46050, 3),
('Headhunting Intern', 32900, 3),
('Senior Accountant', 70400, 4),
('Junior Accountant', 35000, 4),
('Shipping Manager', 80500, 5),
('Customer Service Manager', 76099, 5),
('Recruiting Manager', 84590, 5),
('Accounting Manager', 94300, 5),
('CEO', 14999000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Ruben', 'Harrelson', 1, 1),
('Joe', 'Schmoe', 2, 1),
('Clarice', 'Answerton', 3, 2),
('Clara', 'the Younger', 4, 2),
('Mike', 'Tar', 5, 3),
('Pike', 'Mar', 5, 3),
('Mickey', 'Tarita', 6, 3),
('Pikey', 'Marita', 6, 3),
('Mickpick', 'Tarmar', 6, 3),
('Generic', 'Intern', 7, 3),
('Ebeneezer', 'Scrooge', 8, 4),
('Alexander', 'Hamilton', 9, 4),
('Adam', 'Smith', 9, 4);

INSERT INTO manager (first_name, last_name, role_id)
VALUES
('Fedexington', 'UPSintine', 10),
('Dolores', 'Umbridge', 11),
('Head', 'Collector', 12),
('Scrooge', 'McDuck', 13),
('Mark', 'Cuban', 14);