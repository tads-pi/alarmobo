import * as puppeteer from "puppeteer"
import * as constants from "../constants/index.js";

export async function newBrowser() {
    const browser = await puppeteer.launch({
        headless: false,
        timeout: constants.LONG_TIMEOUT,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]
    })

    const killback = () => browser.close()

    return [browser, killback]
}

export async function waitNavigation(page = new puppeteer.Page) {
    await page.waitForNavigation({
        timeout: constants.LONG_TIMEOUT,
    })
}

export async function waitForSelector(page = new puppeteer.Page, selector = "", waitTime = 0) {
    return new Promise(async (resolve, reject) => {
        await page.waitForSelector(selector)
        console.log(`[info] waiting for "${selector}" during ${waitTime} seconds`)
        setTimeout(() => resolve(true), waitTime * 1000);
    })

}

export async function clickByValue(page = new puppeteer.Page, str = "", customBtn = "button") {
    const [button] = await page.$x(`//${customBtn}[contains(., '${str}')]`);
    if (button) {
        await button.click();
    } else {
        throw new Error(`button ${str} not found.`)
    }
}

export async function waitNavigationAndClickByValue(page = new puppeteer.Page, str = "", customBtn = "button") {
    await waitNavigation(page)
    await clickByValue(page, str, customBtn)
}

export async function clickByValueAndWaitNavigation(page = new puppeteer.Page, str = "", customBtn = "button") {
    await clickByValue(page, str, customBtn)
    await waitNavigation(page)
}