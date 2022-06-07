const User = require('../database/models/user.model');


exports.createUser = async(user) => {
    try {
        const hashedPassword = await User.hashPassword(user.password);
        const newUser = new User({
            username: user.username,
            email: user.email,
            password: hashedPassword,
            numero: user.numero
        });
        return newUser.save();
    } catch (e) {
        throw e;
    }
}

exports.findUserPerEmail = async(email) => {
    return User.findOne({ 'email': email }).exec();
}