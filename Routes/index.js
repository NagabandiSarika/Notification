import { COMPANY_NAME } from '../Config'

import { Logger } from '../Utils'

import { MailRouter } from './mail'

const Routes = [
	{ path: '/email', router: MailRouter }
]

Routes.init = (app) => {
	try {
		Routes.forEach(route => {
			app.use([`/${COMPANY_NAME}`, route.path].join(''), route.router)
		})
	}
	catch (err) {
		Logger.error(err)
	}
}

export { Routes }