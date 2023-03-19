import mongoose from "mongoose";

const TagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  { collection: "insights" }
);

export default TagSchema;
