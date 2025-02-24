import {express} from "express";
import PrescriptionService from "../Services/PrescriptionService";
import prescriptionService from "../Services/PrescriptionService";

let router = express.Router();

router.get('/prescription',async(req,res) => {
    try {
        const prescription = await PrescriptionService.getAllPrescription();
        res.send(prescription);
    } catch (erro) {
        console.log(erro);
        res.status(500).send(erro);
        
    }
});

router.get('/getPrescription/:id', async(req,res) =>{
    const {id} = req.params;
    try {
        const prescription = await PrescriptionService.getPrescription(id);
        res.send(prescription);
        
    } catch (error) {
        console.log(erro);
        res.status(500).send(erro);
    }
});
router.get('/postPrescription', async(req,res) =>{
    const {date,appointmentId,medicine,dosage,instruction} = req.body;
    try {
        const prescription = await PrescriptionService.savePrescription(date,appointmentId,medicine,dosage,instruction);
        res.send(prescription);
        
    } catch (error) {
        console.log(erro);
        res.status(500).send(erro);
    }
});
router.put('/prescription/:id', async(req,res) =>{
    const {id} = req.params;
    const {date,appointmentId,medicine,dosage,instruction} = req.body;
    try {
        const prescription = await PrescriptionService.updatePrescription(id,{date,appointmentId,medicine,dosage,instruction});
        res.send(prescription);
        
    } catch (error) {
        console.log(erro);
        res.status(500).send(erro);
    }
});
router.delete('/prescription/:id', async(req,res) =>{
    const {id} = req.params;
    try {
        const prescription = await PrescriptionService.deletePrescription(id);
        res.send(prescription);
        
    } catch (error) {
        console.log(erro);
        res.status(500).send(erro);
    }
});

export default router();
