const  { Router } = require('express');

const {
    createStudent,
    getStudents,
    getOneStudent
} = require("../controllers/studentController");

const router = Router();

const getOneStudentMiddleWare = (req, res, next) => {
    console.log("This is a middleware that will work for a single student");
    next();
};

router
.post("/student", createStudent)
.get("/student", getStudents)
.get("/student/:studentId", getOneStudentMiddleWare, getOneStudent)
// .put("/student/:studentId", getOneStudentMiddleWare.updateStudent);

module.exports = router; 
