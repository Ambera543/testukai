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
    database: "zoo",
    password: ""
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

//Routing
app.get('/', (req, res) => {
    res.send('Labas, ka tu? As tai nieko.')
})

app.get('/labas/:id', (req, res) => {
    res.send(`Pats tu ${req.params.id}.`)
})

app.get('/test', (req, res) => {
    res.send(JSON.stringify({ test: 'OK' }))
})
// Visi gyvunai
app.get('/animals', (req, res) => {
    const sql = `
        SELECT *
        FROM animals
    `;
    con.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

// Prideti gyvuna
// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);
app.post('/animals', (req, res) => {
    const sql = `
        INSERT INTO animals
        (name, type, weight, born)
        VALUES (?, ?, ?, ?)
    `;
    con.query(sql, [
        req.body.name,
        req.body.type,
        req.body.weight,
        req.body.born
    ], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})


//     con.query(sql, (err, results) => {
//         if (err) {
//             throw err;
//         }
//         res.send(results);
//     })
// })

app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
})


// const { query } = require('express');
// const express = require('express')
// const app = express()
// const port = 3000
// const mysql = require('mysql')

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "newuser",
//   password: ""
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });


// //Routing
// app.get('/', (req, res) => {
//   res.send('Labas, ka tu?')
// })

// // app.get('/labas/:id', (req, res) => {

// //   res.send(`Pats tu ${req.params.id}.`)

// // })

// // con.query('select*from zoo')
// // con.connect(function(err) {
// //   if (err) throw err;
// // app.get('/test',(req, res)=>
// //   con.query("SELECT * FROM zoo.animals", function (err, result, fields) {
// //     if (err) throw err;
// //     console.log(result);
// //     res.send(result)
// //   }));


// // app.get('/',  (req, res) => {
// //   const { results: animals } =  query(
// //           conn,
// //           `
// //         select
// //           id, tipas, name, weight, born
// //         from animals
// //         order by
// //           id`,
// //         );

// //   res.send('Gyvunai ${req.animals.id}.')

// // })
// //   let conn;
// //   try {
// //     conn = await connect();
// //     const { results: cekiai } = await query(
// //       conn,
// //       `
// //     select
// //       id, data, parduotuve
// //     from cekiai
// //     order by
// //       data, parduotuve`,
// //     );
// //     res.render("cekiai", { cekiai });
// //   } catch (err) {
// //     res.render("klaida", { err });
// //   } finally {
// //     await end(conn);
// //   }
// // });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
