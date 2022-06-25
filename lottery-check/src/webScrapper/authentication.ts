// const cheerio = require('cheerio');

export const getAuthToken = async (url: string) => {
    // (async () => {
    //     const browser = await puppeteer.launch();
    //     const page = await browser.newPage();
    //     await page.goto(url);
    //     const [el] = await page.$x('//*[@id="__VIEWSTATE"]');
    //     const text = await el.getProperty('textContent')
    //     const viewState = await text.jsonValue();

    //     const [el2] = await page.$x('//*[@id="__EVENTVALIDATION"]');
    //     const text2 = await el.getProperty('textContent')
    //     const viewState2 = await text.jsonValue();
    //     await browser.close();

    //     return [viewState, viewState2]
    //   })();
}