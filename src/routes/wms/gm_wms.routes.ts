import * as express from "express";
import {
  createCountry,
  deleteCountries,
  updateCountry,
} from "../../controllers/wms/country_wms.controller";

import {
  createdepartment,
  updatedepartment,
} from "../../controllers/wms/department_wms.controller";
//import { createcountry, updateCountry } from "../../controllers/wms/country_wms.controller";
//import { createdepartment, updatedepartment } from "../../controllers/wms/flowmaster_wms.controller";
//import { createdepartment, updatedepartment } from "../../controllers/wms/rolemaster_wms.controller";

import {
  createPrincipal,
  getPrincipal,
  getPrincipalCode,
  updatePrincipal,
} from "../../controllers/wms/principal_wms.controller";

const router = express.Router();

//-------------country------------
router.post("/country", createCountry);
router.put("/country", updateCountry);

//-------------department------------
router.post("/department", createdepartment);
router.put("/department", updatedepartment);

//-------------principal------------
router.get("/principal/code", getPrincipalCode);
router.get("/principal/:prin_code", getPrincipal);
router.post("/principal", createPrincipal);
router.put("/:prin_code", updatePrincipal);

router.post("/country/delete", deleteCountries);

export default router;
