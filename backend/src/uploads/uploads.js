import * as dotenv from "dotenv";
dotenv.config();

import csvtojson from "csvtojson";
import handleFileCsv from "./handleFileCsv.js";
import CardsService from "../services/cards.service.js";

csvtojson()
  .fromFile("cards.csv")
  .then(async (fileCsv) => {
    const cards = handleFileCsv(fileCsv);
    for (const card of cards) {
      try {
        await CardsService.createCard(card);
      } catch (error) {
        console.log("Erro ao tentar subir csv no banco.");
      }
    }
  });
