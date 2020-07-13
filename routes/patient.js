const express=require('express');

const passport=require('passport');

const router=express.Router();
const patient_controller=require('../controllers/patient_controller');

router.post('/:id/create_report',passport.authenticate('jwt', {session: false}),patient_controller.create_report);
router.get('/:id/all_reports',passport.authenticate('jwt', {session: false}),patient_controller.all_reports);

module.exports=router;