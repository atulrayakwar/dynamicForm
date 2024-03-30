const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    fieldName: String,
    fieldType: String,
    // Add more fields as needed
});

module.exports = mongoose.model('Form', formSchema);
