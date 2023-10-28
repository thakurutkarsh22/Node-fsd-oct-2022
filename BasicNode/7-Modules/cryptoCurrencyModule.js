// TO THE MOON

exports.bigGain = function toTheMoon(x) {
  return x * 1000;
};

// DIED

exports.delisted = function dead(x) {
  return x * 0;
};

// GAINS

exports.gains = function gains(x, percentage) {
  return x + percentage;
};
