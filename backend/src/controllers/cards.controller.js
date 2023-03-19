import CardService from "../services/cards.service.js";

async function createCard(req, res, next) {
  try {
    const card = req.body;
    if (!card.texto || !card.data_criacao || !card.tags) {
      throw new Error(
        "Os campos texto, data de criação e tags são obrigatórios para a criação de um card."
      );
    }
    await CardService.createCard(card);
    res.status(201).send();
  } catch (error) {
    next(error);
  }
}

async function getCards(req, res, next) {
  try {
    const cards = await CardService.getCards();
    res.status(200).json(cards);
  } catch (error) {
    next(error);
  }
}

async function getCardById(req, res, next) {
  try {
    const { id } = req.params;
    const card = await CardService.getCardById(id);
    res.status(200).json(card);
  } catch (error) {
    next(error);
  }
}

async function getCardByTagName(req, res, next) {
  try {
    const { name } = req.params;
    const card = await CardService.getCardByTagName(name);
    res.status(200).json(card);
  } catch (error) {
    next(error);
  }
}

async function updateCard(req, res, next) {
  try {
    const { texto, data_modificacao } = req.body;
    if (!texto || !data_modificacao) {
      throw new Error(
        "Os campos texto e data de modificação são obrigatórios para a atualização de um card."
      );
    }
    const { id } = req.params;
    const data = {
      id,
      texto,
      data_modificacao,
    };
    await CardService.updateCard(data);
    res.status(200).send();
  } catch (error) {
    next(error);
  }
}

async function deleteCard(req, res, next) {
  try {
    const { id } = req.params;
    await CardService.deleteCard(id);
    res.status(200).send();
  } catch (error) {
    next(error);
  }
}

export default {
  createCard,
  getCardById,
  getCards,
  getCardByTagName,
  deleteCard,
  updateCard,
};
