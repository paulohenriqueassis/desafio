import mongoose from "mongoose";
mongoose.set("strictQuery", false);

async function connect() {
  const uri =
    "mongodb+srv://pauloassis:EAPmORs6tt1CO9uk@insights.dwsprla.mongodb.net/Insights";
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export { connect };
