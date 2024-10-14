import * as express from "express";
import {
  createLocation,
  deleteLocations,
  updateLocation,
} from "../../controllers/wms/location_wms.controller";

const router = express.Router();

router.post("/location", createLocation);
router.put("/location", updateLocation);
router.post("/location/delete", deleteLocations);

export default router;
