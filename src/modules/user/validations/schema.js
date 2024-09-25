import Joi from "joi";

export const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  username: Joi.string().alphanum().min(3).max(20).required(),
  phone: Joi.string().required(),
  role: Joi.string().valid("user", "editor").required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export const updateRoleSchema = Joi.object({
  _id: Joi.string().required(),
  role: Joi.string().valid("user", "editor", "admin").required(),
});

export const updateMyUserSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(20),
  email: Joi.string().email(),
  password: Joi.string().min(8),
  phone: Joi.string(),
});

export const deleteSchema = Joi.object({
  _id: Joi.string().required(),
});

export const findByEmailSchema = Joi.object({
  email: Joi.string().email().required(),
});

export const filterSchema = Joi.object({
  limit: Joi.number().optional(),
  page: Joi.number().optional(),
  email: Joi.string().email().optional(),
});
