import * as express from "express";
import { getMasters } from "../controllers/getMasters.controller";
const router = express.Router();

router.get("/:level2", getMasters);
export default router;
