const { app } = require('../app');
const passport = require('passport');
const User = require("../database/models/user.model");
const { findUserPerEmail ,findUserPerGoogleId} = require('../queries/user.queries');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy=require('passport-facebook').Strategy;
const InstagramStrategy=require('passport-instagram').Strategy;




app.use(passport.initialize());
app.use(passport.session());


//on stoke l'id du user dans la session apres authentification
//done est la fonction de callback dont le premier parametre correspond a lerreur
passport.serializeUser((user, done) => {
    done(null, user._id);
})


//recupere le user dans la base de donnee grace a son _id et le positione sur req
passport.deserializeUser(async(id, done) => {
    try {
        const user = await User.findById(id).exec();
        done(null, user); //positione l'objet user sur l'objet req
    } catch (e) {
        done(e, null);
    }
});


//connexion avec email/username et mot de passe
passport.use('local', new LocalStrategy ({ usernameField: 'email' }, async(email, password, done) => {
        try {
            const user = await findUserPerEmail(email);
            if (user) {
                let match=false;
                if(user.password == null){
                    done(null, false, { message: 'Ce compte exite en tant utilisateur google,facebook ou instagram, utilisez ces reseau pour vous connecter !!!' })
                }else{
                    const match = await user.comparePassword(password);
                    if (match) {
                        done(null, user);
                    } else {
                        done(null, false, { message: 'Le mot de passe ne correspond pas!!!' })
                    }

                }
              
            } else {
                done(null, false, { message: 'Utilisateur introuvable!!!' });
            }
        } catch (e) {
            done(e);
        }
    }))
    //null parce que l'erreur ne vient pas du serveur mais de l'utilisateur qui n'a pas rentré 
    //un identifiant correct, false car nous n'avons pas de user et un objet que nous pourrons 
    //utiliser pour afficher une erreur  .






    passport.use('google', new GoogleStrategy({
        clientID: '698659596036-qcoertuq60f6j5q1lnns5c7ci3kv4dic.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: 'https://freelost-api.kouelab.com/auth/google/cb'
    }, async(accessToken, refreshToken, profile, done) => {
        console.log(profile);
        try {
            const user = await findUserPerGoogleId(profile.id);
            if (user) {
                done(null, user);
            } else {
                const newUser = new User({
                    username: profile.displayName,
                    googleId: profile.id,
                    email: profile.emails[0].value,
                    avatar:profile.photos[0].value
                    
                });
                const savedUser = await newUser.save();
                done(null, savedUser);
            }
        } catch (e) {
            done(e);
        }
    }))


    passport.use('facebook', new FacebookStrategy({
        clientID: '406594058080060',
        clientSecret: '518a890477f63f6cd40a699b8f8047bd',
        callbackURL: "http://localhost:3005/auth/facebook/callback"
    }, async(accessToken, refreshToken, profile, done) => {
        console.log(profile);
        // try {
        //     const user = await findUserPerGoogleId(profile.id);
        //     if (user) {
        //         done(null, user);
        //     } else {
        //         const newUser = new User({
        //             username: profile.displayName,
        //             googleId: profile.id,
        //             email: profile.emails[0].value,
        //             avatar:profile.photos[0].value
                    
        //         });
        //         const savedUser = await newUser.save();
        //         done(null, savedUser);
        //     }
        // } catch (e) {
        //     done(e);
        // }
    }))


    passport.use('instagram', new InstagramStrategy({
        clientID: '743013947041868',
        clientSecret: '575b6391545f4e098b898730276d96e5',
        callbackURL: "http://localhost:3005/auth/instagram/callback"
    }, async(accessToken, refreshToken, profile, done) => {
        console.log(profile);
        // try {
        //     const user = await findUserPerGoogleId(profile.id);
        //     if (user) {
        //         done(null, user);
        //     } else {
        //         const newUser = new User({
        //             username: profile.displayName,
        //             googleId: profile.id,
        //             email: profile.emails[0].value,
        //             avatar:profile.photos[0].value
                    
        //         });
        //         const savedUser = await newUser.save();
        //         done(null, savedUser);
        //     }
        // } catch (e) {
        //     done(e);
        // }
    }))