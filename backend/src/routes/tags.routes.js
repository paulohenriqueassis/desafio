import express from "express";
import TagController from "../controllers/tags.controller.js";
const router = express.Router();

router.post("/cards/:cardId", TagController.createTag);
router.get("/:tagId/cards/:cardId", TagController.getTag);
router.put("/:tagId/cards/:cardId", TagController.updateTag);
router.delete("/:tagId/cards/:cardId", TagController.deleteTag);

export default router;
