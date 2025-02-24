import doctorRepository from "../Repositories/DoctorRepository";

const getAllDoctor = async() =>{
    await doctorRepository.getAllDoctor();
}
const getDoctor = async(id) =>{
    return doctorRepository.getAllDoctor(id);
}
const saveDoctor = async(date,nome,login,password,medicalSpeciality,medicalRegistration,email,phone)=>{
    return doctorRepository.saveDoctor(date,nome,login,password,medicalSpeciality,medicalRegistration,email,phone);
}
const updateDoctor = async(id,{date,nome,login,password,medicalSpeciality,medicalRegistration,email,phone})=>{
    return doctorRepository.updateDoctor(id,{date,nome,login,password,medicalSpeciality,medicalRegistration,email,phone});
}
const deleteDoctor = async (id) =>{
    return doctorRepository.deleteDoctor(id);
}


const doctorService = {
    getAllDoctor,
    getDoctor,
    saveDoctor,
    updateDoctor,
    deleteDoctor

}

export default doctorService;