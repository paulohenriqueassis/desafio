import CardRepository from "../repositories/cards.repository.js";

async function createCard(card) {
  return CardRepository.createCard(card);
}

async function getCards(name) {
  if(name){
    const card = await CardRepository.getCardByTagName(name);
    return card;
  }
  return CardRepository.getCards();
}

async function getCardById(id) {
  try {
    const card = await CardRepository.getCardById(id);
    return card;
  } catch (error) {
    throw new Error("Não existe card com o id digitado.");
  }
}


async function updateCard(card) {
  try {
    return CardRepository.updateCard(card);
  } catch (error) {
    throw new Error("Nao existe card com esse id.");
  }
}

async function deleteCard(id) {
  try {
    const card = await CardRepository.getCardById(id);
    if (card) return CardRepository.deleteCard(id);
  } catch (error) {
    throw new Error("Não existe card com o id digitado.");
  }
}

export default {
  createCard,
  getCards,
  getCardById,
  updateCard,
  deleteCard,
};
