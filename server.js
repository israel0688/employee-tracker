const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/database');
const inquirer = require("inquirer");

/*const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'pick',
      message: 'What do you want to do?',
      choices: ['Display all employees', 'Display all roles', 'Display all Departments'],
    }
  ]);
}; */

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Get all roles
app.get('/api/role', (req, res) => {
  const sql = `SELECT * FROM role`;
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json({
      message: 'success',
      data: rows
    });
  });
});

// Add a role
app.post('/api/role', ({ body }, res) => {
  const sql = `INSERT INTO role (title, salary, department_id,) 
  VALUES (?,?,?)`;
const params = [body.title, bode.salary, body.department_id];
// ES5 function, not arrow function, to use `this`
db.run(sql, params, function(err, result) {
if (err) {
res.status(400).json({ error: err.message });
return;
}

res.json({
message: 'success',
data: body,
id: this.lastID
});
});
});

// Get all departments
app.get('/api/department', (req, res) => {
  const sql = `SELECT * FROM department`;
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json({
      message: 'success',
      data: rows
    });
  });
});

// Add a department
app.post('/api/department', ({ body }, res) => {
  const sql = `INSERT INTO department (name) 
  VALUES (?)`;
const params = [body.name];
// ES5 function, not arrow function, to use `this`
db.run(sql, params, function(err, result) {
if (err) {
res.status(400).json({ error: err.message });
return;
}

res.json({
message: 'success',
data: body,
id: this.lastID
});
});
});

// Get all employees
app.get('/api/employee', (req, res) => {
  const sql = `SELECT * FROM employee`;
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json({
      message: 'success',
      data: rows
    });
  });
});

// Create an employee
app.post('/api/employee', ({ body }, res) => {
  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) 
  VALUES (?,?,?,?)`;
const params = [body.first_name, body.last_name, body.role_id, body.manager_id];
// ES5 function, not arrow function, to use `this`
db.run(sql, params, function(err, result) {
if (err) {
res.status(400).json({ error: err.message });
return;
}

res.json({
message: 'success',
data: body,
id: this.lastID
});
});
});
  
// Start server after DB connection
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(table);
        console.log(`Server running on port ${PORT}`);
    });
});

//promptUser();