import express from "express";
import { getPatient } from "../controllers/patientcon.js";

const router = express.Router()

router.get("/:pid", getPatient)



export default router