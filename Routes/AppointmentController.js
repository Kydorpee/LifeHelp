import {express} from "express";
import AppointmentService from "../Services/AppointmentService";



let router = express.Router();


router.get('/appointment',async(req,res) => {
    try {
        const appointment = await AppointmentService.getAllAppointments();
        res.send(appointment);
    } catch (erro) {
        console.log(erro);
        res.status(500).send(erro);
        
    }
});

router.get('/getAppointment/:id', async(req,res) =>{
    const {id} = req.params;
    try {
        const appointment = await AppointmentService.getAppointment(id);
        res.send(appointment);
        
    } catch (error) {
        console.log(erro);
        res.status(500).send(erro);
    }
});
router.get('/postAppointment', async(req,res) =>{
    const {date,doctorId,Pacientid} = req.body;
    try {
        const appointment = await AppointmentService.saveAppointment(date,doctorId,Pacientid);
        res.send(appointment);
        
    } catch (error) {
        console.log(erro);
        res.status(500).send(erro);
    }
});
router.put('/appointment/:id', async(req,res) =>{
    const {id} = req.params;
    const {date,doctorId,Pacientid} = req.body;
    try {
        const appointment = await AppointmentService.updateAppointment(id,{date,doctorId,Pacientid});
        res.send(appointment);
        
    } catch (error) {
        console.log(erro);
        res.status(500).send(erro);
    }
});
router.delete('/appointment/:id', async(req,res) =>{
    const {id} = req.params;
    try {
        const appointment = await AppointmentService.deleteAppointment(id);
        res.send(appointment);
        
    } catch (error) {
        console.log(erro);
        res.status(500).send(erro);
    }
});

export default router();
