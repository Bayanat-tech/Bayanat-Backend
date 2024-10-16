import cors from "cors";
import express from "express";
import { databaseConnection } from "./src/database/connection";
import "./src/utils/passport";

// Create Express app
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//routes
import authRoutes from "./src/routes/auth.routes";
import wmsRoutes from "./src/routes/wms.routes";
import pfRoutes from "./src/routes/pf_routes";
import secRoutes from "./src/routes/secuity_routes";

//----------------routes-------------
app.use("/api/auth", authRoutes);
app.use("/api/wms", wmsRoutes);
app.use("/api/pf", pfRoutes);
app.use("/api/security", secRoutes);

// Start the server
const PORT = process.env.PORT || 3500;
databaseConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("error in data base connection:", err);
  });
