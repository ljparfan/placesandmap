const express = require("express");
const axios = require("axios");
const getApiKey = require("../utils");

const placesRoutes = express.Router();

placesRoutes.get("/", async (req, res) => {
  const searchKeyword = req.query.searchKeyword;
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${searchKeyword}&key=${getApiKey()}`
  );

  res.send(response.data);
});

placesRoutes.get("/:placeId", async (req, res) => {
  const placeId = req.params.placeId;

  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=${getApiKey()}`
  );

  res.send(response.data);
});

module.exports = placesRoutes;
