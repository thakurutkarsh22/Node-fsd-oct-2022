function allCurrenciesHandler(req, res) {
  console.log("hello world  get all allCurrencies");

  res.end(
    "hello world  get all allCurrencies hello hello heloo w awdkuasdkjsga "
  );
}

function getInduviddualCurrency(req, res) {
  const body = req.body;
  res.end("individual coins");
}

function createNewCurrency(req, res) {
  const body = req.body;

  const { name, value } = body;

  // some thign here ..

  res.end(" nicely done created new currency " + name);
}

module.exports = {
  allCurrenciesHandler,
  getInduviddualCurrency,
  createNewCurrency,
};
