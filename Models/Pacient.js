import mongoose,{mongoose} from "mongoose";
const Schema = mongoose.Schema;

const pacientSchema = new Schema({


    nome: {
        type:String,
        required:[true,"Name is required"]
    },
    birthDate:{
        type: Date, 
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:true
    },
    phone: {
        type: String,
        required:[true, 'Phone is required']
    },
    createdAt:{
        type: Date,
        required:[true,'CreatedAt is required']
    },


});
