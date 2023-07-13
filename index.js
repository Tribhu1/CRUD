const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "crudOprations"
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res)=> {
    const getQuery = "select * from Customer";
    db.query(getQuery, (error, result)=> {
        res.send(result)
    })
})

app.post("/api/post", (req, res) => {
    const {name, email, contact} = req.body;
    let customerDetails = {
        name: name,
        email: email,
        contact : contact
    }
    let colms = Object.keys(customerDetails);
    let values = Object.values(customerDetails)
    let qs = colms.map(q => '?');
    const sqlInsert = `insert into Customer (${colms.join(',')}) values (${qs.join(',')})`;
    db.query(sqlInsert, values, (error, result)=>{
        console.log("error",error);
        console.log("result",result);
        res.send("hello!");
    })
})

app.get("/", (req, res) => {
    const sqlInsert = 'insert into Customer (name,email, mobile) values ("Ayush", "ayush@gmail.com","8076057432")';
    db.query(sqlInsert, (error, result)=>{
        if(error){
        console.log("error",error);
        }
    })
    
})

app.listen(5000, () => {
    console.log("server is running on port 5000");
})