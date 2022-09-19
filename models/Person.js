const { ObjectID } = require('mongojs');
const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
    id : {
        type: String,
        required: true,
        unique:true,
        
    },
    name : {
        type: String,
        required: true
    },
    phone : {
        type: Number,
        required: true
    },
    addressLines : {
        type: String,
        required: true
    }/*,
    dateCreated: {
        type: Date,
        default: Date.now()
    } */
});

module.exports = mongoose.model('fakedatabase',PersonSchema);