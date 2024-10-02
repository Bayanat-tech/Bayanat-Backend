// import passport from "passport";
// import passportJWT from "passport-jwt";

// import constants from "../helpers/constants";
// import User from "../models/user";
// import { UserAttribute } from "../interfaces/user.type";

// const JWTStrategy = passportJWT.Strategy;
// const ExtractJWT = passportJWT.ExtractJwt;

// passport.use(
//   new JWTStrategy(
//     {
//       jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
//       secretOrKey: constants.AUTHENTICATION.APP_SECRET,
//     },
//     (jwtPayload, cb) =>
//       User.findOne({ where: { email_id: jwtPayload.email_id } })
//         .then((user: User | null) => {
//           cb(null, user ? (user.dataValues as UserAttribute) : {});
//         })
//         .catch((err) => {
//           cb(err);
//         })
//   )
// );

import passport from "passport";
import passportJWT from "passport-jwt";
import constants from "../helpers/constants";
import User from "../models/user";
import { UserAttribute } from "../interfaces/user.type";

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: constants.AUTHENTICATION.APP_SECRET,
    },
    async (jwtPayload, cb) => {
      try {
        console.log("jwtPayload", jwtPayload);

        const user = await User.findOne({
          where: { email_id: jwtPayload.email_id },
        })
          .then((user: User | null) => {
            cb(null, (user ? user.dataValues : {}) as UserAttribute);
          })
          .catch((err) => {
            cb(err);
          });
      } catch (err) {
        // Handle errors gracefully
        return cb(err, false);
      }
    }
  )
);
