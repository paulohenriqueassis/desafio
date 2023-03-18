import express from "express";
import CardController from "../controllers/cards.controller.js";
const router = express.Router();

router.post("/", CardController.createCard);
router.get("/", CardController.getCards);
router.get("/:id", CardController.getCard);
router.put("/:id", CardController.updateCard);
router.delete("/:id", CardController.deleteCard);

export default router;
