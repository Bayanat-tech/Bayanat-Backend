import * as express from "express";
import {
  createCountry,
  deleteCountries,
  updateCountry,
} from "../../controllers/wms/country_wms.controller";

const router = express.Router();

router.post("/country", createCountry);
router.put("/country", updateCountry);
router.post("/country/delete", deleteCountries);

export default router;
