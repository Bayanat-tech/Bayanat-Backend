import * as express from "express";
import passport from "passport";
import { getSecMaster } from "../controllers/Security/security.controller";
import gmSecRouter from "./Security/gm_Security.routes";
import { checkUserAuthorization } from "../middleware/checkUserAthorization";

const router = express.Router();

router.get(
  "/:master",
  passport.authenticate("jwt", { session: false }),
  checkUserAuthorization,
  getSecMaster
);

router.use(
  "/gm",
  passport.authenticate("jwt", { session: false }),
  checkUserAuthorization,
  gmSecRouter
);

router.delete(
  "/:master",
  passport.authenticate("jwt", { session: false }),
  getSecMaster
);
export default router;
