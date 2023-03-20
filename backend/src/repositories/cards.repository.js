import CardSchema from "../schemas/cards.schema.js";
import { connect } from "../database/mongodb.js";

async function createCard(cardInfo) {
  try {
    const mongoose = await connect();
    const Insights = mongoose.model("Insights", CardSchema);
    cardInfo = new Insights(cardInfo);
    await cardInfo.save();
  } catch (err) {
    throw err;
  }
}

async function getCards() {
  try {
    const mongoose = await connect();
    const Insights = mongoose.model("Insights", CardSchema);
    const query = Insights.find({});
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

async function getCardById(id) {
  try {
    const mongoose = await connect();
    const Insights = mongoose.model("Insights", CardSchema);
    const query = Insights.findById({ _id: id });
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

async function getCardByTagName(tagName) {
  try {
    const mongoose = await connect();
    const Insights = mongoose.model("Insights", CardSchema);
    const query = Insights.find({ "tags.name": new RegExp(tagName, "i") });
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

async function updateCard(cardInfo) {
  try {
    const mongoose = await connect();
    const Insights = mongoose.model("Insights", CardSchema);
    await Insights.findByIdAndUpdate({ _id: cardInfo.id }, cardInfo);
  } catch (err) {
    throw err;
  }
}

async function deleteCard(id) {
  try {
    const mongoose = await connect();
    const Insights = mongoose.model("Insights", CardSchema);
    await Insights.findOneAndDelete({ _id: id });
  } catch (err) {
    throw err;
  }
}

export default {
  createCard,
  getCards,
  getCardById,
  getCardByTagName,
  updateCard,
  deleteCard,
};
