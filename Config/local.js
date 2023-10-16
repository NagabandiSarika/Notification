require('dotenv').config()

//COMPANY DETAILS
export const COMPANY_NAME = process.env.COMPANY_NAME

//LOCALS
export const NODE_ENV = process.env.NODE_ENV
export const PORT = process.env.PORT ? process.env.PORT : 8000

//BASE URLS
export const BE_URL = process.env.BE_URL
export const ALLOWED_MICROSERVICES = [BE_URL]

//GOOGLE
export const GOOGLE = {
	WELCOME_EMAIL: process.env.WELCOME_EMAIL,
	NOTIFICATION_EMAIL: process.env.NOTIFICATION_EMAIL,
	SECURITY_EMAIL: process.env.SECURITY_EMAIL,
	GOOGLE_APP_PASS: process.env.GOOGLE_APP_PASS,
}