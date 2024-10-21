import * as express from "express";
import passport from "passport";
import {
  getPfMaster,
  deletepfMaster,
} from "../controllers/Purchaseflow/purchaseflow.controller";
import gmPfRouter from "./Purchaseflow/gm_purchaseflow.routes";
import { checkUserAuthorization } from "../middleware/checkUserAthorization";

const router = express.Router();

console.log("In side Purchase");

router.get(
  "/:master",
  passport.authenticate("jwt", { session: false }),
  checkUserAuthorization,
  getPfMaster
);

router.use(
  "/gm",
  passport.authenticate("jwt", { session: false }),
  checkUserAuthorization,
  gmPfRouter
);

router.delete(
  "/:master",
  passport.authenticate("jwt", { session: false }),
  deletepfMaster
);
export default router;
