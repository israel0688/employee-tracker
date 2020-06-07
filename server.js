const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/database');

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
  
// Start server after DB connection
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});