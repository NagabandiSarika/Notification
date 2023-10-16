import Joi from 'joi'

export const welcomeEmailValidation = {
	body: Joi.object({
		to: Joi.string().email().required(),
		userName: Joi.string().max(10).trim().required()
	})
}

export const validateEmailValidation = {
	body: Joi.object({
		source: Joi.string().lowercase().trim().required(),
		to: Joi.string().email().required(),
		subject: Joi.string().max(100).trim().required(),
		body: Joi.object()
	})
}

export const sendEmailValidation = {
	body: Joi.object({
		source: Joi.string().lowercase().trim().required(),
		to: Joi.string().email().required(),
		subject: Joi.string().required(),
		text: Joi.string().required(),
		html: Joi.string().required()
	}).xor('text', 'html')
}