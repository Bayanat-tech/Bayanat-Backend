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
} from "../../controllers/wms/activitygroup_wms.controller";

import {
  createdepartment,
  updatedepartment,
} from "../../controllers/wms/department_wms.controller";
import {
  createcurrency,
  updatecurrency,
} from "../../controllers/wms/currency_wms.controller";

import {
  createSalesman,
  updateSalesman,
} from "../../controllers/wms/salesman_wms.controllers";

//import { createcountry, updateCountry } from "../../controllers/wms/country_wms.controller";
//import { createdepartment, updatedepartment } from "../../controllers/wms/flowmaster_wms.controller";
//import { createdepartment, updatedepartment } from "../../controllers/wms/rolemaster_wms.controller";

import {
  createPrincipal,
  getPrincipal,
  updatePrincipal,
} from "../../controllers/wms/principal_wms.controller";

import {
  createlocation,
  updatelocation,
} from "../../controllers/wms/location_wms.controller";
<<<<<<< HEAD
import { createUom, updateUom } from "../../controllers/wms/uom_wms.controller";
import { createMoc2, updateMoc2 } from "../../controllers/wms/moc2_wms.controller";
import { createMoc,updateMoc } from "../../controllers/wms/moc_wms.controller";
import { createUoc, updateUoc } from "../../controllers/wms/uoc_wms.controller";
import { createHarmonize, updateHarmonize } from "../../controllers/wms/harmonize_wms.controller";
=======

import { createActivityBillingDataByCompanyAndPrincipal, updateActivityBillingDataByCompanyAndPrincipal } from "../../controllers/wms/activity_wms.controller";
>>>>>>> qa
const router = express.Router();

//-------------country------------

router.post("/country", createCountry);
router.put("/country", updateCountry);

router.post("/country/delete", deleteCountries);

router.post("/department", createdepartment);
router.put("/department", updatedepartment);

//-------------principal------------
router.get("/principal/:prin_code", getPrincipal);
router.post("/principal", createPrincipal);
router.put("/principal/:prin_code", updatePrincipal);

router.post("/country/delete", deleteCountries);
//-------------location------------

router.post("/location", createlocation);
router.put("/location", updatelocation);

//--------salesaman------------------
router.post("/salesman", createSalesman);
router.put("/salesman", updateSalesman);

<<<<<<< HEAD
//--------uom

router.post("/uom", createUom);
router.put("/uom", updateUom);

//--------moc
router.post("/moc",createMoc);
router.put("/moc",updateMoc);

//--------moc2
router.post("/moc2",createMoc2);
router.put("/moc2",updateMoc2);


//--------UOC
//router.post("/uoc",createUoc);
//router.put("/uoc",updateUoc);

//--------HARMONIZE
router.post("/harmonize",createHarmonize);
router.put("/harmonize",updateHarmonize);
=======
//-------------Activity Group------------
router.post("/activitygroup", createActivityGroup);
router.put("/activitygroup", updateActivityGroup);
router.post("/activitygroup/delete", deleteActivityGroup);
// -------- Activity Billing Data -------
router.post("/activity_billing/:principalCode", createActivityBillingDataByCompanyAndPrincipal);
router.put("/activity_billing/:principalCode/:activityCode", updateActivityBillingDataByCompanyAndPrincipal);
>>>>>>> qa

export default router;
