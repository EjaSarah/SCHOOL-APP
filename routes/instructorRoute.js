const  { Router } = require('express');
const {
    createInstructor

} = require("../controllers/instructorController");

const router = Router();


router
.post("/instructor", createInstructor)



module.exports = router; 
