
import express from "express";
import appointmentController from "./AppointmentController.js";



let router = express.Router();

router.get(
    "/", function (req, res) {
        console.log("hi!");
        res.status(200).json({ message: "hi!"});
    }
);



router.use("/", appointmentController);


export default router;