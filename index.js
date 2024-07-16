const express = require('express');

// password Sarah4mongodb
// const db = require('.dbConn/conn.js') ;//import express into our application...es5 way
const studentRoute = require('./routes/studentRoute');
const authRoute = require('./routes/authRoute');
const instructorRoute = require('./routes/instructorRoute');
const courseRoute = require('./routes/courseRoute');
const db = require('./dbConn/conn');

const port = 3200;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log("connected to databse"));

const app = express();


app.use(express.json()); //using the middleware to process request from consumers..works for put, patch and post


const welcomeMessage = (req, res, next) => {
    console.log("welcome to our school app");
    next();
};

const thankYou = (req, res, next) => {
    console.log("thank you for using our school app");
    next();
};

// this execute for every route
app.use(welcomeMessage);

app.listen( port,  () => {
    console.log(`app listening on port ${port}`);
});

// importing the auth route

app.use('/api/V1', authRoute);

// importing the student route

app.use('/api/V1', studentRoute);

app.use('/api/V1', instructorRoute);

// importing the course route

app.use('/api/V1', courseRoute);

// using the thank you middleware
app.use(thankYou);

// app.get("/", (req, res) => {
//     res.send("hello world");
// });

// app.get("/about", (req, res) => {
//     res.send("app page");
// });

// app.post("/", (req, res) => {
//    console.log(req.body);
//    res.send("this is a post request");
// });