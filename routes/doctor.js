import express from "express";
import { addDoctor, deleteDoctor, getDoctors, updateDoctor,getDoctor } from "../controllers/doctorcon.js";

const router = express.Router()

router.get("/", getDoctors)

router.post("/", addDoctor)

router.get("/:did", getDoctor)

router.put("/:did", updateDoctor)

router.delete("/:did", deleteDoctor)

export default router