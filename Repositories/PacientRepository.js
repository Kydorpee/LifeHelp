import  {Pacient} from '.../Models/Pacient.js';

const getAllPacient = async () =>{
    return await pacient.find();
}

const getPacient = async () => {
    try {
        return await pacient.findById(id);
        
    } catch (erro) {
        throw new Error(erro);
    }
}

const savePacient = async () => {
    try {
       const pacient = new Pacient (nome,birthDate,email,phone);
       return await pacient.save();
        
    } catch (error) {
        throw new Error(erro);
        
    }
}
const updatePacient = async (id,{nome,birthDate,email,phone}) => {
    try {
        return await pacient.findByAndUpdate(id,{nome,birthDate,email,phone},{new:true});
        
    } catch (erro) {
        throw new Error(erro);
        
    }
}

const deletePacient = async (id) => {
    try {
        return await pacient.findByAndUpdate(id);
        
    } catch (error) {
        throw new Error(erro);
    }
}

const pacientRepository = {
    getAllPacient,
    getPacient,
    savePacient,
    updatePacient,
    deletePacient
}
export default pacientRepository;