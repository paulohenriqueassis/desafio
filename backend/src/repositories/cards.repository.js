import CardSchema from "../schemas/cards.schema.js";
import { connect } from "../database/mongodb.js";

async function createCard(cardInfo) {
  try {
    const mongoose = await connect();
    const CardInfo = mongoose.model("CardInfo", CardSchema);
    cardInfo = new CardInfo(cardInfo);
    await cardInfo.save();
  } catch (err) {
    throw err;
  }
}

async function getCards() {
  try {
    const mongoose = await connect();
    const CardInfo = mongoose.model("CardInfo", CardSchema);
    const query = CardInfo.find({});
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

async function getCard(id) {
  try {
    const mongoose = await connect();
    const CardInfo = mongoose.model("CardInfo", CardSchema);
    const query = CardInfo.findById({ _id: id });
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

async function updateCard(id) {}

async function deleteCard(id) {
  try {
    const mongoose = await connect();
    const CardInfo = mongoose.model("CardInfo", CardSchema);
    await CardInfo.findOneAndDelete({ _id: id });
  } catch (err) {
    throw err;
  }
}

export default {
  createCard,
  getCards,
  getCard,
  updateCard,
  deleteCard,
};
