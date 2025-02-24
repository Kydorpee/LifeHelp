import mongoose, {mongoose} from 'mongoose';
const Schema = mongoose.Schema;

const doctorSchema = new Schema ({
 
    nome: {
        type: String,
        required: [true,'Name is required']
    },
    login:{
        type:String,
        required: [true, 'login is required'],
        unique: true
    },
    password:{
        type:String,
        required: [true, 'Password is required']
        
    },
    medicalSpeciality:{
        type: String,
        required:[true,'Medical Speciality is required']
    },
    medicalRegistration:{
        type: String,
        required:[true, 'Medical Registration is required'],
        unique: true
    },
    email:{
        type: String,
        required: [true,'Email is required'],
        unique:true
    },
    phone:{
        type:String,
        required:[true,'Phone is required']
    },
    
    createdAT:{
        type: Date,
        default:Date.now
    },
});

const doctor = mongoose.model('Doctor',doctorSchema);

export default doctor;