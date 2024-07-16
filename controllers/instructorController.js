const Course = require('../models/instructorModel');


exports.createInstructor = async (req, res) => {
    try {
        const instructor = new Instructor(req.body);
        await instructor.save();
        res.status(201).send({
            status: "success",
            message: "course created successfully",
        });
    }catch (error) {
        res.status(400).json({ message: error.message });
    }
};