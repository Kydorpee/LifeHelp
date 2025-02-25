import appointment from "../Models/Appointment.js";

const getAllAppointment  = async ()=> {
    return await appointment.find();

}
const getAppointment = async (id) => {
    try{
        return await appointment.findById(id);
    }catch (erro){
        throw new Error(erro);
    }
}

const saveAppointment = async (date,doctorId,pacientId) => {
    try {
        const prescription = new appointment(date,doctorId,pacientId);
        return await prescription.save();

    }catch(erro){
        throw new Error(erro);

    }
}
const updateAppointment = async (id, {date,doctorId,pacientId})=>{
    try {
        return await Appointment.findByAndUpdate(id,{date,doctorId,pacientId},{new: true});
        
    } catch (erro) {
        throw new Error(erro);
    }
}
const deleteAppointment =  async (id) => {
    try {
        return  await Appointment.findByAndUpdate(id);
        
    } catch (erro) {
        throw new Error(erro);
        
        
    }
   
}

const appointmentRepository = {
    getAllAppointment,
    getAppointment,
    saveAppointment,
    updateAppointment,
    deleteAppointment


}
export default appointmentRepository;
