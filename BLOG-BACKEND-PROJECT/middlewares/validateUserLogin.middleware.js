const { loginUserSchema } = require("../joiSchema/joiSchemas");

function validateUserLogin(req, res, next) {
  const { error } = loginUserSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      error,
    });
  } else {
    next();
  }
}

module.exports = {
  validateUserLogin,
};
