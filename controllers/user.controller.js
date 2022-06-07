const { createUser } = require('../queries/user.queries');



exports.userCreate = async(req, res, next) => {

    const body = req.body;


    try {
        const newUser = await createUser(body);
        res.json(newUser);
    } catch (e) {
        res.json({ "error": [e.message] });
        next(e);
    }
}