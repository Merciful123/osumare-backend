import express from "express";
import taskRoutes from "./routes/taskRoute.js";
import { generateToken } from "./middleware/auth.js";


const app = express();
const PORT = 5000;

// Middleware to parse JSON requests
app.use(express.json());


// Sample user for authentication
const user = { id: 1, username: 'admin', password: 'adminpass' };




// Login route to get a token
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
    const token = generateToken({ username: user.username });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Use the task routes
app.use("/api", taskRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
