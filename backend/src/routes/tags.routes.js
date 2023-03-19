import express from "express";
import TagController from "../controllers/tags.controller.js";
const router = express.Router();

router.post("/cardId/:cardId", TagController.createTag);
router.get("/cardId/:cardId/tagId/:id", TagController.getTag);
router.put("/cardId/:cardId/tagId/:id", TagController.updateTag);
router.delete("/cardId/:cardId/tagId/:id", TagController.deleteTag);

export default router;
