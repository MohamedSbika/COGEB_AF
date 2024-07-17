import express from "express";
import {
  createConversation,
  deleteConversation,
  getConversation,
} from "../controllers/conversation.controller.js";
import { verifyToken } from "../utils/varifyUser.js";

const router = express.Router();
router.post("/",  createConversation);
router.get("/:id",  getConversation);
router.delete("/:chatId",  deleteConversation);

export default router;
