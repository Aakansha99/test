const mongoose = require('mongoose');

const { validator } = require('../utils')
const { systemConfig } = require('../configs')

const userSchema = new mongoose.Schema({
    title:{
        type : String,
        required:"Title is required",
        enum:['Mr','Mrs','Miss']
    },
    name:{
        type : String,
        required:"Name is required",
        
    },
    phone:{
        type : String,
        required:"Phone no. is required",
        unique:true
        
    },
    email:{
        type : String,
        required:"Email is required",
        trim: true,
        lowercase: true,
        unique: true,
        validate: { validator: validator.validateEmail, message: 'Please fill a valid email address', isAsync: false },
        match: [validator.emailRegex, 'Please fill a valid email address']
        
    },
    password:{
        type : String,
        required:"Password is required",
        minLength: 8,
        maxLength : 15
        
    },
    address:{
        street : {type:String},
        city   : {type:String},
        pincode : {type:String}
    },
},{ timestamps: true})

module.exports=  mongoose.model('User',userSchema);