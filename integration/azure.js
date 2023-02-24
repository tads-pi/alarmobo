import { newBrowser } from "../utils/puppet"

export async function start() {
    const [browser, killbrowser] = newBrowser();
    try {
        const app = new AzurePuppet(await buildPage(browser), killbrowser)
        return await app.run()
    } catch (error) {
        console.log(error)
        await killbrowser()
    }
}

async function buildPage(browser = new puppeteer.Browser) {
    const url = ""

    const page = await browser.newPage()
    page.goto(url)
    page.setViewport({
        width: 1280,
        height: 720,
    })

    return page
}

class AzurePuppet {

    constructor() {

    }
}