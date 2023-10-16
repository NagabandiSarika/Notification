import { Router } from 'express'

import { welcomeEmail, sendCustomEmail, sendSourceEmail } from '../Controllers'
import { sendEmailValidation, welcomeEmailValidation, validateEmailValidation } from '../validations'
import { asyncWrapper, validateInput } from '../Utils'

export const MailRouter = Router()

MailRouter.post('/welcome', validateInput(welcomeEmailValidation), asyncWrapper(welcomeEmail))
MailRouter.post('/send-source-email', validateInput(validateEmailValidation), asyncWrapper(sendSourceEmail))
MailRouter.post('/send-email', validateInput(sendEmailValidation), asyncWrapper(sendCustomEmail))
