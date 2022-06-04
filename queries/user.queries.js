const User = require('../database/models/user.model');

exports.listUsers = () => {
    return User.find().exec();
}