import { Selector } from 'testcafe'
import FeedbackPage from '../page-objects/pages/FeedbackPage'

const feedbackPage = new FeedbackPage()

// prettier-ignore
fixture `Feedback from test` 
    .page `http://zero.webappsecurity.com/index.html`

test('User can submit feedback via form', async t => {
	// Selectors
	const linkToFeedback = Selector('#feedback') // this selector was left here, not moved to any Opject page, because it's just one link.
	// const form_name = Selector('#name') //FOR SLECTORS moved to FeedbackPage
	// const form_email = Selector('#email')
	// const form_subject = Selector('#subject')
	// const form_comment = Selector('#comment')
	// const form_submitButton = Selector('input').withAttribute(
	// 	'value',
	// 	'Send Message'
	// )
	// const confirmationMessage = Selector('div').innerText

	// Actions
	await t.click(linkToFeedback)
	await t.typeText(feedbackPage.form_name, 'irina', { paste: true })
	await t.typeText(feedbackPage.form_email, 'email@random.com', { paste: true })
	await t.typeText(feedbackPage.form_subject, 'test', { paste: true })
	await t.typeText(feedbackPage.form_comment, 'this is just a test', {
		paste: true,
	})
	feedbackPage.waitFor(4000)
	await t.click(feedbackPage.form_submitButton)

	// Assertions
	await t
		.expect(feedbackPage.confirmationMessage.innerText)
		.contains('Thank you for your comments, irina.')
})
