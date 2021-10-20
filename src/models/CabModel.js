const mongoose = require('mongoose');

const { validator } = require('../utils')
const { systemConfig } = require('../configs')

const cabSchema = new mongoose.Schema({
    cabId:{
        type:Number,
        required: true,
        unique:true,
    },

    licence_plate:{
        type:String,
        required:true
    },
    car_model_id:{
        type:String,
        required:true
    },

   no_of_passengers:{
       type:Number,
       required:true,
   },
   manufacture_year:{
       type:Date,
       required:true
   },
   owner_id:{
       type:String,
       required:true
   },
   brand:{
       type:String,
       required:true
   },
   base_rate:{
       type:Integer,
       required:true
   }
    
},{ timestamps: true})

module.exports=  mongoose.model('Cab',cabSchema);