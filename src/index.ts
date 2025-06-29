import express from "express";
import dotenv from "dotenv";

// Fungsi logging sederhana untuk assignment
function send_log_message(message: string) {
  console.log(`[MCP LOG] ${message}`);
}

dotenv.config();

const app = express();
const port = process.env.PORT;

if (!port) {
  const errorMsg = "PORT environment variable is missing!";
  send_log_message(errorMsg);
  throw new Error(errorMsg);
}

app.get("/", (req, res) => {
  send_log_message("Root endpoint accessed");
  res.send("MCP Weather Server is running!");
});

app.listen(port, () => {
  send_log_message(`Server is running on port ${port}`);
  console.log(`Server is running on port ${port}`);
});
