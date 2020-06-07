INSERT INTO department (name)
VALUES
    ('Engineering'),
    ('Sales'),
    ('Legal'),
    ('Finance');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Lead Engineer', 120000, 1),
    ('Software Engineer', 105000, 1),
    ('Junior Engineer', 70000, 1),
    ('Sales Lead', 100000, 2),
    ('Sales Person', 70000, 2),
    ('Junior Sales', 50000, 2),
    ('Legal Team Lead', 150000, 3),
    ('Lawyer', 115000, 3),
    ('Junior Legal', 90000, 3),
    ('Finance Lead', 10000, 4),
    ('Accountant', 80000, 4),
    ('Junior Accountant', 50000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
    ('Ronald', 'Firbank', 1, NULL),
    ('Virginia', 'Woolf', 2, 1),
    ('Piers', 'Gaveston', 5, 0),
    ('Charles', 'LeRoi', 4, Null),
    ('Katherine', 'Mansfield', 8, 1),
    ('Dora', 'Carrington', 11, 0),
    ('Edward', 'Bellamy', 7, Null),
    ('Montague', 'Summers', 2, 1),
    ('Octavia', 'Butler', 8, 1),
    ('Unica', 'Zurn', 10, Null);