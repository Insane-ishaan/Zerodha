const { positionsSchema } = require("../schemas/positionsSchema");
const { model } = require("mongoose");

const PositionsModel = new model("Position", positionsSchema);

module.exports = { PositionsModel };
