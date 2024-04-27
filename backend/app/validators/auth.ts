import vine from '@vinejs/vine'

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email().trim(),
    password: vine.string().minLength(6).trim(),
  })
)

export const registerValidator = vine.compile(
  vine.object({
    firstName: vine.string(),
    lastName: vine.string(),
    email: vine.string().email(),
    password: vine.string().minLength(6),
    passwordConfirm: vine.string(),
    phone: vine.string(),
    address: vine.string(),
    city: vine.string(),
    zipCode: vine.string(),
    country: vine.string(),
  })
)
