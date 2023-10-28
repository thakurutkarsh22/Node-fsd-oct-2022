function allCurrenciesHandler(req, res) {
  console.log("hello world  get all allCurrencies");

  res.end("hello world  get all allCurrencies");
}

function getInduviddualCurrency(req, res) {
  res.end("individual coins");
}

module.exports = { allCurrenciesHandler, getInduviddualCurrency };
