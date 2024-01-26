import express from "express";
import bodyParser from "body-parser";
import cors from "cors"

import { BookAppointment,getAppointment,countAppointment } from "../controllers/appoinmentcon.js";

const router = express.Router()



router.post("/appointments", BookAppointment)

router.get("/appointments", getAppointment)

router.get("/appointments/count", countAppointment)





export default router