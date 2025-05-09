
import cookiesBanner from "@test/pageobjects/Stv_Pages/cookies_Banner_page";
import searchPage from '@test/pageobjects/Stv_Pages/search_page'
import homePage from '@test/pageobjects/Stv_Pages/home_page'
import { expect as expectChai } from 'chai';
import generic from '@test/Utils/genericMethods';
import { Key } from 'webdriverio';
const browserName = (browser.capabilities as any).browserName;

class GenericMethod {
    /*
     * Method to verify whether the element is displayed.
     */
    async isDisplayed(element: Promise<WebdriverIO.Element>, elementName: string) {
        if (await (await element).waitForDisplayed()) {
            await (await element).isDisplayed();
            await driver.logUtil("PASS", elementName + " is displayed")
        } else {
            await driver.logUtil("FAIL", elementName + " is not displayed ")
        }
    }
    /*
     * Method to pass values to an element.
     */
    async setvalue(element: Promise<WebdriverIO.Element>, inputString, textfield) {
        if (await (await element).waitForDisplayed()) {
            await (await element).click();
            await (await element).setValue(inputString);
            await driver.logUtil("PASS", "Entered the value " + '"' + inputString + '"' + " into " + textfield)
        } else {
            await driver.logUtil("FAIL", "Entered the value " + '"' + inputString + '"' + " into " + textfield)
        }
    }
    /*
     * Method to click on element.
     */
    async click(element: Promise<WebdriverIO.Element>, elementName: string) {
        if (await (await element).waitForDisplayed()) {
            await (await element).click();
            await driver.logUtil("PASS", elementName + " is clicked")
        } else {
            await driver.logUtil("FAIL", elementName + " is not clicked")
        }
    }
    /*
     * Method to get the text from the element.
     */
    async getText(element: Promise<WebdriverIO.Element>) {
        if (await (await element).isDisplayed()) {
            const text = await (await element).getText();
            driver.logUtil("INFO", "Fetched the text : " + text)
        } else {
            driver.logUtil("FAIL", "Element not displayed to fetch text")
        }
    }
    /*
     * custom wait function
     */
    async waitForCondition(condition: () => Promise<boolean>, timeout: number) {
        return new Promise<void>((resolve, reject) => {
            const interval = setInterval(() => {
                if (condition()) {
                    clearInterval(interval);
                    resolve();
                }
            }, 1000);

            setTimeout(() => {
                clearInterval(interval);
                reject(new Error('Timeout waiting for condition'));
            }, timeout);
        });
    }
    /*
     * Method to pause the execution for specific seconds.
     */
    async wait(time: number) {
        await browser.pause(time);
    }
    /*
    * Method to scroll the page vertically.
    */
    async verticalScroll(y: number) {
        //some time this function directly doesn't work that why used inside a loop.
        for (let i = 0; i < 2; i++) {
            await browser.scroll(0, y);
        }
    }
    /*
     * Method to scroll the page downwards.
     */
    async scrollDown(count: number, distance: number) {
        for (let i = 1; i <= count; i++) {
            await browser.scroll(0, distance)
            await browser.pause(1000)
            driver.logUtil("INFO", "Scrolling the page downwards")
        }
    }
    /*
     * Method to scroll the page upwards.
     */
    async scrollUp(count: number, distance: number) {
        for (let i = 1; i <= count; i++) {
            await browser.scroll(0, distance)
            await browser.pause(1000)
            driver.logUtil("INFO", "Scrolling the page upwards")
        }
    }
    /*
     * Method to swipe the page right side using keyboard.
     */
    async swipeRight(num) {
        for (var i = 1; i <= num; i++) {
            browser.keys([Key.ArrowRight]);
        }
    }
    /*
     * Method to swipe the page downwards using keyboard.
     */
    async swipeDown(num) {
        for (var i = 1; i <= num; i++) {
            browser.keys([Key.ArrowDown]);
        }
    }
    /*
    * Method to delete all cookies form the application.
    */
    async deleteCookies() {
        if (browserName == "safari") {
            await generic.wait(2000);
            await this.rejectAllcookiesForSafari();
            await generic.wait(2000);
        }
        else {
            await browser.deleteAllCookies();
            await browser.refresh();
        }
    }
    /*
    * Method to click on first suggestion for any search result.
    */
    async clickOnFirstSuggestionSearch() {
        if (await searchPage.firstSearchSuggestion.isDisplayed()) {
            (await searchPage.firstSearchSuggestion).click;
            const text = await searchPage.firstSearchSuggestion.getText();
            driver.logUtil("INFO", "Clicked on first suggestion: " + text)
        } else {
            driver.logUtil("FAIL", "Element not displayed to fetch text")
        }
    }
    /*
     * Method to verify secondary menu elements
     */
    async secondarymenuValidation(secondaryMenuXpath, secondaryMenuValidationDataName) {
        const length = await secondaryMenuXpath.length;
        for (let i = 0; i < length; i++) {
            if (await secondaryMenuXpath[i].isDisplayed()) {
                expectChai(await secondaryMenuXpath[i].getText()).to.equal(secondaryMenuValidationDataName[i]);
                await driver.logUtil("PASS", await secondaryMenuXpath[i].getText() + " is displayed");
            } else {
                await driver.logUtil("FAIL", await secondaryMenuXpath[i].getText() + " is not displayed");
            }
        }
    }
    /*
     * Method to select all cookies from cookies banner popup.
     */
    async acceptAllCookies() {
        await (await cookiesBanner.alleAkzeptierenButton).waitForDisplayed();
        await generic.isDisplayed(cookiesBanner.alleAkzeptierenButton, "alleAkzeptieren(Accept All) button");
        await generic.click(cookiesBanner.alleAkzeptierenButton, "alleAkzeptieren(Accept All) button");
        await generic.wait(3000);
    }
    /*
     * Method to click on servustv logo.
     */
    async clickOnServusTvLogo() {
        await generic.click(homePage.stvLogo, "Servus tv logo");
    }
    /*
     * Method to click on HierAnmelden button on cookies banner.
     */
    async clickOnHierAnmeldenButtonInCookiesBanner() {
        await (await cookiesBanner.onetrustGroupContainer).waitForDisplayed();
        await generic.click(cookiesBanner.hierAnmeldenButton, "Hieranmelden(Login Here) link");
    }
    /*
     * Method to click on profile icon.
     */
    async clickOnProfileIcon() {
        await generic.wait(3000);
        await generic.click(homePage.homeProfileIconBeforeLogin, "Profile icon in home page");
    }
    /*
   * Method to verify Footer section elements.
   */
    async verifyFooterSectionOfThePage() {
        await (await homePage.copyrighNoticeLink).scrollIntoView();
        await driver.logUtil("INFO", "<-- Footer section elements -->");
        await generic.isDisplayed(homePage.copyrighNoticeLink, "Copyright notice link");
        await generic.isDisplayed(homePage.footerSection, "Footer section");
        await generic.isDisplayed(homePage.aboBestellenHeader, "Abo bestellen Header");
        await generic.isDisplayed(homePage.aboBestellenImage, "Abo bestellen Image");
        const headerLength = await homePage.footerSectionHeaders.length;
        for (let i = 1; i < headerLength; i++) {
            let header = await (await homePage.footerSectionHeaders[i]).getText();
            await generic.isDisplayed(homePage.footerSectionHeaders[i], '"' + header + '"')
            const linksLength = (await homePage.footerSectionLinks(header)).length;
            for (let j = 0; j < linksLength; j++) {
                let link = await (await homePage.footerSectionLinks(header))[j].getAttribute("title");
                await generic.isDisplayed(homePage.footerSectionLinks(header)[j], '"' + link + '"');
            }
        }
    }
    /*
     * Method to scroll the page.
     */
    async verifyPageIsScrollable(page: string) {
        const initialScrollTop = await browser.execute(() => document.documentElement.scrollTop);
        await browser.execute(() => window.scrollBy(0, 1000));
        const finalScrollTop = await browser.execute(() => document.documentElement.scrollTop);
        if (finalScrollTop > initialScrollTop) {
            driver.logUtil("PASS", '"' + page + '"' + " is scrolled downwards");
        } else {
            driver.logUtil("FAIL", '"' + page + '"' + " is not scrolled downwards");
        }
        await generic.wait(2000);
        await browser.execute(() => window.scrollBy(0, -1000));
        const finalScrollTop1 = await browser.execute(() => document.documentElement.scrollTop);
        if (finalScrollTop1 < finalScrollTop) {
            driver.logUtil("PASS", '"' + page + '"' + " is scrolled upwards");
        } else {
            driver.logUtil("FAIL", '"' + page + '"' + " is not scrolled upwards");
        }
        await generic.wait(2000);
    }
    async kontoPageCookies() {
        try {
            (await cookiesBanner.oneTrustKonto).waitForDisplayed({ timeout: 20000 });
            await generic.isDisplayed(cookiesBanner.oneTrustKonto, "konto onetrust banner");
            await generic.click(cookiesBanner.rejectAllCookiesKonto, "reject all");
            await generic.wait(3000);
        } catch (error) {
            driver.logUtil("INFO", `knto cookies banner is not present`);
        }
    }
    async clearSafariHistory(driver: WebdriverIO.Browser): Promise<void> {
        console.log('Switching to Safari and clearing browser history.');

        // Step 1: Launch Safari in native context
        await driver.execute('mobile: launchApp', { bundleId: 'com.apple.mobilesafari' });

        // Step 2: Switch to native context
        const contexts = (await driver.getContexts()) as string[]; // Explicitly cast contexts as string[]
        const nativeContext = contexts.find((context: string) => context.includes('NATIVE_APP'));
        if (!nativeContext) {
            throw new Error('Unable to find NATIVE_APP context');
        }
        await driver.switchContext(nativeContext);

        console.log('Switched to native context.');



        // Step 3: Open the Safari bottom menu and clear history
        const tabsButton = await driver.$('//XCUIElementTypeButton[@name="SidebarButton"]');
        await tabsButton.click();

        const bookmarksButton = await driver.$('//XCUIElementTypeButton[@label="Bookmarks"]');
        await bookmarksButton.click();

        const historyTab = await driver.$('//XCUIElementTypeButton[@label="History"]');
        await historyTab.click();

        const clearButton = await driver.$('//XCUIElementTypeButton[@label="Clear"]');
        await clearButton.click();

        const confirmClearButton = await driver.$('(//XCUIElementTypeStaticText[@name="Clear History"])[2]');
        await confirmClearButton.click();

        console.log('Safari history cleared.');

        // Step 4: Switch back to Safari browser context
        const webContext = contexts.find((context: string) => context.includes('WEBVIEW'));
        if (webContext) {
            await driver.switchContext(webContext);
            console.log('Switched back to webview context.');
        } else {
            throw new Error('Unable to switch back to WEBVIEW context.');
        }
    }
    async rejectAllcookiesForSafari() {
            await (await cookiesBanner.cookiesEinstellungenFooterOnFooterSection).scrollIntoView();
            await browser.pause(3000);
            await (await cookiesBanner.cookiesEinstellungenFooterOnFooterSection).click();
            await browser.pause(3000);
            await (await cookiesBanner.alleAblehnen).click();
    }

}
export default new GenericMethod();