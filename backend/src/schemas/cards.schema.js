import mongoose from "mongoose";
import TagSchema from "./tags.schema.js";

const CardSchema = new mongoose.Schema(
  {
    texto: {
      type: String,
      required: true,
    },
    data_criacao: {
      type: String,
      required: true,
    },
    data_modificacao: String,
    tags: {
      type: [TagSchema],
      required: true,
    },
  },
  { collection: "insights" }
);

export default CardSchema;
