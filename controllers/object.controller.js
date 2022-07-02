const mongoose = require('mongoose');

const { ObjectSchema } = require('../database/models/object.model');

const Object = mongoose.model('Object',ObjectSchema);

exports.addNewObject = (req, res) => {
    let NewObject = new Object(req.body);

    NewObject.save((err, Object) =>{
        if(err) {
            res.send(err);
        }
        res.json(Object);
    });
};

exports.getObject = (req, res) => {
    Object.find({}, (err, Object) =>{
        if(err) {
            res.send(err);
        }
        res.json(Object);
    });
};