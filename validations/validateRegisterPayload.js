import Joi from "joi";

export const validateRegistration = (payload) => {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string(),
        userName: Joi.string().required(),
        password: Joi.string().required()
    })
    return schema.validate(payload)
}