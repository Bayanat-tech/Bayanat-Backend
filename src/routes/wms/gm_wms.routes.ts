import * as express from "express";
import {
  createCountry,
  deleteCountries,
  updateCountry,
} from "../../controllers/wms/country_wms.controller";

import {
  createActivityGroup,
  deleteActivityGroup,
  updateActivityGroup,
} from "../../controllers/wms/ACTIVITYGROUP_wms.controller";

import {
  createdepartment,
  updatedepartment,
} from "../../controllers/wms/department_wms.controller";
//import { createcountry, updateCountry } from "../../controllers/wms/country_wms.controller";
//import { createdepartment, updatedepartment } from "../../controllers/wms/flowmaster_wms.controller";
//import { createdepartment, updatedepartment } from "../../controllers/wms/rolemaster_wms.controller";

import {
  createlocation,
  updatelocation,
} from "../../controllers/wms/location_wms.controller";
const router = express.Router();

router.post("/country", createCountry);
router.put("/country", updateCountry);

//-------------department------------
router.post("/department", createdepartment);
router.put("/department", updatedepartment);

//-------------location------------

router.post("/location", createlocation);
router.put("/location", updatelocation);

router.post("/country/delete", deleteCountries);

//-------------Activity Group------------
router.post("/activitygroup", createActivityGroup);
router.put("/activitygroup", updateActivityGroup);
router.post("/activitygroup/delete", deleteActivityGroup);

export default router;
