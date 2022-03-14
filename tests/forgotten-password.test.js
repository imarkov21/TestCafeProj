import { Selector } from 'testcafe'
import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage'
import ForgottenPasswordPage from '../page-objects/pages/ForgottenPasswordPage'

const navbar = new Navbar()
const loginPage = new LoginPage()
const forgottenPasswordPage = new ForgottenPasswordPage()

//prettier-ignore
fixture `Send forgotten password test`
    .page `http://zero.webappsecurity.com/index.html`

test('User can request new password to be send to his email', async t => {
	// Get selectors
	// const signInButton = Selector('#signin_button') EXAMPLE TO USE Navbar COMPONENT
	// const linkToPassword = Selector('a').withText('Forgot your password ?')

	// const emailInput = Selector('#user_email')
	// const message = Selector('div').innerText

	// Actions
	await t.click(navbar.signInButton)
	await t.click(loginPage.linkToPassword.withText('Forgot your password ?'))
	await t.typeText(forgottenPasswordPage.emailInput, 'email@random.com', {
		paste: true,
		replace: true,
	})
	await t.pressKey('enter')

	// Assertions
	await t
		.expect(forgottenPasswordPage.message.innerText)
		.contains('email@random.com')
	await t.expect(forgottenPasswordPage.emailInput.exists).notOk()
})
