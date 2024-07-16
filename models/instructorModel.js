const mongoose = require('mongoose');

const { Schema } = mongoose;

const instructorSchema = new Schema ({
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
        required: true,
    },

    address: {
        type: String,
        required: true,
        lowercase: true,
    },


    email: {
        type: String,
        required: true,
        lowercase: true,
    },


    course: {
        type: [mongoose.Schema.Types.ObjectId],
        required: false,
       
    },


    gender: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },

    github_profile: {
        type: String,
        required: false,
    },

    phone_number: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
        validate: (v) => v.lengtv > 6,
    },

},
{
    timestamps: true,
}
);



const Instructor = mongoose.model("instructor", instructorSchema);

module.exports = Instructor;