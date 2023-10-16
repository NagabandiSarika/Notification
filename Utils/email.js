import nodemailer from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'

import path from 'path'

import { GOOGLE } from '../Config'

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: GOOGLE.WELCOME_EMAIL,
		pass: GOOGLE.GOOGLE_APP_PASS,
	},
})

const partialsDir = path.resolve('./templates/partials')
const viewPath = path.resolve('./templates/views')

// point to the template folder
const handlebarOptions = {
	viewEngine: {
		partialsDir,
		defaultLayout: false,
		extName: '.handlebars',
		layoutsDir: viewPath,
	},
	viewPath,
	extName: '.handlebars',
}

transporter.use('compile', hbs(handlebarOptions))

export const sendEmail = async (mailOptions) => {
	try {
		await transporter.sendMail(mailOptions)
	} catch (err) {
		throw err
	}
}