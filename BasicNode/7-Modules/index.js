const cryptoModel = require("./cryptoCurrencyModule");

const gain = cryptoModel.gains(50, 50);
const delisted = cryptoModel.delisted(1000);
const totheMoon = cryptoModel.bigGain(100);

console.log("debug answer", gain, delisted, totheMoon);
