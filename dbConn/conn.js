const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sarahwrites4me:Sarah4mongodb@cluster0.woshghp.mongodb.net/school-app?retryWrites=true&w=majority&appName=Cluster0/school-app")


const db = mongoose.connection;

module.exports = db;