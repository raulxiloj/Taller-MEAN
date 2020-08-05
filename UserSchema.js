const mongoose = require("mongoose");
const { Int32 } = require("mongodb");

const UserSchema = mongoose.Schema({
    id: String,
    name: String,
    user: String,
    password: String
});

module.exports = mongoose.model("Users", UserSchema);