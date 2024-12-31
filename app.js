const express = require("express");
const foodRoute = require("./routes/foodRoute");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api", foodRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});