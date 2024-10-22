import * as express from "express";
import {
  createCountry,
  deleteCountries,
  updateCountry,
} from "../../controllers/wms/country_wms.controller";

import {
  createcurrency,
  updatecurrency,
} from "../../controllers/wms/currency_wms.controller";

import {
  createdepartment,
  updatedepartment,
} from "../../controllers/wms/department_wms.controller";

import {
  createSalesman,
  updateSalesman,
} from "../../controllers/wms/salesman_wms.controllers";

//import { createcountry, updateCountry } from "../../controllers/wms/country_wms.controller";
//import { createdepartment, updatedepartment } from "../../controllers/wms/flowmaster_wms.controller";
//import { createdepartment, updatedepartment } from "../../controllers/wms/rolemaster_wms.controller";

import {
  createlocation,
  updatelocation,
} from "../../controllers/wms/location_wms.controller";
import { createUom, updateUom } from "../../controllers/wms/uom_wms.controller";
import { createMoc2, updateMoc2 } from "../../controllers/wms/moc2_wms.controller";
import { createMoc,updateMoc } from "../../controllers/wms/moc_wms.controller";
import { createUoc, updateUoc } from "../../controllers/wms/uoc_wms.controller";
import { createHarmonize, updateHarmonize } from "../../controllers/wms/harmonize_wms.controller";
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

export default router;
