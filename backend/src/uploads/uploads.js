import * as dotenv from "dotenv";
dotenv.config();

import csvtojson from "csvtojson";
import CardSchema from "../schemas/cards.schema.js";
import { connect } from "../database/mongodb.js";
import handleFileCsv from "./handleFileCsv.js";

csvtojson()
  .fromFile("cards.csv")
  .then(async (fileCsv) => {
    const file = handleFileCsv(fileCsv);  
    const mongoose = await connect(process.env.MONGO_LOCAL);
    const Insights = mongoose.model("Insights", CardSchema);
    Insights.collection.insertMany(file, (err) => {
      if (err) return console.error(err);
      console.log("Múltiplos documentos inseridos no banco.");
    });
  });