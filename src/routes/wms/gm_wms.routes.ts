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

const router = express.Router();

router.post("/country", createCountry);
router.put("/country", updateCountry);
router.post("/country/delete", deleteCountries);

router.post("/industrysector", createindustrysector);
router.put("/industrysector", updateindustrysector);

export default router;
