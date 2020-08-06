const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: String,
    username: String,
    password: String
});

module.exports = mongoose.model("User", UserSchema);