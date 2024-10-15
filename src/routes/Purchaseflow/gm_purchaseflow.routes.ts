import * as express from "express";

import {
   
  createcostmaster,
  updatecostmaster
 
  
} from "../../controllers/Purchaseflow/costmaster_pf.controller"

const router = express.Router();

router.post("/costmaster", createcostmaster);
router.put("/costmastert", updatecostmaster);

export default router;
