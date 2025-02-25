import express from "express";
import cors from "cors";
import router  from "./Routes/Router.js";
import pkg from "body-parser";


const app = express();
const {json, urlencoded} = pkg;

app.use(json());
app.use(urlencoded({extended: true}));
app.use(cors());
app.use("/", router);
app.listen(3000, function() {
    console.log("Listening to port 3000");
});



