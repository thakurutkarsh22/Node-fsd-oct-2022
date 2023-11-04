const express = require("express");

const {
  allCurrenciesHandler,
  getInduviddualCurrency,
  createNewCurrency,
} = require("../controllers/currency.controller");
const { route } = require("./currencies.routes");

const router = express.Router();

// METHODS

// Handlers

router.get("/allCurrencies", allCurrenciesHandler);

router.post("/new", createNewCurrency);

router.get("/:id", getInduviddualCurrency);

module.exports = router;
