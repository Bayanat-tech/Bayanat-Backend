import * as express from "express";
import {
  createCountry,
  deleteCountries,
  updateCountry,

  } from "../../controllers/wms/country_wms.controller";
  
import { createdepartment, updatedepartment } from "../../controllers/wms/department_wms.controller";
import { createSalesman, updateSalesman } from "../../controllers/wms/salesman_wms.controllers";

//import { createcountry, updateCountry } from "../../controllers/wms/country_wms.controller";
//import { createdepartment, updatedepartment } from "../../controllers/wms/flowmaster_wms.controller";
//import { createdepartment, updatedepartment } from "../../controllers/wms/rolemaster_wms.controller";

import {
  createlocation,
  updatelocation,
} from "../../controllers/wms/location_wms.controller";
const router = express.Router();

//-------------country------------

router.post("/country", createCountry);
router.put("/country", updateCountry);

router.post("/country/delete", deleteCountries);

router.post("/department", createdepartment);
router.put("/department", updatedepartment);

//-------------location------------

router.post("/location", createlocation);
router.put("/location", updatelocation);

//--------salesaman

router.post("/salesman", createSalesman);
router.put("/salesman", updateSalesman);


export default router;
