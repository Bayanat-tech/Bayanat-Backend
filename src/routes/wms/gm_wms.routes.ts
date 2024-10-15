import * as express from "express";
import {
  createCountry,
  deleteCountries,
  updateCountry,
  } from "../../controllers/wms/country_wms.controller";
  
import { createdepartment, updatedepartment } from "../../controllers/wms/department_wms.controller";
//import { createcountry, updateCountry } from "../../controllers/wms/country_wms.controller";
//import { createdepartment, updatedepartment } from "../../controllers/wms/flowmaster_wms.controller";
//import { createdepartment, updatedepartment } from "../../controllers/wms/rolemaster_wms.controller";

import {
   
  createcostmaster,
  updatecostmaster
 
  
} from "../../controllers/Purchaseflow/costmaster_pf.controller"


import {

  createrolemaster,
  updaterolemaster
 
  
} from "../../controllers/Security/rolemaster_security.controller";

import {

  createflowmaster,
  updateflowmaster
 
  
} from "../../controllers/Security/flowmaster_security.controller";


const router = express.Router();

router.post("/rolemaster", createrolemaster);
router.put("/rolemaster", updaterolemaster);

router.post("/flowmaster", createflowmaster);
router.put("/flowmaster", updateflowmaster);


router.post("/country", createCountry);
router.put("/country", updateCountry);

//-------------department------------
router.post("/department", createdepartment);
router.put("/department", updatedepartment);

router.post("/country/delete", deleteCountries);
router.post("/costmaster", createcostmaster);
router.put("/costmastert", updatecostmaster);

export default router;
