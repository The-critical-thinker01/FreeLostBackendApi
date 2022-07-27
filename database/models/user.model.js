const mongoose = require("mongoose");
const schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  numero: { type: Number },
  avatar: {
    type: String,
    default:
      "https://res.cloudinary.com/dhv6exyaj/image/upload/v1658939222/freeLost/profil_keuq4s.jpg",
  },
  googleId: { type: String },
  type: { type: String, default: "simple" },
  dateCreation: { type: Date },
});

userSchema.statics.hashPassword = function (password) {
  return bcrypt.hash(password, 12);
};
userSchema.methods.comparePassword = async function (password) {
  let rps;
  await bcrypt.compare(password, this.password).then(function (result) {
    console.log(result);
    rps = result;
  });
  return rps;
};

const User = mongoose.model("user", userSchema);

module.exports = User;
