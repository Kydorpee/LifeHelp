import {express} from "express";
import AppointmentService from "../Services/AppointmentService";
import appointmentService from "../Services/AppointmentService";


let router = express.Router();


router.get('/appointments',async(req,res) => {
    try {
        const appointments = await AppointmentService.getAllAppointments();
        res.send(appointments);
    } catch (erro) {
        console.log(erro);
        res.status(500).send(erro);
        
    }
});

router.get('/getAppointment/:id', async(req,res) =>{
    const {id} = req.params;
    try {
        const appointment = await appointmentService.getAppointment(id);
        res.send(appointment);
        
    } catch (error) {
        console.log(erro);
        res.status(500).send(erro);
    }
});
router.get('/postAppointment', async(req,res) =>{
    const {date,doctorId,Pacientid} = req.body;
    try {
        const appointment = await appointmentService.saveAppointment(date,doctorId,Pacientid);
        res.send(appointment);
        
    } catch (error) {
        console.log(erro);
        res.status(500).send(erro);
    }
});
router.put('/appointments/:id', async(req,res) =>{
    const {id} = req.params;
    const {date,doctorId,Pacientid} = req.body;
    try {
        const appointment = await appointmentService.updateAppointment(id,{date,doctorId,Pacientid});
        res.send(appointment);
        
    } catch (error) {
        console.log(erro);
        res.status(500).send(erro);
    }
});
router.delete('/appointments/:id', async(req,res) =>{
    const {id} = req.params;
    try {
        const appointment = await appointmentService.deleteAppointment(id);
        res.send(appointment);
        
    } catch (error) {
        console.log(erro);
        res.status(500).send(erro);
    }
});

export default router();
