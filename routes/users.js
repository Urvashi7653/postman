import express from "express";

import {createUser,getAllUsers,getUser, deleteUser,updateUser } from "../controllers/users.js"

const router = express.Router();

//all routes in this are starting with /users
router.get("/", getAllUsers);

router.post("/", createUser);

router.get("/:id",getUser);

router.delete("/:id",deleteUser );

router.patch("/:id", updateUser);

export default router;
