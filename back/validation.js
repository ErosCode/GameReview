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

    // Create review validation
    validateParam: (schema, name) => {
        return (req, res, next) => {
            const result =  schema.validate({ param: req['params'][name] });
            if (result.error) {
                // Error happen
                return res.status(400).json(result.error);
            } else {
                if (!req.value)
                    req.value = {};
                if (!req.value['params'])
                    req.value['params'] = {};
                
                req.value['params'][name] = result.value.param;
                next();
            }
        }
    },

    schemas: {
        idSchema: Joi.object().keys({
            param: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
        })
    },
}