import { Selector } from 'testcafe'

//prettier-ignore
fixture`Getting started with TestCafe`
    .page `https://devexpress.github.io/testcafe/example/`
    .before(async t =>{
        //Test setup goes here
        // await runDatabaseReset()
        // await seedTestData()
    })
    .beforeEach(async t=>{
        // Runs before each test
        await t.setTestSpeed(1)
        await t.setPageLoadTimeout(0)
    })
    .after(async t=>{
        // cleaning test data
        // Logging and sending data to monitoring systems
    })
    .afterEach(async t=>{
        // Runs after each test
    })

test('My first testcafe test', async t => {
	const developer_name_input = Selector('#developer-name')
	const submit_button = Selector('#submit-button')
	const articleText = Selector('#article-header').innerText

	// await t.takeScreenshot({ fullPage: true })
	// await t.takeElementScreenshot(submit_button)
	await t.typeText(developer_name_input, 'John')
	// await t.wait(3000)
	await t.click(submit_button)

	await t.expect(articleText).contains('John')
})
// test.only('My first testcafe test', async t => {
// 	const developer_name_input = Selector('#developer-name')
// 	const submit_button = Selector('#submit-button')
// 	const articleText = Selector('#article-header').innerText

// 	// await t.takeScreenshot({ fullPage: true })
// 	// await t.takeElementScreenshot(submit_button)
// 	await t.typeText(developer_name_input, 'John')
// 	// await t.wait(3000)
// 	await t.click(submit_button)

// 	await t.expect(articleText).contains('John')
// })
