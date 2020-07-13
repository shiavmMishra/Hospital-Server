const Patient=require('../models/patient');

// action that registers patients
module.exports.register=async function(req,res){
    try{
        let patient=await Patient.findOne({phone_number:req.body.phone_number});
        if(patient){
            return res.json('200',{
                message:"Patient already exists",
                data:patient
                
            })
        }else{
            Patient.create(req.body);
            return res.json('200',{
                message:"Patient successfully registered"
            })
        }
    }
    catch(err){
        if(err){console.log("Error:",err); return;}
        return res.json('200',{
            message:"error in registering user"
        });
    }
}