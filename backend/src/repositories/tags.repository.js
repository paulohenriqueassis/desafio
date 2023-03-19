import CardRepository from "./cards.repository.js";

async function createTag(tagInfo) {
  try {
    const card = (await CardRepository.getCards()).find(
      (card) => card._id.toHexString() === tagInfo.cardId
    );

    card.data_modificacao = tagInfo.data_modificacao;
    card.tags.push({
      name: tagInfo.name,
    });
    await CardRepository.updateCard(card);
  } catch (err) {
    throw err;
  }
}

async function getTag(tagInfo) {
  try {
    const card = (await CardRepository.getCards()).find(
      (card) => card._id.toHexString() === tagInfo.cardId
    );
    const tag = card.tags.find((tag) => tag._id.toHexString() === tagInfo.id);
    if (!card || !tag) return;
    return tag;
  } catch (err) {
    throw err;
  }
}

async function updateTag(tagInfo) {
  try {
    const card = (await CardRepository.getCards()).find(
      (card) => card._id.toHexString() === tagInfo.cardId
    );
    const tagIndex = card.tags.findIndex(
      (tag) => tag._id.toHexString() === tagInfo.id
    );
    card.tags[tagIndex].name = tagInfo.name;
    card.data_modificacao = tagInfo.data_modificacao;
    await CardRepository.updateCard(card);
  } catch (err) {
    throw err;
  }
}

async function deleteTag(tagInfo) {
  try {
    const card = (await CardRepository.getCards()).find(
      (card) => card._id.toHexString() === tagInfo.cardId
    );
    const tagIndex = card.tags.findIndex(
      (tag) => tag._id.toHexString() === tagInfo.id
    );
    card.tags.splice(tagIndex, 1);
    card.data_modificacao = tagInfo.data_modificacao;
    await CardRepository.updateCard(card);
  } catch (err) {
    throw err;
  }
}

export default {
  createTag,
  getTag,
  updateTag,
  deleteTag,
};