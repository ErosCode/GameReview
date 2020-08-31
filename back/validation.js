// Validation
const Joi = require('joi');

// Register validation
const registerValidation = (data) => {
    const schema = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().email().min(6).required(),
    password: Joi.string().min(6).required()
    });
    return schema.validate(data);
};

// Login validation
const loginValidation = (data) => {
    const schema = Joi.object({
    email: Joi.string().email().min(6).required(),
    password: Joi.string().min(6).required()
    });
    return schema.validate(data);
};

// Create Game validation
const addGameValidation = (data) => {
    const schema = Joi.object({
    name: Joi.string().min(2).max(255).required(),
    description: Joi.string().min(6).required()
    });
    return schema.validate(data);
};

module.exports.addGameValidation = addGameValidation;
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;