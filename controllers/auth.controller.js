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
                        "user": user,
                    });
                }
            })
        }
    })(req, res, next);
}



exports.googleAuth = (req, res, next) => {
    passport.authenticate('google', {
        scope: ['email', 'profile']
    })(req, res, next);
}

exports.googleAuthCb = (req, res, next) => {
    passport.authenticate('google',{
        successRedirect:"/auth/sucessRed",
        failureRedirect:"/auth/failureRed"
    })(req, res, next);
}

exports.signout = (req, res, next) => {
    req.logout();
}