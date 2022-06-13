import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    articles: [
      {
        articleRef: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Article",
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
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
  },
  { versionKey: false }
);

export const OrderModel = mongoose.model("Order", orderSchema);
