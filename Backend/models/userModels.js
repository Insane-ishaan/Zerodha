const { model } = require("mongoose");
const userSchema = require("../schemas/usersSchema");

const UserModel = new model("User", userSchema);

module.exports = { UserModel };
