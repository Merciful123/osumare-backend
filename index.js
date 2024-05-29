import express from "express";
import taskRoutes from "./routes/taskRoute.js";

const app = express();
const PORT = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Use the task routes
app.use("/api", taskRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
