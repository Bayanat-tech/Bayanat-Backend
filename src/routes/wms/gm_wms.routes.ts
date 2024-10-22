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

import {
  createActivityBillingDataByCompanyAndPrincipal,
  updateActivityBillingDataByCompanyAndPrincipal,
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

//-------------Activity Group------------
router.post("/activitygroup", createActivityGroup);
router.put("/activitygroup", updateActivityGroup);
router.post("/activitygroup/delete", deleteActivityGroup);
// -------- Activity Billing Data -------
router.post(
  "/activity_billing/:principalCode",
  createActivityBillingDataByCompanyAndPrincipal
);
router.put(
  "/activity_billing/:principalCode/:activityCode",
  updateActivityBillingDataByCompanyAndPrincipal
);

export default router;
