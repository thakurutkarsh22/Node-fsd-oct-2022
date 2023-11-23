const Joi = require("joi");

const loginUserSchema = Joi.object({
  userName: Joi.string().alphanum().min(3).max(10).required(),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

module.exports = { loginUserSchema };
