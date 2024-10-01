import express from "express";
import cors from "cors";
import { databaseConnection } from "./src/database/connection";

// Create Express app
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// MySQL configuration
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "BAYANAT",
};
//routes
import authRoutes from "./src/routes/auth.routes";

app.use("/api/auth", authRoutes);

// Start the server
const PORT = process.env.PORT || 3500;
databaseConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
