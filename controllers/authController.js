const Instructor = require("../models/instructorModel");
const Student = require("../models/studentModel");
const Course = require("../models/courseModel");

exports.createAccount = async (req, res) => {
    const { account } = req.params;
    if(account === "student"){
        try {
           const student = new Student(req.body);
           await student.save();
           res.status(201).send({
            status: "success",
            message: "student created successfully",
           }) 
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }else if(account === "instructor"){
        try {
            exports.instructor = new Instructor(req.body);
            await instructor.save();
            res.status(201).send({
             status: "success",
             message: "instructor created successfully",
            }) 
         } catch (error) {
            res.status(400).json({ message: error.message  });  
         }
    }else if (account === "course"){
        try {
            exports.course = new Course(req.body);
            await this.instructor.save();
            res.status(201).send({
                status: "success",
                message:  "course created successfully",
            }) 
            
        } catch (error) {
            res.status(400).json({ message: error.message  });  
        }
    }
}
