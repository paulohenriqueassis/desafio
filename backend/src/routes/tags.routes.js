import express from "express";
import TagController from "../controllers/tags.controller.js";
const router = express.Router();

router.post("/findCardById/:cardId", TagController.createTag);
router.get("/findCardById/:cardId/findTagById/:id", TagController.getTag);
router.put("/findCardById/:cardId/findTagById/:id", TagController.updateTag);
router.delete("/findCardById/:cardId/findTagById/:id", TagController.deleteTag);

export default router;
