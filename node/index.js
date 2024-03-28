const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;


const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'mydb'
});


connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ', err);
        return;
    }
    console.log('Connected to the database.');
});


connection.query('CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))', (err, results, fields) => {
    if (err) throw err;
    console.log('Table created or already exists.');
});

app.get('/add/:name', (req, res) => {
    const name = req.params.name;
    connection.query('INSERT INTO people (name) VALUES (?)', [name], (err, results, fields) => {
        if (err) throw err;
        console.log('Name added to the database:', name);
        res.send('<h1>Full Cycle Rocks!</h1><br><br>List of names added to the database:<br>');
    });
});


app.get('/', (req, res) => {
    connection.query('SELECT * FROM people', (err, results, fields) => {
        if (err) throw err;
        console.log('Retrieved names from the database:', results);
        let names = '';
        results.forEach(result => {
            names += result.name + '<br>';
        });
        res.send('<h1>Full Cycle Rocks!</h1><br><br>List of names from the database:<br>' + names);
    });
});


app.get('/', (req, res) => {
    res.send('<h1>Full Cycle Rocks!</h1><br><br>List of names from the database:<br>');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));