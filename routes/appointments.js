import express from "express";
import bodyParser from "body-parser";
import cors from "cors"

import {getAppointment,addAppointment,getdAppointment,countAppointment } from "../controllers/appoinmentcon.js";

const router = express.Router()

router.post("/data", addAppointment)

router.get("/data", getAppointment)

router.get("/today-data", getdAppointment)

router.get("/data/count", countAppointment)

export default router
