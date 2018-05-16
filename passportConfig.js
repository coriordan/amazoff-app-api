import passport from 'passport';
import {Strategy as JwtStrategy, ExtractJwt} from 'passport-jwt';
import LocalStrategy from 'passport-local';
import dotenv from 'dotenv';
import User from './models/userModel';

dotenv.config();

// JWT token strategy
passport.use(new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.secret,
    }, (jwtPayload, callback) => {
      User.findById(jwtPayload._id)
      .then((user) => {
        return callback(null, user);
      })
      .catch((err) => {
        callback(err);
      });
  }
));

// local strategy
passport.use(new LocalStrategy({
        usernameField: 'username',
    }, (email, password, callback) => {
      User.findOne({email: email})
      .then((user) => {
        user.verifyPassword(password, function(err, isMatch) {
          if (err) {
            return callback(err);
          }
          if (!isMatch) {
            return callback(null, false, {error: 'Login details could not be verified.'});
          }
          return callback(null, user);
        });
      })
      .catch((err) => {
        callback(err);
      });
    }
));

exports.requireAuth = passport.authenticate('jwt', {session: false});
