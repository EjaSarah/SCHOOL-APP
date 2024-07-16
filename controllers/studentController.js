const Student = require('../models/studentModel');


exports.createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send({
            status: "success",
            message: "student created successfully",
        });
    }catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find();
       res.status(200).send({
        status: "success",
        count: students.length,
        data: students,
       });
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.getOneStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.studentId);
        // if nos student..throw error of student not found
        if(!student){
           return res.status(404).send({
                status: "error",
                message:  "student not found",
               })
        }
        // if student is found..send a success message
        res.status(200).send({
            status: "success",
            data: student,
           });
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};



  exports.updateStudent = async (req, res) => {
    try {
        const student = await Student.updateOne(req.params.studentId);
        const { first_name, last_name, other_name, email, phone_number } = req.body;
        student.db.collection("student")
          .updateOne(
            { _id: id },
            { $set: { first_name, last_name, other_name, email, phone_number } }
          )
        res.status(200).send({
            status: "student update successfully",
            data: student,
           });
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};
  

