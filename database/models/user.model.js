const mongoose = require("mongoose");
const schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    numero: { type: Number, require: true },
    photo: { type: String }


});

userSchema.statics.hashPassword = (password) => {
    return bcrypt.hash(password, 12);
}
userSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.password)
}


const User = mongoose.model("user", userSchema);

module.exports = User;