import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  articlesRef: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Article' }
  ],
  createAt: { type: Date, default: new Date },
  modifiedAt: { type: Date, default: new Date },
  progression: { type: String, enum: ['PREPAR', 'ONROAD', 'ARRIVE'], default: 'PREPAR'},
  address: String,
  userRef: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export const Order = mongoose.model('Order', orderSchema);
