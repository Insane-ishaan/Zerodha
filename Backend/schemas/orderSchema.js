const { Schema } = require("mongoose");

const orderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
    },
    totalPrice: {
      type: Number,
    },
    pricePerUnit: {
      type: Number,
    },
    qty: {
      type: Number,
    },
    mode: {
      type: String,
      enum: ["BUY", "SELL"],
    },
  },
  { timestamps: true }
);

module.exports = { orderSchema };
