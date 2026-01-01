const { Schema } = require("mongoose");

const holdingSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    require: true,
  },
  qty: {
    type: Number,
  },
  avg: {
    type: Number,
  },
  price: {
    type: Number,
  },
  net: {
    type: String,
    default: "-0.17%",
  },
  day: {
    type: String,
    default: "-0.34%",
  },
  isLoss: {
    type: Boolean,
  },
});

module.exports = { holdingSchema };
