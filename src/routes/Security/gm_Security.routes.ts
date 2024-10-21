import * as express from "express";

import {
  createrolemaster,
  updaterolemaster,
} from "../../controllers/Security/rolemaster_security.controller";

import {
  createflowmaster,
  updateflowmaster,
} from "../../controllers/Security/flowmaster_security.controller";

import {
  createsecmaster,
  updatesecmaster,
} from "../../controllers/Security/secmaster_security.controller";

const router = express.Router();

router.post("/rolemaster", createrolemaster);
router.put("/rolemaster", updaterolemaster);

router.post("/flowmaster", createflowmaster);
router.put("/flowmaster", updateflowmaster);

// router.get("/flowmaster/check", getSecMaster)

//secmaster

router.post("/secmaster", createsecmaster);
router.put("/secmaster", updatesecmaster);

export default router;
