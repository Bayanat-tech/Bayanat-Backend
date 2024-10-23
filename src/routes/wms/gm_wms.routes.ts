import * as express from "express";
import {
  createCountry,
  deleteCountries,
  updateCountry,
} from "../../controllers/wms/country_wms.controller";

import {
  createManufacture,
  updateManufacture,
} from "../../controllers/wms/manufacture_wms.controller";

import {
  createGroup,
  updateGroup,
} from "../../controllers/wms/productgroup_wms.controller";

import {
  createActivityGroup,
  deleteActivityGroup,
  updateActivityGroup,
} from "../../controllers/wms/activitygroup_wms.controller";

import {
  createLine,
  deleteLine,
  updateLine,
} from "../../controllers/wms/line_wms.controller";
import {
  createBrand,
  updateBrand,
} from "../../controllers/wms/brand_wms.controller";

import {
  createsupplier,
  updatesupplier,
} from "../../controllers/wms/supplier_wms.controller";

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
import { createUom, updateUom } from "../../controllers/wms/uom_wms.controller";
import {
  createMoc2,
  updateMoc2,
} from "../../controllers/wms/moc2_wms.controller";
import { createMoc, updateMoc } from "../../controllers/wms/moc_wms.controller";
import { createUoc, updateUoc } from "../../controllers/wms/uoc_wms.controller";
import {
  createHarmonize,
  updateHarmonize,
} from "../../controllers/wms/harmonize_wms.controller";
import { checkPassword } from "../../middleware/checkPassword";
//import { createActivityBillingDataByCompanyAndPrincipal, updateActivityBillingDataByCompanyAndPrincipal } from "../../controllers/wms/activity_wms.controller";
import { createActivitysubgroup } from "../../controllers/wms/activity_subgroup_wms.controller";

import {
  createActivityBillingDataByCompanyAndPrincipal,
  updateActivityBillingDataByCompanyAndPrincipal,
  copyBillingActivity,
} from "../../controllers/wms/activity_wms.controller";
const router = express.Router();

//-------------country------------

router.post("/country", createCountry);
router.put("/country", updateCountry);

router.post("/country/delete", deleteCountries);

//-------------country------------

router.post("/manufacture", createManufacture);
router.put("/manufacture", updateManufacture);

//-------------Group------------

router.post("/group", createGroup);
router.put("/group", updateGroup);

router.post("/group/delete", deleteCountries);

//-------------Brand------------

router.post("/brand", createBrand);
router.put("/brand", updateBrand);

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

//-------------currency------------

router.post("/currency", createcurrency);
router.put("/currency", updatecurrency);

//--------salesaman

router.post("/salesman", createSalesman);
router.put("/salesman", updateSalesman);

//--------Supplier

router.post("/supplier", createsupplier);
router.put("/supplier", updatesupplier);
//--------salesaman------------------
router.post("/salesman", createSalesman);
router.put("/salesman", updateSalesman);

//--------uom
router.post("/uom", createUom);
router.put("/uom", updateUom);

//--------moc
router.post("/moc", createMoc);
router.put("/moc", updateMoc);

//--------moc2
router.post("/moc2", createMoc2);
router.put("/moc2", updateMoc2);

//--------UOC
//router.post("/uoc",createUoc);
//router.put("/uoc",updateUoc);

//--------HARMONIZE
router.post("/harmonize", createHarmonize);
router.put("/harmonize", updateHarmonize);

//-------------Activity Group------------
router.post("/activitygroup", createActivityGroup);
router.put("/activitygroup", updateActivityGroup);
router.post("/activitygroup/delete", deleteActivityGroup);

//-------------Line------------
router.post("/line", createLine);
router.put("/line", updateLine);
router.post("/line/delete", deleteLine);

// -------- Activity Billing Data -------
router.post(
  "/activity_billing/:principalCode",
  checkPassword,
  createActivityBillingDataByCompanyAndPrincipal
);
router.put(
  "/activity_billing/:principalCode/:activityCode",
  checkPassword,
  updateActivityBillingDataByCompanyAndPrincipal
);
router.post("/copy_billing_activity", checkPassword, copyBillingActivity);

//-------------Activity Sub Group------------
router.post("activitysubgroup", createActivitysubgroup);
router.put("activitysubgroup", updateActivityGroup);

export default router;
