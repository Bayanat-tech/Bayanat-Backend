import * as express from "express";
import passport from "passport";
import { getWmsMaster, deleteWmsMaster } from "../controllers/wms.controller";
import gmWmsRouter from "./wms/gm_wms.routes";
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
  gmWmsRouter
);

router.post(
  "/:master",
  passport.authenticate("jwt", { session: false }),
  deleteWmsMaster
);
export default router;
