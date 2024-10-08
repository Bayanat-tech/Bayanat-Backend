import * as express from "express";
import passport from "passport";
import { getWmsMaster } from "../controllers/wms.controller";
import countryWmsRouter from "./wms/country_wms.routes";
import { checkUserAuthorization } from "../middleware/checkUserAthorization";

const router = express.Router();

router.get(
  "/:master",
  passport.authenticate("jwt", { session: false }),
  checkUserAuthorization,
  getWmsMaster
);

router.use(
  "/gm",
  passport.authenticate("jwt", { session: false }),
  checkUserAuthorization,
  countryWmsRouter
);

router.delete(
  "/:master",
  passport.authenticate("jwt", { session: false }),
  getWmsMaster
);
export default router;
