const express = require("express");

const {
  allCurrenciesHandler,
  getInduviddualCurrency,
} = require("../controllers/currency.controller");

const router = express.Router();

// METHODS

// Handlers

router.get("/allCurrencies", allCurrenciesHandler);

router.get("/:id", getInduviddualCurrency);
module.exports = router;
