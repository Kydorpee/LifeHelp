import {express} from "express";
import appointmentController  from "../Router/AppointmentController";
import prescriptionController from "../Router/PrescriptionController";
import pacientController from "../Router/PacientController"
import doctorController from "../Router/DoctorController"
let router = express.Router();

router.get(
    "/", function(req,res){
        console.log("hi");
        res.status(200).json({message: "hi"});

    });
    router.use("/",appointmentController);
    router.use("/",prescriptionController);
    router.use("/",pacientController);
    router.use("/",doctorController);


    export default router;
