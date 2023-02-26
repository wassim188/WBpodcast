const Joi = require("joi");

const NarratorValidation = (data) => {
  const schema = Joi.object({
    narratorName: Joi.string()
      .empty()
      .required()
      .min(4)
      .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{4,})"))
      .messages({
        "string.empty": "narratorName should not be an empty field",
        "string.base": "narratorName must be a string",
        "string.min": "narratorName length must be at least 4 characters long",
        "any.required": "narratorName is a required field",
      }),
    email: Joi.string()
      .empty()
      .required()
      .email({
        minDomainSegments: 2,
      })
      .messages({
        "string.empty": "Email cannot be an empty field",
        "string.email": "Your email must be a valid email",
        "any.required": "Email is a required field",
      }),
    password: Joi.string()
      .min(8)
      .required()
      .pattern(
        new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#$%^&*/])(?=.{8,})"
        )
      )
      .messages({
        "string.min": "Password length must be at least 8 characters",
        "string.required": "email is a required field",
        "string.pattern.base":
          "Password must contains at least one lower character, one upper character, one digit character and one specific character",
      }),
    confirm_password: Joi.any()
      .equal(Joi.ref("password"))
      .required()
      .label("Confirm password")
      .options({
        messages: {
          "any.only": "Confirm password does not match",
          "any.required": "Please confirm your password",
        },
      }),
    bio: Joi.string().empty().required().min(20).messages({
      "string.empty": "bio should not be an empty field",
      "string.base": "bio must be a string",
      "string.min": "bio length must be at least 20 characters length",
      "any.required": "bio is a required field",
    }),
  });
  return schema.validate(data);
};

module.exports.NarratorValidation = NarratorValidation;
