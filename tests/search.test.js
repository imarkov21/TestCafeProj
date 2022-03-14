import { Selector } from 'testcafe'
import xPathToCss from 'xpath-to-css'
import Navbar from '../page-objects/components/Navbar'
import SearchResultsPage from '../page-objects/pages/SearchResultsPage'

const navbar = new Navbar()
const searchResultsPage = new SearchResultsPage()

//prettier-ignore
fixture `Search box test`
    .page `http://zero.webappsecurity.com/index.html`

test('User can search for information using search box', async t => {
	// Selectors
	// const searchBox = Selector('#searchTerm') USING Navbar Component
	// const resultsTitle = Selector('h2')       USING SearchResultsPage
	// const linkText = Selector('div').innerText

	// xpath to css example:
	const xPath = `'//div[@id="foo"][2]/span[@class="bar"]//a[contains(@class,"baz")]//img[1]'`
	const css = xPathToCss(xPath)
	console.log(css)

	// Actions
	// await t.typeText(navbar.searchBox, 'online bank', { paste: true }) USING Navbar component
	// await t.pressKey('enter') USING Navbar component
	navbar.search('online bank')

	// Assertions
	await t.expect(searchResultsPage.resultsTitle.exists).ok()
	await t.expect(navbar.searchBox.exists).ok()
	await t
		.expect(searchResultsPage.linkText.innerText)
		.contains('Zero - Free Access to Online Banking')
})
