import { Selector } from 'testcafe'
import { login } from '../helper'

// prettier ignore
fixture`New payee test`.page`http://zero.webappsecurity.com/index.html`

// we are using before hook, because to inorder to add new payee a user have to be logged in
test.before(async t => {
	// const signInButton = Selector('#signin_button')
	// await t.click(signInButton)
	// const usernameInput = Selector('#user_login')
	// const passwordInput = Selector('#user_password')
	// await t.typeText(usernameInput, 'username', { paste: true })
	// await t.typeText(passwordInput, 'password', { paste: true })
	// const submitButton = Selector('.btn-primary')
	// await t.click(submitButton)

	// Using helper:
	await login('username', 'password')
})('User can add new payee to the list', async t => {
	// Selectors
	const payBillsTab = Selector('#pay_bills_tab')
	const addNewPayeeTab = Selector('a').withText('Add New Payee')
	const payeeName = Selector('#np_new_payee_name')
	const payeeAddress = Selector('#np_new_payee_address')
	const account = Selector('#np_new_payee_account')
	const payeeDetails = Selector('#np_new_payee_details')
	const addPayeeButton = Selector('#add_new_payee')
	const payeeCreatedMessage = Selector('#alert_content').innerText
	// Actions
	await t.click(payBillsTab)
	await t.click(addNewPayeeTab)
	await t.typeText(payeeName, 'Pam', { paste: true })
	await t.typeText(payeeAddress, '11 1st Street, Bellevue, WA 98008', {
		paste: true,
	})
	await t.typeText(account, '110011', { paste: true })
	await t.typeText(payeeDetails, 'details test', { paste: true })
	await t.click(addPayeeButton)
	// Assertions
	await t
		.expect(payeeCreatedMessage)
		.contains('The new payee Pam was successfully created.')
})
