import CardRepository from "../repositories/cards.repository.js";

async function createCard(card) {
  return await CardRepository.createCard(card);
}

async function getCards() {
  return await CardRepository.getCards();
}

async function getCard(id) {
  try {
    const card = await CardRepository.getCard(id);
    return card;
  } catch (error) {
    throw new Error("Não existe card com o id digitado.");
  }
}

async function updateCard(card) {}

async function deleteCard(id) {}

export default {
  createCard,
  getCards,
  getCard,
  updateCard,
  deleteCard,
};
