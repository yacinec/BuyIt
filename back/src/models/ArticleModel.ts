import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  img: String,
  description: String,
  brand: {
    type: String,
    required: true,
  },
});

export const ArticleModel = mongoose.model("Article", articleSchema);
