import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  articleId: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Article' }
  ],
  date: { type:Date, default: new Date },
  modifiedDate: Date,
  progression: ["In preparation", "On the way", "Arrived"],
  address: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export const Order = mongoose.model('Order', orderSchema);
