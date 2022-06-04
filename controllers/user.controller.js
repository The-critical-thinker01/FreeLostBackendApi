const { listUsers } = require('../queries/user.queries');


exports.userList = async(req, res, next) => {
    try {
        const users = await listUsers();
        res.json(users);
    } catch (e) {
        next(e);
    }
}