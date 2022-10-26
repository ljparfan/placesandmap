const express = require("express");
require("dotenv").config();
const cors = require("cors");
const placesRoutes = require("./routes/places");
const getApiKey = require("./utils");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use("/api/places", placesRoutes);
app.get("/api/key", (req, res) => {
  res.send({
    apiKey: getApiKey(),
  });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
