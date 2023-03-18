import express from "express";
import cors from "cors";

import CardRouter from "./routes/cards.routes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/cards", CardRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});

app.listen(3000, () => console.log("API STARTED!"));
