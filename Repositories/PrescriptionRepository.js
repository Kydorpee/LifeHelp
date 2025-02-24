import {Prescription} from ".../Models/Prescription.js";
import appointment from "../Models/Appointment";

const getAllPrescription = async ()=>{
    return await Prescription.fin();
}
const getPrescription = async () => {
    try {
        return await Prescription.findById(id);
        
    } catch (erro) {
        throw new Error(erro);
    }
}

const savePrescription = async (date,appointmentId,medicine,dosage,instruction) => {
    try {
       const prescription = new Prescription (date,appointmentId,medicine,dosage,instruction);
       return await prescription.save();
        
    } catch (error) {
        throw new Error(erro);
        
    }
}
const updatePrescription = async (id,{date,appointmentId,medicine,dosage,instruction}) => {
    try {
        return await prescription.findByAndUpdate(id,{date,appointmentId,medicine,dosage,instruction},{new:true});
        
    } catch (erro) {
        throw new Error(erro);
        
    }
}

const deletePrescription = async (id) => {
    try {
        return await prescription.findByAndUpdate(id);
        
    } catch (error) {
        throw new Error(erro);
    }
}
const prescriptionRepository = {
    getAllPrescription,
    getPrescription,
    savePrescription,
    updatePrescription,
    deletePrescription

}
export default prescriptionRepository;