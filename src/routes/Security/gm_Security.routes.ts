import * as express from "express";
import passport from "passport";
import { checkUserAuthorization } from "../../middleware/checkUserAthorization";

import {

  createrolemaster,
  updaterolemaster
 
  
} from "../../controllers/Security/rolemaster_security.controller"

import { getSecMaster } from "../../controllers/Security/security.controller";
import {

createflowmaster,
updateflowmaster,

  
} from "../../controllers/Security/flowmaster_security.controller"


const router = express.Router();

router.post("/rolemaster", createrolemaster);
router.put("/rolemaster", updaterolemaster);

router.post("/flowmaster", createflowmaster);
router.put("/flowmaster", updateflowmaster);


// router.get("/flowmaster/check", getSecMaster)

export default router;
