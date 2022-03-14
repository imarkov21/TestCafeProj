import { Selector } from 'testcafe'
// import { login } from '../helper'
import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage'

const navbar = new Navbar()
const loginPage = new LoginPage()

//prettier-ignore
fixture `Login Test`
    .page `http://zero.webappsecurity.com/index.html`

test('User cannot login with invalid credentials', async t => {
	// const signInButton = Selector('#signin_button')
	// await t.click(signInButton)

	// const loginForm = Selector('#login_form')
	// await t.expect(loginForm.exists).ok()

	// const usernameInput = Selector('#user_login')
	// const passwordInput = Selector('#user_password')
	// await t.typeText(usernameInput, 'invalid username', { paste: true })
	// await t.typeText(passwordInput, 'invalid password', { paste: true })

	// const submitButton = Selector('.btn-primary')
	// await t.click(submitButton)
	// refactored with helper.js
	// await login('invalid login', 'invalid password') USING Component LoginPage instead of helper

	await t.click(navbar.signInButton)
	loginPage.loginToApp('invalid username', 'invalid password')

	// const errorMessage = Selector('.alert-error').innerText
	await t
		.expect(loginPage.errorMessage.innerText)
		.contains('Login and/or password are wrong.')
})
test('User can login into application', async t => {
	// const signInButton = Selector('#signin_button')
	// await t.click(signInButton)

	// const loginForm = Selector('#login_form')
	// await t.expect(loginForm.exists).ok()

	// const usernameInput = Selector('#user_login')
	// const passwordInput = Selector('#user_password')
	// await t.typeText(usernameInput, 'username', { paste: true })
	// await t.typeText(passwordInput, 'password', { paste: true })

	// const submitButton = Selector('.btn-primary')
	// await t.click(submitButton)
	// refactored with helper.js
	// await login('username', 'password') NOT USING HELPER

	await t.click(navbar.signInButton)
	await t.expect(loginPage.loginForm.exists).ok()

	loginPage.loginToApp('username', 'password')

	const accountSummaryTab = Selector('#account_summary_tab')
	await t.expect(accountSummaryTab.exists).ok() //true
	await t.expect(loginPage.loginForm.exists).notOk() //false

	// const userIcon = Selector('.icon-user')
	await t.click(navbar.userIcon)

	// const logoutButton = Selector('#logout_link')
	await t.click(navbar.logoutButton)

	await t.expect(navbar.logoutButton.exists).notOk()
	await t.expect(loginPage.signInButton.exists).ok()
})
