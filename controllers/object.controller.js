const mongoose = require('mongoose');

const { ObjectSchema } = require('../database/models/object.model');

const Object = mongoose.model('Object',ObjectSchema);

exports.addNewObject = async(req, res) => {
    let NewObject = new Object(req.body);

    NewObject.save((err, Object) =>{
        if(err) {
            res.send(err);
        }
        res.json(Object);
    });
};

exports.getObjects = async(req, res) => {
    Object.find({}, (err, Object) =>{
        if(err) {
            res.send(err);
        }
        res.json(Object);
    });
};

exports.getObjectWithID = async(req, res) => {
    Object.findById(req.params.ObjectId, (err, Object) =>{
        if(err) {
            res.send(err);
        }
        res.json(Object);
    });
};

exports.UpdateObject = async(req, res) => {
    Object.findOneAndUpdate({ _id: req.params.ObjectId}, req.body, { new: true }, (err, Object) =>{
        if(err) {
            res.send(err);
        }
        res.json(Object);
    });
};