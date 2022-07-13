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
exports.deleteObjectById = async (id) => {
  try {
    const objectDelete = await Object.findByIdAndDelete(id);
    return objectDelete;
  } catch (e) {
    throw e;
  }
};
exports.objectUpdate = async (id, body) => {
  try {
    const objectUpdate = await Object.findByIdAndUpdate(id, body, {
      new: true,
    });
    return objectUpdate;
  } catch (e) {
    throw e;
  }
};
