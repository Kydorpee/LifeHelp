import {Doctor} from ".../models/Doctor.js";

const getAllDoctor = async () =>{
    return await Doctor.find();
}

const getDoctor = async () => {
    try {
        return await Doctor.findById(id);
        
    } catch (erro) {
        throw new Error(erro);
    }
}

const saveDoctor = async () => {
    try {
       const doctor = new Doctor (date,nome,login,password,medicalSpeciality,medicalRegistration,email,phone);
       return await doctor.save();
        
    } catch (error) {
        throw new Error(erro);
        
    }
}
const updateDoctor = async (id,{date,nome,login,password,medicalSpeciality,medicalRegistration,email,phone}) => {
    try {
        return await Doctor.findByAndUpdate(id,{date,nome,login,password,medicalSpeciality,medicalRegistration,email,phone},{new:true});
        
    } catch (erro) {
        throw new Error(erro);
        
    }
}

const deleteDoctor = async (id) => {
    try {
        return await Doctor.findByAndUpdate(id);
        
    } catch (error) {
        throw new Error(erro);
    }
}

const doctorRepository = {
    getAllDoctor,
    getDoctor,
    updateDoctor,
    saveDoctor,
    deleteDoctor
}
export default doctorRepository;
