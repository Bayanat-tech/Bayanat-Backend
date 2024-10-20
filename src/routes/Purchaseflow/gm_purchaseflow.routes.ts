import * as express from "express";

import {
   
  createcostmaster,
  updatecostmaster
 
  
} from "../../controllers/Purchaseflow/costmaster_pf.controller"

const router = express.Router();

router.post("/costmaster", createcostmaster);
router.put("/costmaster", updatecostmaster);


import {
   
  createprojectmaster,
  updateprojectmaster
 
  
} from "../../controllers/Purchaseflow/projectmaster_pf.controller"



router.post("/projectmaster", createprojectmaster);
router.put("/projectmaster", updateprojectmaster);

export default router;