import express from "express";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import {swaggerDocument} from "./doc/swagger.js";

import CardRouter from "./routes/cards.routes.js";
import TagRouter from "./routes/tags.routes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/cards", CardRouter);
app.use("/tags", TagRouter);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});

app.listen(3000, () => console.log("API STARTED!"));
