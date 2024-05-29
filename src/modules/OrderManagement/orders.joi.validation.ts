import Joi from 'joi';


export const orderJoiSchema = Joi.object({
    email: Joi.string().email().required(),
    productId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
    price: Joi.number().min(0).required(),
    quantity: Joi.number().min(1).required()
  });
  