const express = require('express')
const app = express()
const port = 3003
const mysql = require('mysql')
const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

const con = mysql.createConnection({
    host: "localhost",
    user: "newuser",
    password: "",
    database: "hr"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

//Read Node
app.get('/duomenys', (req, res) => {
    const sql = `
        SELECT *
        FROM duomenys
    `;
    con.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

//Create Node
app.post('/duomenys', (req, res) => {
    const sql = `
        INSERT INTO duomenys
        (firstname, surname, address, phone_no, email, salary, started_work)
        VALUES (?, ?, ?, ?)
    `;
    con.query(sql, [
        req.body.firstname,
        req.body.surname,
        req.body.address,
        req.body.phone_no,
        req.body.email,
        req.body.salary,
        req.body.started_work
    ], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

//Update Node
app.put('/duomenys/:id', (req, res) => {
    const sql = `
        UPDATE duomenys
        SET firstname = ?, surname = ?, address =?, phone_no =?, email = ?, salary = ?, started_work = ?
        WHERE id = ?
    `;
    con.query(sql, [
        req.body.firstname,
        req.body.surname,
        req.body.address,
        req.body.phone_no,
        req.body.email,
        req.body.salary,
        req.body.started_work,
        req.params.id
    ], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

//Delete Node
app.delete('/duomenys/:id', (req, res) => {
    const sql = `
        DELETE FROM duomenys
        WHERE id = ?
        `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})


//Filter Node
app.get('/duomenys-filter/:t', (req, res) => {
    const sql = `
        SELECT *
        FROM duomenys
        WHERE surname = ?
    `;
    
    con.query(sql, [req.params.t], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

//Search Node
app.get('/duomenys-surname', (req, res) => {
    const sql = `
        SELECT *
        FROM duomenys
        WHERE surname LIKE ?
    `;
    con.query(sql, ['%' + req.query.s + '%'], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})


app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
});