import * as express from "express";
import multer from "multer";
import { uploadToS3 } from "../services/s3-upload";
import { deleteFiles, getFiles } from "../controllers/files.controllers";
import passport from "passport";
import { checkUserAuthorization } from "../middleware/checkUserAthorization";

const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter(req, file, next) {
    next(null, true);
  },
});
router.get(
  "/:request_number",
  passport.authenticate("jwt", { session: false }),
  checkUserAuthorization,
  getFiles
);
router.post(
  "/upload",
  passport.authenticate("jwt", { session: false }),
  checkUserAuthorization,
  upload.single("file"),
  uploadToS3
);
router.delete(
  "/delete",
  passport.authenticate("jwt", { session: false }),
  checkUserAuthorization,
  deleteFiles
);

export default router;
