const mongoose = require('mongoose');

const { Schema } = mongoose;

const studentSchema = new Schema ({
    first_name: {
        type: String,
        required: true,
    },

    last_name: {
        type: String,
        required: true,
    },

    other_name: {
        type: String,
        required: false,
    },

    email: {
        type: String,
        required: true,
        lowercase: true,
    },

    phone_number: {
        type: String,
        required: true,
    },

    age: {
        type: Number,
        required: true,
        validate: (v) => v > 18 && v < 60,
    },

    password: {
        type: String,
        required: true,
        validate: (v) => v.lengtv > 6,
    },

    course: {
        type: [mongoose.Schema.Types.ObjectId],
        required: false,
    },
},
{
    timestamps: true,
}
);



const Student = mongoose.model("student", studentSchema);

module.exports = Student;