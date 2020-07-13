const passport=require('passport');
const JWTStrategy=require('passport-jwt').Strategy;
const ExtractJWT=require('passport-jwt').ExtractJwt;
const Docter=require('../models/doctor');

let opts={
    jwtFromRequest :ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'docter'
}
passport.use(new JWTStrategy(opts, function(jwt_payload, done) {
    Docter.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
}));
module.exports=passport;