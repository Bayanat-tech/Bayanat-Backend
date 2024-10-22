import * as express from "express";

import {
  createcostmaster,
  updatecostmaster,
} from "../../controllers/Purchaseflow/costmaster_pf.controller";

import {
  createitemmaster,
  updateitemmaster,
} from "../../controllers/Purchaseflow/itemmaster_pf.controller";

const router = express.Router();

router.post("/costmaster", createcostmaster);
router.put("/costmaster", updatecostmaster);

import {
  createprojectmaster,
  updateprojectmaster,
} from "../../controllers/Purchaseflow/projectmaster_pf.controller";

router.post("/projectmaster", createprojectmaster);
router.put("/projectmaster", updateprojectmaster);

//-----Item Master---------------

router.post("/itemmaster", createitemmaster);
router.put("/itemmaster", updateitemmaster);

export default router;
