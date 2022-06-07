const passport = require('passport');

exports.sessionCreate = (req, res, next) => {

    passport.authenticate('local', (err, user, info) => {
        if (err) {
            next(err);
        } else if (!user) {
            res.status(403).json({ "error": info.message });
        } else {
            req.login(user, (err) => {
                if (err) { next(err) } else {
                    res.status(200).json({
                        "userId": user._id,
                    });
                }
            })
        }
    })(req, res, next);
}