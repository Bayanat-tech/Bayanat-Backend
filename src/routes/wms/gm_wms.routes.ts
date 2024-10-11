import * as express from "express";
import {
  createCountry,
  deleteCountries,
  updateCountry,

 
  
} from "../../controllers/wms/country_wms.controller";
import {

  createindustrysector,
  updateindustrysector
 
  
} from "../../controllers/wms/industrysector_wms.controller";

import { createdepartment, updatedepartment } from "../../controllers/wms/department_wms.controller";
const router = express.Router();

router.post("/country", createCountry);
router.put("/country", updateCountry);

//-------------department------------
router.post("/department", createdepartment);
router.put("/department", updatedepartment);


router.post("/country/delete", deleteCountries);

router.post("/industrysector", createindustrysector);
router.put("/industrysector", updateindustrysector);

export default router;
