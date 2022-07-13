const User = require("../database/models/user.model");

exports.createUser = async (user) => {
  try {
    const hashedPassword = await User.hashPassword(user.password);
    const newUser = new User({
      username: user.username,
      email: user.email,
      password: hashedPassword,
      numero: user.numero,
      dateCreation: new Date(),
    });
    return newUser.save();
  } catch (e) {
    throw e;
  }
};

exports.findUserPerEmail = async (email) => {
  return User.findOne({ email: email }).exec();
};
exports.findUserPerGoogleId = (googleId) => {
  return User.findOne({ googleId: googleId }).exec();
};

exports.editUserById = async (user, id) => {
  try {
    const userUpdate = await User.findByIdAndUpdate(id, user, {
      new: true,
    });
    return userUpdate;
  } catch (e) {
    throw e;
  }
};

exports.allUsers = async () => {
  return User.find().exec();
};
