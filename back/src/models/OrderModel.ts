import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  articlesRef: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
      required: true,
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  modifiedAt: {
    type: Date,
    default: new Date(),
  },
  progression: {
    type: String,
    enum: ["PREPAR", "ONROAD", "ARRIVE"],
    default: "PREPAR",
  },
  address: String,
  userRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const OrderModel = mongoose.model("Order", orderSchema);
