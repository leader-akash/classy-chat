import express from "express";
import { getMessages, sendMessage } from "../controller/message.controller.js";
import protectRoute from "../middleware/protectRoutes.js";

const router = express.Router();


// sending mesaage after checking authorization

// send message by id
router.post("/send/:id", protectRoute, sendMessage);

// send message between the current user
router.get("/:id", protectRoute, getMessages)

export default router;