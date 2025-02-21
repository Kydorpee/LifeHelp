import mongoose, {Mongoose} from "mongoose";
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({

    date: {
        type: Date,
        required: [true, 'Appointment Date is required.']
    },
    doctorId:{
        type: String,
        required: [true, 'DoctorID Date is required.'],
        unique: true

    },
    pacientId:{
        type: String,
        required: [true, 'PacientID Date is required.']
        
    },
    createdAt:{
        type: Date,
        default: Date.now
    },


});

const appointment = mongoose.model('Appointment',appointmentSchema);

export default appointment;