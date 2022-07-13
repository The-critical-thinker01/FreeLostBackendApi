const Object = require("../database/models/object.model");

exports.allObject = async () => {
  return Object.find().exec();
};
exports.createObject = async (object) => {
  try {
    const newObject = new Object(object);
    return newObject.save();
  } catch (e) {
    throw e;
  }
};
