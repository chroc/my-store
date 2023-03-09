const passport = require('passport');
const LocalStrategy = require('./strategies/localStrategy.js');
const JwtStrategy = require('./strategies/jwtStrategy.js');

passport.use(LocalStrategy);
passport.use(JwtStrategy);