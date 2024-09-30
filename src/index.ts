import express, { Request, Response } from "express";
import mysql from "mysql2/promise";

// Create Express app
const app = express();
app.use(express.json());

// MySQL configuration
const dbConfig = {
  host: "localhost",
  user: "my_app_user",
  password: "password",
  database: "my_app_db",
};

// Endpoint to test MySQL connection
app.get("/", async (req: Request, res: Response) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute("SELECT 1 + 1 AS solution");
    res.send(`Database test result: ${JSON.stringify(rows)}`);
    await connection.end();
  } catch (error) {
    res.status(500).send("Database connection failed");
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
