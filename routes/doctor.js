const express=require('express');

const router=express.Router();
const doctor_controller=require('../controllers/doctor_controller');

router.post('/register',doctor_controller.register);
router.post('/login',doctor_controller.login);

module.exports=router;