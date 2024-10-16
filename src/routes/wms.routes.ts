  import * as express from "express";
  import passport from "passport";
  import { getWmsMaster, deleteWmsMaster } from "../controllers/wms.controller";
  import gmWmsRouter from "./wms/gm_wms.routes";
  import { checkUserAuthorization } from "../middleware/checkUserAthorization";
 import { getActivityBillingDataByCompanyAndPrincipal } from "../controllers/wms/activity_wms.controller";
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
