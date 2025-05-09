import { $ } from '@wdio/globals';
import assertion from '@test/Utils/assertions';
import vaidationData from '@test/testdata/ValidationData.json';
import generic from '@test/Utils/genericMethods';
const browserName = (browser.capabilities as any).browserName;

class CookiesBanner {
    get onetrustGroupContainer() {
        return $('//div[@id="onetrust-group-container"]');
    }
    get zumAboButton() {
        return $('//a[text()="Zum Abo"]');
    }
    get hierAnmeldenButton() {
        return $('#onetrust-servus-tv-on-sign-in');
    }
    get alleAkzeptierenButton() {
        return $('//button[@class="ot-more-btn"][1]');
    }
    get cookiesEinstellungenFooterOnFooterSection() {
        return $('//a[@id="ot-sdk-btn"]');
    }
    get impressumTab() {
        return $('//a[text()="Impressum"]');
    }
    get impressumLinkElement() {
        return $('//a[@title="Impressum"]');
    }
    get datenschutzerklärungTab() {
        return $('//*[contains(@class,"footer")]/a[contains(text(),"Daten")]');
    }
    get DatenschutzrichtlinieLinkElement() {
        return $('//a[@title="Datenschutzrichtlinie"]');
    }
    get cookieEinstellungenTab() {
        return $('(//a[text()="Cookie Einstellungen"])[2]');
    }

    get crossIconOncookieEinstellungenBanner() {
        return $('//button[@id="close-pc-btn-handler"]');
    }
    get allezZulassenButton() {
        return $('//button[text()="Alle zulassen"][1]');
    }

    get unbedingtErforderlicheCookies() {
        return $('//h4[@id="ot-header-id-C0001"]');
    }

    get performanceCookies() {
        return $('//h4[@id="ot-header-id-C0002"]');
    }

    get performanceCookiesSetting() {
        return $('//*[@id="ot-header-id-C0002"]');
    }
    get personalisierteWerbungButton() {
        return $('//*[@class="ot-more-btn" and text()="Personalisierte Werbung"]');
    }
    get personalisierteWerbungToggleSwitch() {
        return $('//*[@id="ot-header-id-BG291"]/following-sibling::div/descendant::label');
    }

    get performanceToggelSwitch() {
        return $('//*[@id="ot-header-id-C0002"]/following-sibling::div/descendant::label');
    }

