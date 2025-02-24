import {express} from "express";
import doctorService from "../Services/DoctorService";

let router = express.Router();

router.get('/doctor',async(req,res)=>{
    try {
        const doctor = await DoctorService.getAllDoctor();
        res.send(doctor);
    } catch (error) {
        console.log(erro);
        res.status(500).send(erro);
    }
});

router.get('/doctor/:id',async(req,res)=>{
    const {id} = req.params;
    try {
        const doctor = await DoctorService.getDoctor(id);
        res.send(doctor)
    } catch (error) {
        console.log(erro);
        res.status(500).send(erro);
    }
});
router.get('/postDoctor', async(req,res) =>{
    const {date,nome,login,password,medicalSpeciality,medicalRegistration,email,phone} = req.body;
    try {
        const doctor = await DoctorService.saveDoctor(date,nome,login,password,medicalSpeciality,medicalRegistration,email,phone);
        res.send(doctor);
        
    } catch (error) {
        console.log(erro);
        res.status(500).send(erro);
    }
});
router.put('/doctor/:id', async(req,res) =>{
    const {id} = req.params;
    const {date,nome,login,password,medicalSpeciality,medicalRegistration,email,phone} = req.body;
    try {
        const doctor = await DoctorService.updateDoctor(id,{date,nome,login,password,medicalSpeciality,medicalRegistration,email,phone});
        res.send(doctor);
        
    } catch (error) {
        console.log(erro);
        res.status(500).send(erro);
    }
});
router.delete('/doctor/:id', async(req,res) =>{
    const {id} = req.params;
    try {
        const doctor = await doctorService.deleteDoctor(id);
        res.send(doctor);
        
    } catch (error) {
        console.log(erro);
        res.status(500).send(erro);
    }
});



export default router();
