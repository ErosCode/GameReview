// Validation
const Joi = require('joi');

module.exports = {

    // Register validation
    registerValidation: (data) => {
        const schema = Joi.object({
        name: Joi.string().min(6).max(255).required(),
        email: Joi.string().email().min(6).required(),
        password: Joi.string().min(6).required()
        });
        return schema.validate(data);
    },

    // Login validation
    loginValidation: (data) => {
        const schema = Joi.object({
        email: Joi.string().email().min(6).required(),
        password: Joi.string().min(6).required()
        });
        return schema.validate(data);
    },

    // Create Game validation
    addGameValidation: (data) => {
        const schema = Joi.object({
        name: Joi.string().min(2).max(255).required(),
        description: Joi.string().min(6).required()
        });
        return schema.validate(data);
    },

    // Create parameters validation
    validateParam: (data) => {
        const schema = Joi.object({
            userId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
        });
        return schema.validate(data);
    },
}