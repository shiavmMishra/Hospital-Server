const mongoose=require('mongoose');
const Patient_Report=require('../models/reports');
const patientSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    phone_number:{
        type:String,
        require:true,
        unique:true
    },
    patient_report:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Patient_report'
        }
    ]
})
const Patient=mongoose.model('Patient',patientSchema);
module.exports=Patient;