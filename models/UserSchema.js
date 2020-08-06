const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: String,
    user: String,
    password: String
});

module.exports = mongoose.model("User", UserSchema);