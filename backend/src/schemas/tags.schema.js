import mongoose from "mongoose";

const TagSchema = new mongoose.Schema(
  {
    name: String,
  },
  { collection: "insights" }
);

export default TagSchema;
