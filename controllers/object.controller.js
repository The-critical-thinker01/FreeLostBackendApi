const { listObjects } = require('../queries/object.queries');


exports.objectList = async(req, res, next) => {
    try {
        const object = await listObjects();
        res.json(objects);
    } catch (e) {
        next(e);
    }
}