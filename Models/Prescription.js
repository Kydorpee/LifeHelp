import mongoose, {mongoose} from "mongoose";
import appointment from "./Appointment";
const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({

    date: {
        type: Date
    },
    appointmentId: {
        type: String,
        required: [true,'Appointment is required']
    },
    medicine: {
        type: String,
        required: [ true, 'Medicine is required'],
        
    },
    dosage:{
        type: String,
        required:[true,'Dosage is required']
    },
    instruction:{
        type:String,
        
    },
    createdAt:{
        type: Date,
        required:[true,"Created At is required"]
    },

});

const prescription = mongoose.model('Doctor',prescriptionSchema);

export default doctor;