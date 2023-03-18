import mongoose from "mongoose";
import TagSchema from "./tags.schema.js";

const CardSchema = new mongoose.Schema(
  {
    texto: String,
    data_criacao: String,
    data_modificacao: String,
    tags: [TagSchema],
  },
  { collection: "cards" }
);

export default CardSchema;
