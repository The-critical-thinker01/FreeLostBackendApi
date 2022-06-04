const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    numero: { type: Number, require: true },
    photo: { type: String }


});


const User = mongoose.model("user", userSchema);

module.exports = User;