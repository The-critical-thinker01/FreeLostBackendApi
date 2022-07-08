const passport = require("passport");

exports.sessionCreate = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      next(err);
    } else if (!user) {
      res.status(403).json({ error: info.message });
    } else {
      req.login(user, (err) => {
        if (err) {
          next(err);
        } else {
          res.status(200).json({ user });
        }
      });
    }
  })(req, res, next);
};

exports.googleAuth = (req, res, next) => {
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })(req, res, next);
};

exports.googleAuthCb = (req, res, next) => {
  passport.authenticate("google", {
    successRedirect: "/auth/sucessRed",
    failureRedirect: "/auth/failureRed",
  })(req, res, next);
};

exports.facebookAuth = (req, res, next) => {
  passport.authenticate("facebook", {
    scope: ["email", "profile"],
  })(req, res, next);
};

exports.facebookAuthCb = (req, res, next) => {
  passport.authenticate("facebook", {
    successRedirect: "/auth/sucessRed",
    failureRedirect: "/auth/failureRed",
  })(req, res, next);
};

exports.instagramAuth = (req, res, next) => {
  passport.authenticate("instagram", {})(req, res, next);
};

exports.instagramAuthCb = (req, res, next) => {
  passport.authenticate("instagram", {
    successRedirect: "/auth/sucessRed",
    failureRedirect: "/auth/failureRed",
  })(req, res, next);
};

exports.signout = (req, res, next) => {
  req.logout();
};
