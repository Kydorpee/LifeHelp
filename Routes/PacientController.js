import {express} from "express";
import PacientService from "../Services/PacientService";

let router = express.Router();

router.get('/pacient',async(req,res) => {
    try {
        const pacient = await PacientService.getAllPacient();
        res.send(pacient);
    } catch (erro) {
        console.log(erro);
        res.status(500).send(erro);
        
    }
});

router.get('/getPacient/:id', async(req,res) =>{
    const {id} = req.params;
    try {
        const pacient = await PacientService.getPacient(id);
        res.send(pacient);
        
    } catch (error) {
        console.log(erro);
        res.status(500).send(erro);
    }
});
router.get('/postPacient', async(req,res) =>{
    const {nome,birthDate,email,phone} = req.body;
    try {
        const pacient = await PacientService.savePacient(nome,birthDate,email,phone);
        res.send(pacient);
        
    } catch (error) {
        console.log(erro);
        res.status(500).send(erro);
    }
});
router.put('/pacient/:id', async(req,res) =>{
    const {id} = req.params;
    const {nome,birthDate,email,phone} = req.body;
    try {
        const pacient = await PacientService.updatePacient(id,{nome,birthDate,email,phone});
        res.send(pacient);
        
    } catch (error) {
        console.log(erro);
        res.status(500).send(erro);
    }
});
router.delete('/pacient/:id', async(req,res) =>{
    const {id} = req.params;
    try {
        const pacient = await PacientService.deletePacient(id);
        res.send(pacient);
        
    } catch (error) {
        console.log(erro);
        res.status(500).send(erro);
    }
});

export default router();
