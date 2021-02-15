const mongoose = require('mongoose');
const validator = require('validator');
const employeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email is Allready exist"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email")
            }
        }
    },

    phone: {
        type: Number,
        required: true,
        minLength: 12,

    },
    school: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    }
})

const Employee = new mongoose.model('Employee', employeeSchema);
module.exports = Employee;