const express = require("express");
const cors = require("cors");
const db = require("./database/db.js");
const controllers = require('./controllers/index');

const app = express();

const PORT = 4000;

app.use(cors())
app.use(express.json());

//controllers

app.get('/user/:userId', controllers.getUserById)
app.post('/register', controllers.register)
app.post('/login', controllers.login)


app.listen(PORT, ()=>{
    console.log(` ${PORT} dinleniyor..`);
    db();
})

module.exports = app;