    get meineAuswahlBestätigen() {
        return $('//*[contains(@class,"save-preference-btn-handler")]');
    }
    get planPickerBanner() {
        return $('//div[@class="subscription-list"]');
    }
    get listeUnsererPartner() {
        return $('//a[@class="ot-link-btn onetrust-vendors-list-handler"]');
    }
    get supplierlistPopup(){
        return $('//div[@aria-label="Ihre Privatsphäre"]')
    }
    get IABprovider(){
        return $('//button[@aria-label="IAB-Anbieter"]')
    }
    get googleAnbieter(){
        return $('//button[@aria-label="Google-Anbieter"]')
    }
    get crossIconOnLieferantenliste(){
        return $('//button[@id="close-pc-btn-handler"]')
    }
    get oneTrustKonto(){
        return $('//div[@id="onetrust-banner-sdk"]')
    }
    get rejectAllCookiesKonto(){
        return $('//button[@id="onetrust-reject-all-handler"]')
    }
    get alleAblehnen(){
        return $('//button[text()="Alle ablehnen"]')
    }
    /*
     * Methods to verify presence of One trust cookie banner.
     */
    async verifyPresenceOfOnetrustGroupContainer() {
        await driver.logUtil("INFO", "<-- verify Presences Of OnetrustGroup container -->");
        await (await this.onetrustGroupContainer).waitForDisplayed();
        await generic.isDisplayed(this.onetrustGroupContainer,"onetrustGroupContainer(Cookies banner)");
    }
    /*
     * Method to verify the fuctionality of PersonalisierteWebung button on cookies banner popup.
     */
    async verifyFunctionalityOfPersonalisierteWebungButton() {
        await driver.logUtil("INFO", "<-- Verify The funtionality Of PersonalisierteWebung Button -->");
        await generic.isDisplayed(this.personalisierteWerbungButton,"personalisierte Werbung Button");
        await generic.click(this.personalisierteWerbungButton,"personalisierte Werbung Button");
        await (await this.onetrustGroupContainer).waitForDisplayed({ reverse: true, timeoutMsg: "cookies banner is displayed" })
    }
    /*
     * Method to verify the fuctionality of alleAkzeptieren button on cookies banner popup.
     */
    async verifyFunctionalityOfAlleAkzeptierenButton() {
        await driver.logUtil("INFO", "<-- Verify The funtionality Of alleAkzeptieren Button -->");
        await (await this.alleAkzeptierenButton).waitForDisplayed();
        await generic.isDisplayed(this.alleAkzeptierenButton,"alleAkzeptieren(Accept All) button");
        await generic.click(this.alleAkzeptierenButton,"alleAkzeptieren(Accept All) button");
        await (await this.onetrustGroupContainer).waitForDisplayed({ reverse: true, timeoutMsg: "cookies banner is displayed" })
    }
    /*
     * Method to check the presence of zumabo button on cookies banner popup.
     */
    async verifyPresenceOfZumAboButton() {
        await driver.logUtil("INFO", "<-- presence Of ZumAbo Button -->");
        await (await this.zumAboButton).waitForDisplayed();
        await generic.isDisplayed(this.zumAboButton, "registration(zumbo) button");
        await generic.click(this.zumAboButton, "registration(zumbo) button");
        await generic.wait(3000);
        const currentUrlImp = await browser.getUrl();
        assertion.toContain(currentUrlImp, vaidationData.planpicker);
    }
    /*
     * Method to verify hyperlik  presence and navigation of the links present on the cookies bannerpopup.
     */
    async verifyFunctionalityOfHyperLinksTabPresentOnCookiesBanner() {
        if(browserName !=="safari"){
        await driver.logUtil("INFO", "<-- Verify The Functionality Of the HperLinks Tab Present On CookiesBanner -->");
        await this.impressumTab.scrollIntoView();
        await generic.isDisplayed(this.impressumTab,"impressumTab(Imprint) On cookies banner");
        await generic.click(this.impressumTab,"impressumTab(Imprint)");
        const handles = await browser.getWindowHandles();
        const secondTab = handles[1];
        const parentTab = handles[0];
        await browser.switchToWindow(secondTab);
        await (await this.impressumLinkElement).waitForDisplayed();
        const currentUrlImp = await browser.getUrl();
        assertion.toContain(currentUrlImp, vaidationData.bannerLinks.Impressum);
        await browser.switchToWindow(parentTab);
        await generic.isDisplayed (this.datenschutzerklärungTab,"datenschutzerklärungTab(Data protection declaration) On cookies banner");
        await generic.click(this.datenschutzerklärungTab,"datenschutzerklärungTab");
        const handle = await browser.getWindowHandles();
        if (browserName == 'firefox') {
            const third = handle[1];
            await browser.switchToWindow(third);
         }else{
        const third = handle[2];
        await browser.switchToWindow(third);
         }
        await (await this.DatenschutzrichtlinieLinkElement).waitForDisplayed();
        const currentUrlDaten = await browser.getUrl();
        assertion.toContain(currentUrlDaten, vaidationData.bannerLinks.Datenschutzerklärung);
        await browser.switchToWindow(parentTab);
        }
    }
    /*
     * Method to verify the cookies setting fuctonality present on cookies banner popup.
     */
    async verifyFunctionalityOfCookieSetting() {
        await driver.logUtil("INFO", "<-- verify The Fuctionality Of CookieSetting functionality -->");
        await generic.isDisplayed(this.cookieEinstellungenTab,"cookieEinstellungenTab(cookies setting) On cookies banner")
        await generic.click(this.cookieEinstellungenTab,"cookieEinstellungenTab");
        await (await this.crossIconOncookieEinstellungenBanner).waitForDisplayed();
        await generic.isDisplayed(this.crossIconOncookieEinstellungenBanner,"crossIconOncookieEinstellungenBanner");
        await generic.isDisplayed(this.allezZulassenButton,"allezZulassen(Allow every one)");
        await generic.isDisplayed(this.unbedingtErforderlicheCookies,"unbedingtErforderlicheCookies(Strickly neccessary cookies)")
        await this.unbedingtErforderlicheCookies.scrollIntoView();
        await generic.isDisplayed(this.performanceCookiesSetting,"performanceCookies");
        await generic.click(this.performanceToggelSwitch,"performanceCookies");
        await (await this.personalisierteWerbungButton).waitForDisplayed();
        await generic.isDisplayed(this.personalisierteWerbungButton,"performanceCookiesSetting");
        await generic.click(this.personalisierteWerbungToggleSwitch,"performanceToggelSwitch");
        await generic.isDisplayed(this.meineAuswahlBestätigen,"meineAuswahlBestätigen(confirm my selection)");
        await generic.click(this.meineAuswahlBestätigen,"meineAuswahlBestätigen(confirm my selection)");
        await browser.refresh();
        await (await this.onetrustGroupContainer).waitForExist({ reverse: true })
    }
    /*
     * Method to verify the fuctionality of list partner provider on cookies banner popup.
     */
    async verifyThefuntionalityOflisteUnsererPartner() {
        await (await this.listeUnsererPartner).waitForDisplayed();
        await generic.isDisplayed(this.listeUnsererPartner, "on cookies banner liste Unserer Partner");
        await generic.click(this.listeUnsererPartner, "liste Unserer Partner")
        await generic.isDisplayed(this.supplierlistPopup, "supplier list popup");
        await generic.isDisplayed(this.crossIconOnLieferantenliste,"cross icon on supplier list");
        await generic.isDisplayed(this.IABprovider, "IAB provider");
        await generic.isDisplayed(this.googleAnbieter,"google anbieter");
        await generic.isDisplayed(this.meineAuswahlBestätigen,"meineAuswahlBestätigen(confirm my selection)");
        await generic.click(this.crossIconOnLieferantenliste,"cross icon on supplier list");
    }
}

export default new CookiesBanner();
