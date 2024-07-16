const mongoose = require('mongoose');

const { Schema } = mongoose;

const courseSchema = new Schema ({
        course_name: {
        type: String,
        required: true,
    },

    instructor: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
    },

    description: {
        type: String,
        required: true,
    },

    requirement: {
        type: [String],
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },


    duration: {
        type: Number,
        required: true,
    },

    students: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
    },


    
},
{
    timestamps: true,
}
);



const Course = mongoose.model("course", courseSchema);

module.exports = Course;