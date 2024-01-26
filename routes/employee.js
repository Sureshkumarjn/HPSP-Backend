import express from "express";
import { addEmployee, deleteEmployee, getEmployees, updateEmployee,getEmployee } from "../controllers/employeecon.js";

const router = express.Router()

router.get("/", getEmployees)

router.post("/", addEmployee)

router.get("/:eid", getEmployee)

router.put("/:eid", updateEmployee)

router.delete("/:eid", deleteEmployee)

export default router