import appointmentRepository from "../Repositories/AppointmentRepository";

const getAllAppointment = async()=>{
    await appointmentRepository.getAllAppointments();
}

const getAppointment =async (id)=>{
    return appointmentRepository.getAppointment(id);
}
const saveAppointment = async ({date,doctorID,pacientId})=>{
    return appointmentRepository.saveAppointment(date,doctorID,pacientId);
}
const updateAppointment = async (id,{date,doctorID,pacientId})=>{
    return appointmentRepository.updateAppointment(date,doctorID,pacientId);
}
const deleteAppointment = async (id) =>{
    return appointmentRepository.deleteAppointment(id);
}


const appointmentService = {
getAllAppointment,
getAppointment,
saveAppointment,
updateAppointment,
deleteAppointment

}
export default appointmentService;
