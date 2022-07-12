const mongoose = require('mongoose');
const { createObject } = require('../queries/object.queries');

const { ObjectSchema } = require('../database/models/object.model');

const Object = mongoose.model('Object',ObjectSchema);

exports.addNewObject = async(req, res, next) => {
    const body = req.body;
        try {
            const newObject = await createObject(body);
            res.json(newObject);
        } catch (e) {
            res.json({ error: [e.message] });
            next(e);
        }
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

exports.deleteObject = async(req, res) => {
    Object.deleteOne({ _id: req.params.ObjectId}, (err, Object) =>{
        if(err) {
            res.send(err);
        }
        res.json({ message: 'Objet effacer avec succes'});
    });
};