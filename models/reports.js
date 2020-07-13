const mongoose=require('mongoose');
const Docter=require('../models/doctor');
const patient_report_Schema=new mongoose.Schema({
    Docter:{
        type:String,
        required:true
    },
    Status:{
        type:String,
        require:true
    },
    Date:{
        type:String,
        require:true
    }
})
const Patient_report=mongoose.model('Patient_report',patient_report_Schema);
module.exports=Patient_report;