
import generic from "@test/Utils/genericMethods";
import getApi from '@test/api/getRequest.ts';
import assertion from '@test/Utils/assertions';
import homePage from '@test/pageobjects/Stv_Pages/home_page';

class OnKanalePage {
    get onKanaleSecondaryMenu() {
        return $$('//*[@id="navigationmainendportal"]/descendant::a');
    }
    get onKanalePageHeader() {
        return $('//*[@id="maincontentstart"]/parent::div/descendant::h1[text()="Live TV"]');
    }
    get onKanaleTrayText() {
        return $('//div[text()="On-Kanäle"]');
    }
    get liveEventStreamTrayText() {
        return $('//*[contains(text(),"LIVE: Die nächsten Event-Streams")]');
    }
    get tvKanaleTrayText() {
        return $('//div[text()="TV-Kanäle"]');
    }
    get onKanaleTrayRail() {
        return $$('(//div[text()="On-Kanäle"]/parent::div/following-sibling::div)[1]/descendant::a[contains(@class,"absolute")]');
    }
    get liveEventStreamTrayRail() {
        return $$('(//*[@aria-live="polite"])[2]//a//span');
    }
    get tvKanaleTrayRail() {
        return $$('(//div[text()="TV-Kanäle"]/parent::div/following-sibling::div)[1]/descendant::a[contains(@class,"absolute")]');
    }
    public currentCardTime(card: number) {
        const xpath = `(((//*[@aria-live="polite"])[2]//a/preceding-sibling::div)[${card}]/div)[1]`;
        return $(xpath);
    }
    public currentCardChampionship(card: number) {
        const xpath = `(((//*[@aria-live="polite"])[2]//a/preceding-sibling::div)[${card}]/div)[2]`;
        return $(xpath);
    }
    public currentCardTitle(card: number) {
        const xpath = `((//*[@aria-live="polite"])[2]//a//span)[${card}]`;
        return $(xpath);
    }
    get liveEventRailNextSlide() {
        return $('(//*[@aria-live="polite"])[2]//parent::*//*[@aria-label="Next slide"]');
    }
    get onKanalefirstTrayCard() {
        return $('((//div[text()="On-Kanäle"]/parent::div/following-sibling::div)[1]/descendant::a)[1]');
    }
    get nextSlideIcon() {
        return $('(//div[text()="TV-Kanäle"]/parent::div/following-sibling::div)[1]/descendant::div[@aria-label="Next slide"]');
    }    
    /*
     * Method to verify the titles of "TV Kanale" tray cards.
     */
    async verifyTvKanaleTrayCards(isMobile: boolean) {
        if (!isMobile) {
            await browser.execute('window.scrollTo(0, document.body.scrollHeight);');
            await generic.wait(2000);
            await (await homePage.onkanaleTab).waitForClickable();
            await generic.click(homePage.onkanaleTab, "On kanale link");
        }
        else {
            await (await homePage.mWebHambergerMenu).waitForClickable();
            await generic.click(homePage.mWebHambergerMenu, "Hamberger menu");
            await (await homePage.onkanaelTabHanbergerMenu).waitForClickable();
            await generic.click(homePage.onkanaelTabHanbergerMenu, "Onkanale tab");
        }
        await (await this.onKanalePageHeader).waitForDisplayed();
        await generic.isDisplayed(this.onKanalePageHeader, "On-Kanale page header")
        await (await this.tvKanaleTrayText).scrollIntoView();
        await generic.isDisplayed(this.tvKanaleTrayText, "<--TV KANALE TRAY-->");
        if(!isMobile){
        await generic.wait(1000);
        await generic.click(this.nextSlideIcon, "Next slide Icon");
        }
        const tvKanaleTrayCards: string[] = [];
        let tvKanaleApiTrayCards: string[] = [];
        const length3 = await this.tvKanaleTrayRail.length;
        for (let i = 0; i < length3; i++) {
            tvKanaleTrayCards.push((await (await this.tvKanaleTrayRail[i]).getAttribute("aria-label")).trim());
        }
        tvKanaleApiTrayCards = await getApi.getOnkanaleTrayCards(0);
        if(!isMobile){
        for (let i = 0; i < tvKanaleApiTrayCards.length-3; i++) {
            await generic.wait(500);
            assertion.toEqual(tvKanaleTrayCards[i], tvKanaleApiTrayCards[i]);
        }
    }
    else{
        for (let i = 0; i < tvKanaleApiTrayCards.length-6; i++) {
            await generic.wait(500);
            assertion.toEqual(tvKanaleTrayCards[i], tvKanaleApiTrayCards[i]);
        }
    }
    }
    /*
     * Method to verify the titles of "On Kanale" tray cards.
     */
    async verifyOnKanaleTrayCards(isMobile: boolean) {
        await (await this.onKanaleTrayText).scrollIntoView();
        await generic.isDisplayed(this.onKanaleTrayText, "<--ON KANALE TRAY-->");
        const onKanaleTrayCards: string[] = [];
        let onKanaleApiTrayCards: string[] = [];
        const length3 = await this.onKanaleTrayRail.length;
        for (let i = 0; i < length3; i++) {
            onKanaleTrayCards.push(await (await this.onKanaleTrayRail[i]).getText());
        }
        onKanaleApiTrayCards = await getApi.getOnkanaleTrayCards(2);
        for (let i = 0; i < onKanaleApiTrayCards.length; i++) {
            await generic.wait(500);
            assertion.toEqual(onKanaleTrayCards[i], onKanaleApiTrayCards[i]);
        }
    }
}

export default new OnKanalePage();