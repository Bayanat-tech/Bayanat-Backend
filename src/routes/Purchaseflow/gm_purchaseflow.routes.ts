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




import { getDivisions } from "../../controllers/Purchaseflow/fetch_division_pf.controller";

// Define a GET route to fetch divisions
router.get('/divisionsdropdown', getDivisions);
export default router;
