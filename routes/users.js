import express from "express";
import { addUser, deleteUser, getUsers, updateUser,getUser,getCount} from "../controllers/user.js";

const router = express.Router()

router.get("/", getUsers)

router.get("/count", getCount)


router.post("/", addUser)

router.get("/:pid", getUser)

router.put("/:pid", updateUser)

router.delete("/:pid", deleteUser)

export default router