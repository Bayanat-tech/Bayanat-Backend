import * as express from "express";
import passport from "passport";
import { login, me } from "../controllers/auth.controller";

const router = express.Router();

router.post("/login", login);
router.get("/me", passport.authenticate("jwt", { session: false }), me);
export default router;
