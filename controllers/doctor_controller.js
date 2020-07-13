const Doctor=require('../models/doctor');

// using json web token to send the token to browser
const jwt=require('jsonwebtoken');

// registering the docter
module.exports.register= async function(req,res){
    try{
        if(req.body.password!=req.body.confirm_password){
            return res.json(200,{
                message:"Password not same"
            });
        }
        const user=await Doctor.findOne({email:req.body.email});
        if(!user){
            await Doctor.create(req.body);
            return res.json(200,{
                message:"Registration Successful",
                data:req.body
            });
    
        }else{
            return res.json(200,{
                message:"Docter already registered",
                data:req.body
            });
        }
    }catch(e){
        return res.json('200',{
            message:"error in registering docter"
        })
    }
    
}

// doctor login 
module.exports.login= async function(req,res){
    try{
        let doctor=await Doctor.findOne({email:req.body.email});
        if(!doctor || doctor.password!=req.body.password){
            return res.json('422',{
                message:"Invalid password/email",
                data:req.body
            })
        }else{
            return res.json(200,{
                message:"Sign in successful",
                data:{

                    // sending the token with the help of jsonwebroken for authentication purpose
                    token:jwt.sign(doctor.toJSON(),'docter',{expiresIn:'1000000'})
                }
            })
        }
    }catch(e){
        return res.json('200',{
            message:"error in logging in"
        })
    }
    

}