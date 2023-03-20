import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();
mongoose.set("strictQuery", false);

async function connect(url = process.env.MONGO_URI) {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export { connect };