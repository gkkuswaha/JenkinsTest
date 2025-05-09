import generic from '@test/Utils/genericMethods';
import assertion from '@test/Utils/assertions';
import homePage from '@test/pageobjects/Stv_Pages/home_page';
import vaidationData from '@test/testdata/ValidationData.json';

class SportAndTvProgramPage {

    get inlineFlexTitles() {
        return $$('//span[contains(@class,"inline-flex")]');
    }
    get inlineFlexSubMenu() {
        return $$('//nav[@aria-label="Secondary Menu"]//span[contains(@class,"font-normal")]');
    }
    get showOlderEntriesButton() {
        return $('//button[text()="Ältere Einträge anzeigen"]');
    }
    get eventTites() {
        return $$('//p[contains(@class, "overflow-x-hidden truncate text")]');
    }
    get submenuHeaderTab() {
        return $('//button[contains(@aria-labelledby,"headlessui-listbox-button")]');
    }
    get mwebInlineFlexSubMenu() {
        return $$('//li[contains(@class,"relative cursor-pointer select")]');
    }
    /*
     * Method to verify the URl of the Sport program page.
     */
    async verifySportProgramTabClickable(isMobile: boolean) {
        if (!isMobile) {
            await generic.click(homePage.tvProgramTab, "Tv-Program Tab");
            await (await homePage.sportProgramTab).waitForClickable();
            await generic.click(homePage.sportProgramTab, "Sport-Program Tab");
        }
        else {
            // await (await homePage.mWebTvProgramTab).waitForClickable();
            // await generic.click(homePage.mWebTvProgramTab, "Tv-Program Tab");
            await generic.wait(2000);
            await generic.click(homePage.mWebHambergerMenu, "Hamberger menu");
            await (await homePage.mWebTvprogramChevronIcon).waitForClickable();
            await generic.click(homePage.mWebTvprogramChevronIcon, "Tv-program chevron icon");
            await (await homePage.mWebSportProgramTab).waitForClickable();
            await generic.click(homePage.mWebSportProgramTab, "Sport-Program Tab");
        }
        await generic.wait(3000);
        const sportProgramURL = await browser.getUrl();
        assertion.toContain(sportProgramURL, vaidationData.sportProgram.Url);
    }
    /*
     * Method to verify the URl of the Tv program page.
     */
    async verifyTvProgramTabClickable(isMobile: boolean) {
        if (!isMobile) {
            await generic.click(homePage.tvProgramTab, "Tv-Program Tab");
        }
        else {
            await homePage.mWebTvProgramTab.waitForClickable();
            await generic.click(homePage.mWebTvProgramTab, "Tv-Program Tab");
        }
        await generic.wait(3000);
        const tvProgramURL = await browser.getUrl();
        assertion.toContain(tvProgramURL, vaidationData.tvProgram.Url);
    }
    /*
     * Method to verify event tabs and sub menu.
     */
    async verifyEventTabs(isMobile: boolean) {
        try {
            const tabsLength = await this.inlineFlexTitles.length;

            for (let i = 0; i < tabsLength; i++) {
                const eventTab = await (await this.inlineFlexTitles[i]).getText();
                driver.logUtil("PASS", "Event tab " + eventTab + " is displayed");
                await generic.click(this.inlineFlexTitles[i], eventTab);
                let subMenuLength: number;
                if (i != 0) {
                    if (!isMobile) {
                        subMenuLength = await this.inlineFlexSubMenu.length;
                    }
                    else {
                        await (await this.submenuHeaderTab).waitForClickable();
                        await generic.click(this.submenuHeaderTab, "Submenu Header Tab");
                        subMenuLength = await this.mwebInlineFlexSubMenu.length;
                    }
                    for (let j = 0; j < subMenuLength; j++) {
                        if (!isMobile) {
                            const submenu = await (await this.inlineFlexSubMenu[j]).getText();
                            driver.logUtil("PASS", ""+ submenu + " is displayed");
                        }
                        else {
                            const submenu1 = await (await this.mwebInlineFlexSubMenu[j]).getText();
                            driver.logUtil("PASS", "" + submenu1 + " is displayed");
                        }
                    }
                }
            }
        } catch (error) {
            driver.logUtil("FAIL", "Event tabs are not updated: " + error.message);
        }
    }
    /*
     * Method to verify event titles on tv program page.
     */
    async verifyEventTitles() {
        try {
            await (await this.showOlderEntriesButton).waitForClickable();
            await generic.click(this.showOlderEntriesButton, "Show older entries button");
            driver.logUtil("INFO", "<-- Event lists on Tv program page -->");
            const totalEvents = await this.eventTites.length;
            for (let i = 0; i < totalEvents; i++) {
                const eventTitleElement = this.eventTites[i];
                const eventTitleText = await eventTitleElement.getText();
                await generic.isDisplayed(eventTitleElement, eventTitleText);
            }
        } catch (error) {
            driver.logUtil("FAIL", "Error verifying event titles: " + error.message);
            throw error;
        }
    }
    /*
     * Method to scroll the sport Program page.
     */
    async verifySportProgramPageScrollable() {
        await generic.verifyPageIsScrollable("Sport Program page");
    }
    /*
     * Method to scroll the tv Program page.
     */
    async verifyTvProgramPageScrollable() {
        await generic.verifyPageIsScrollable("Tv Program page");
    }
}

export default new SportAndTvProgramPage();