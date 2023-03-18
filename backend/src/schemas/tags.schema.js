import mongoose from "mongoose";

const TagSchema = new mongoose.Schema(
  {
    name: String,
  },
  { collection: "cards" }
);

export default TagSchema;
