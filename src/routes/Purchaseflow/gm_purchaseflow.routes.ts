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

<<<<<<< HEAD



import { getDivisions } from "../../controllers/Purchaseflow/fetch_division_pf.controller";

// Define a GET route to fetch divisions
router.get('/divisionsdropdown', getDivisions);
=======
//-----Item Master---------------

router.post("/itemmaster", createitemmaster);
router.put("/itemmaster", updateitemmaster);

>>>>>>> qa
export default router;
