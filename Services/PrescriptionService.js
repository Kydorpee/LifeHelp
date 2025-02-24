import prescriptionRepository from "../Repositories/PrescriptionRepository";

const getAllPrescription = async()=>{
    await prescriptionService.getAllPrescription();
}

const getPrescription =async (id)=>{
    return prescriptionService.getPrescription(id);
}
const savePrescription = async (date,appointmentId,medicine,dosage,instruction)=>{
    return prescriptionService.savePrescription(date,appointmentId,medicine,dosage,instruction);
}
const updatePrescription = async (id,{date,appointmentId,medicine,dosage,instruction})=>{
    return prescriptionRepository.updatePrescription(date,appointmentId,medicine,dosage,instruction);
}
const deletePrescription = async (id) =>{
    return prescriptionService.deletePrescription(id);
}

const prescriptionService = {
    getAllPrescription,
    getPrescription,
    savePrescription,
    updatePrescription,
    deletePrescription

}
export default prescriptionService;
