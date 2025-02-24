import pacientRepository from "../Repositories/PacientRepository";

const getAllPacient = async()=>{
    await pacientRepository.getAllPacient();
}

const getPacient =async (id)=>{
    return pacientRepository.getPacient(id);
}
const savePacient = async ({nome,birthDate,email,phone})=>{
    return pacientRepository.savePacient(nome,birthDate,email,phone);
}
const updatePacient = async (id,{nome,birthDate,email,phone})=>{
    return pacientRepository.updatePacient(nome,birthDate,email,phone);
}
const deletePacient = async (id) =>{
    return pacientRepository.deletePacient(id);
}


const pacientService = {
    getAllPacient,
    getPacient,
    savePacient,
    updatePacient,
    deletePacient
}

export default pacientService;
