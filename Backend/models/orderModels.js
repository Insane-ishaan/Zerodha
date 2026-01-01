const { model } = require("mongoose");
const { orderSchema } = require("../schemas/orderSchema");

const OrderModel = new model("Order", orderSchema);

module.exports = { OrderModel };
