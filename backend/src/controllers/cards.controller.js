import CardService from "../services/cards.service.js";

async function createCard(req, res, next) {
  try {
    const card = req.body;
    if (!card.texto || !card.data_criacao || !card.tags) {
      throw new Error(
        "Texto, data_criacao e tags são obrigatórios para a criação de um card."
      );
    }

    await CardService.createCard(card);
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
  try {
    res.send(await CardService.getCard(req.params.id));
  } catch (error) {
    next(error);
  }
}

async function updateCard(req, res, next) {
  try {
    const { texto, data_modificacao } = req.body;
    if (!texto || !data_modificacao) {
      throw new Error(
        "Texto, data_modificacao são obrigatórios para a atualização de um card."
      );
    }

    const data = {
      id: req.params.id,
      texto,
      data_modificacao,
    };
    await CardService.updateCard(data);
    res.json("Card atualizado com sucesso.");
  } catch (error) {
    next(error);
  }
}

async function deleteCard(req, res, next) {
  try {
    await CardService.deleteCard(req.params.id);
    res.json("Card deletado com sucesso.");
  } catch (error) {
    next(error);
  }
}

export default {
  createCard,
  getCard,
  getCards,
  deleteCard,
  updateCard,
};
