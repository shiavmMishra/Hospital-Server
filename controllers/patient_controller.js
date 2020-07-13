const Patient=require('../models/patient');
const Patient_report=require('../models/reports');

// creating reports for patients
module.exports.create_report=async function(req,res){
    try{
        let patient=await Patient.findById(req.params.id);
        if(patient){
            let p_report=await Patient_report.create(req.body);
            patient.patient_report.push(p_report);
            patient.save();
            return res.json('200',{
                message:"patient report created",
                data:p_report
            })
        }else{
            return res.json('200',{
                message:"patient not registered ,please first register the patient",
            })
        }
    }catch(err){
        if(err){console.log("Error:",err); return;}
        return res.json('200',{
            message:"error in creating report"
        })
    }
    
}

// action that sends back all the reports of a particular patient sorted from oldest to newest
module.exports.all_reports=async function(req,res){
    try{
        let patient=await Patient.findById(req.params.id).sort('-createdAt').populate('patient_report');
        if(patient){
            let p_reports=await patient.patient_report;
            return res.json('200',{
                message:"List of all patient reports",
                patient_reports:p_reports
            })
        }else{
            return res.json('200',{
                message:"No reports found",
            })
        }
    }catch(err){
        if(err){console.log("Error:",err); return;}
        return res.json('200',{
            message:"error in accessing reports"
        })
    }
    

}

// action that sends back reports according to the stutus of patients
module.exports.status=async function(req,res){
    try{
        let patient_reports=await Patient_report.findOne({Status:req.params.status});
        return  res.json('200',{
            message:"all reports ",
            data:patient_reports
        })
    }catch(err){
        if(err){console.log("Error:",err); return;}
        return res.json('200',{
            message:"error in accessing reports"
        })
    }
    
}