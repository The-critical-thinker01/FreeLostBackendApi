const Object = require('../database/models/object.model');

exports.listObjects = () => {
    return Object.find().exec();
}