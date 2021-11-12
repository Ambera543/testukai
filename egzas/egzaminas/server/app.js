
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
    database: "egzaminas",
    password: ""
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

//Routing
// app.get('/', (req, res) => {
//     res.send('Labas, ka tu? As tai nieko.')
// })

// app.get('/labas/:id', (req, res) => {
//     res.send(`Pats tu ${req.params.id}.`)
// })

// app.get('/test', (req, res) => {
//     res.send(JSON.stringify({ test: 'OK' }))
// })

app.get('/nuts', (req, res) => {
    const sql = `
        SELECT *
        FROM nuts
    `;
    con.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

app.post('/nuts', (req, res) => {
    const sql = `
        INSERT INTO nuts
        (product, price, quantity, last_received)
        VALUES (?, ?, ?, ?)
    `;
    con.query(sql, [
        req.body.product,
        req.body.price,
        req.body.quantity,
        req.body.last_received
    ], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

//Update Node
app.put('/nuts/:id', (req, res) => {
    const sql = `
        UPDATE nuts
        SET product = ?, price = ?, quantity = ?, last_received = ?
        WHERE id = ?
    `;
    con.query(sql, [
        req.body.product,
        req.body.price,
        req.body.quantity,
        req.body.last_received,
        req.params.id
    ], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

//Delete Node
app.delete('/nuts/:id', (req, res) => {
    const sql = `
        DELETE FROM nuts
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
app.get('/nuts-filter/:t', (req, res) => {
    const sql = `
        SELECT *
        FROM nuts
        WHERE product = ?
    `;
    
    con.query(sql, [req.params.t], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

//Search Node
app.get('/nuts-product', (req, res) => {
    const sql = `
        SELECT *
        FROM nuts
        WHERE product LIKE ?
    `;
    con.query(sql, ['%' + req.query.s + '%'], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})