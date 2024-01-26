import express from "express";
import { addCamp, deleteCamp, getCamps, updateCamp, getCamp,getCount } from "../controllers/campcon.js";

const router = express.Router()

router.get("/", getCamps)

router.post("/", addCamp)

router.get("/count", getCount)


router.get("/:cid", getCamp)

router.put("/:cid", updateCamp)

router.delete("/:cid", deleteCamp)

export default router