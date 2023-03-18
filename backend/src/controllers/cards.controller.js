import CardService from "../services/cards.service.js";


async function createCard(req, res, next) {
  try {
    let card = req.body;
    if (!card.texto || !card.data_criacao || !card.tags) {
      throw new Error(
        "Texto, data_criacao e tags são obrigatórios para a criação de um card."
      );
    }

    card = await CardService.createCard(card);
    res.json("Card criado com sucesso.");
  } catch (error) {
    next(error);
  }
}

async function getCards(req, res, next) {
  try {
    res.send(await CardService.getCards());
  } catch (error) {
    next(error);
  }
}

async function getCard(req, res, next) {
  
}

async function updateCard(req, res, next) {
  
}

async function deleteCard(req, res, next) {
  
}

export default {
  createCard,
  getCard,
  getCards,
  deleteCard,
  updateCard,
};

