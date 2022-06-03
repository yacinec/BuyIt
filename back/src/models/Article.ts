import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  name: String,
  price: Number,
  img: String,
  description: String,
  brand: String
});

export const Article = mongoose.model('Article', articleSchema);
