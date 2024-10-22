import * as express from "express";
import passport from "passport";
import { getWmsMaster, deleteWmsMaster } from "../controllers/wms.controller";
import gmWmsRouter from "./wms/gm_wms.routes";
import { checkUserAuthorization } from "../middleware/checkUserAthorization";
import {
  getActivityBillingDataByCompanyAndPrincipal,
  createActivityBillingDataByCompanyAndPrincipal,
  updateActivityBillingDataByCompanyAndPrincipal,
  getActivityDataByMoc1,
  getActivityDataByMoc2,
} from "../controllers/wms/activity_wms.controller";
const router = express.Router();

router.get(
  "/:master",
  passport.authenticate("jwt", { session: false }),
  checkUserAuthorization,
  getWmsMaster
);
router.get(
  "/:master/:companyCode/:principalCode",
  passport.authenticate("jwt", { session: false }),
  checkUserAuthorization,
  getActivityBillingDataByCompanyAndPrincipal
);

router.post(
  "/:master/:companyCode/:principalCode",
  passport.authenticate("jwt", { session: false }),
  checkUserAuthorization,
  createActivityBillingDataByCompanyAndPrincipal
);
router.put(
  "/:master/:companyCode/:principalCode/:activityCode",
  passport.authenticate("jwt", { session: false }),
  checkUserAuthorization,
  updateActivityBillingDataByCompanyAndPrincipal
);

router.get(
  "/:master/:companyCode/:activity_uoc",
  passport.authenticate("jwt", { session: false }),
  checkUserAuthorization,
  getActivityBillingDataByCompanyAndPrincipal
);

router.get(
  "/:master/:companyCode/:activit_moc1",
  passport.authenticate("jwt", { session: false }),
  checkUserAuthorization,
  getActivityDataByMoc1
);

router.get(
  "/:master/:companyCode/:activit_moc2",
  passport.authenticate("jwt", { session: false }),
  checkUserAuthorization,
  getActivityDataByMoc2
);

router.use(
  "/gm",
  passport.authenticate("jwt", { session: false }),
  checkUserAuthorization,
  gmWmsRouter
);

router.delete(
  "/:master",
  passport.authenticate("jwt", { session: false }),
  deleteWmsMaster
);
export default router;
