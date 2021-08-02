const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_data');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error'));

db.once('open', function () {
    console.log("Connection is succesful");
})