import { sendResponse, Logger, sendEmail } from '../Utils'

export const welcomeEmail = async (req, res) => {
	try {
		const { to, userName } = req.body
		const mailOptions = {
			to,
			subject: 'Welcome to Our Creative Hub!',
			template: 'welcome',
			context: {
				UserName: userName,
			}
		}
		const emailResponse = await sendEmail(mailOptions)
		return sendResponse(res, SUCCESS, 'Email sent!', { emailResponse }, '')
	}
	catch (err) {
		Logger.error(err.message)
		throw err
	}
}

export const sendSourceEmail = async (req, res) => {
	try {
		const { to, subject, body, source } = req.body
		const emailOptions = {
			to,
			subject,
			template: source,
			context: {...body}
		}
		const emailResponse = await sendEmail(emailOptions)
		return sendResponse(res, SUCCESS, 'Email sent!', { emailResponse }, '')
	}
	catch (err) {
		Logger.error(err.message)
		throw err
	}
}

export const sendCustomEmail = async (req, res) => {
	try {
		const { to, subject, html } = req.body
		const emailResponse = await sendEmail(to, subject, html)
		return sendResponse(res, SUCCESS, 'Email sent! 🚀📧🔒', { emailResponse }, '')
	}
	catch (err) {
		Logger.error(err.message)
		throw err
	}
}
