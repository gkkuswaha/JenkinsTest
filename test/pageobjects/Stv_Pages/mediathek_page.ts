import homePage from '@test/pageobjects/Stv_Pages/home_page.ts';
import assertion from '@test/Utils/assertions';
import generic from '@test/Utils/genericMethods';

class MediathekPage {

  get highlightsSecondaryMenu() {
    return $('(//*[text()=\'Highlights\'])[1]');
  }
  get aktuellesSecondaryMenuTab() {
    return $('(//*[text()=\'Aktuelles\'])[1]');
  }
  get sportSecondaryMenuTab() {
    return $('(//*[text()=\'Sport\'])[2]');
  }
  get naturSecondaryMenuTab() {
    return $('//*[text()=\'Natur\']');
  }
  get heimatSecondaryMenuTab() {
    return $('//*[text()=\'Heimat\']');
  }
  get unterhaltungSecondaryMenuTab() {
    return $('//*[text()=\'Unterhaltung\']');
  }
  get wissenSecondaryMenuTab() {
    return $('//*[text()=\'Wissen\']');
  }
  get kulturSecondaryMenuTab() {
    return $('//*[text()=\'Kultur\']');
  }
  get mediathekTray() {
    return $('//div[@id="maincontentstart"]/parent::div/descendant::h1');
  }
  get wissenAndnatureTray() {
    return $('//div[text()="Wissen & Natur"]')
  }
  get firstCradInWissenAndnatureTray() {
    return $('(//div[text()="Wissen & Natur"]/parent::div/following-sibling::div)[1]/descendant::a[1]')
  }
  get forthCradInWissenAndnatureTray() {
    return $('(//div[text()="Wissen & Natur"]/parent::div/following-sibling::div)[1]/descendant::a[4]')
  }
  get nextSwiperButtonOnWissenAndnatureTray() {
    return $('(//div[text()="Wissen & Natur"]/parent::div/following-sibling::div)[1]/descendant::div[@aria-label="Next slide" and @aria-disabled="false"]')
  }
  get previousSwiperButtonOnWissenAndnatureTray() {
    return $('(//div[text()="Wissen & Natur"]/parent::div/following-sibling::div)[1]/descendant::div[@aria-label="Previous slide" and @aria-disabled="false"]')
  }
  get mWebHighlightsSecondaryMenu() {
    return $('(//*[text()=\'Highlights\'])[2]');
  }
  get mWebAktuellesSecondaryMenuTab() {
    return $('(//*[text()=\'Aktuelles\'])[2]');
  }
  get mWebSportSecondaryMenuTab() {
    return $('(//*[text()=\'Sport\'])[4]');
  }
  get mWebNaturSecondaryMenuTab() {
    return $('(//*[text()=\'Natur\'])[2]');
  }
  get mWebHeimatSecondaryMenuTab() {
    return $('(//*[text()=\'Heimat\'])[2]');
  }
  get mWebUnterhaltungSecondaryMenuTab() {
    return $('(//*[text()=\'Unterhaltung\'])[2]');
  }
  get mWebWissenSecondaryMenuTab() {
    return $('(//*[text()=\'Wissen\'])[2]');
  }
  get mWebKulturSecondaryMenuTab() {
    return $('(//*[text()=\'Kultur\'])[2]');
  }
  get trayCard() {
    return $('//div[contains(@id,"swiper-wrapper-e")]');
  }

  /*
   * Method to verify secondary menu items.
   */
  async verifyMediatheSecondaryMenuTab(isMobile: boolean) {
    if (!isMobile) {
      await generic.isDisplayed(homePage.mediathekTab, "mediathekTab");
      await generic.click(homePage.mediathekTab, "mediathekTab");
      await (await this.highlightsSecondaryMenu).waitForDisplayed();
      await generic.isDisplayed(this.highlightsSecondaryMenu, "highlights SecondaryMenu");
      await generic.isDisplayed(this.aktuellesSecondaryMenuTab, "aktuelles SecondaryMenuTab");
      await generic.isDisplayed(this.sportSecondaryMenuTab, "sport SecondaryMenuTab");
      await generic.isDisplayed(this.naturSecondaryMenuTab, "natur SecondaryMenuTab");
      await generic.isDisplayed(this.heimatSecondaryMenuTab, "heimat SecondaryMenuTab");
      await generic.isDisplayed(this.unterhaltungSecondaryMenuTab, "unterhaltung SecondaryMenuTab");
      await generic.isDisplayed(this.wissenSecondaryMenuTab, "wissen SecondaryMenuTab");
      await generic.isDisplayed(this.kulturSecondaryMenuTab, "kultur SecondaryMenuTab");
    }
    else {
      await generic.isDisplayed(homePage.mWebMediathekTab, "mediathekTab");
      await generic.click(homePage.mWebMediathekTab, "mediathekTab");
      await (await homePage.mWebHambergerMenu).waitForClickable();
      await generic.click(homePage.mWebHambergerMenu, "Hamberger Menu");
      await (await this.mWebHighlightsSecondaryMenu).waitForDisplayed();
      await generic.isDisplayed(this.mWebHighlightsSecondaryMenu, "highlights SecondaryMenu");
      await generic.isDisplayed(this.mWebAktuellesSecondaryMenuTab, "aktuelles SecondaryMenuTab");
      await generic.isDisplayed(this.mWebSportSecondaryMenuTab, "sport SecondaryMenuTab");
      await generic.isDisplayed(this.mWebNaturSecondaryMenuTab, "natur SecondaryMenuTab");
      await generic.isDisplayed(this.mWebHeimatSecondaryMenuTab, "heimat SecondaryMenuTab");
      await generic.isDisplayed(this.mWebUnterhaltungSecondaryMenuTab, "unterhaltung SecondaryMenuTab");
      await generic.isDisplayed(this.mWebWissenSecondaryMenuTab, "wissen SecondaryMenuTab");
      await generic.isDisplayed(this.mWebKulturSecondaryMenuTab, "kultur SecondaryMenuTab");
      await generic.click(homePage.mWebHambergerMenuCrossIcon, "Hamberger menu cross icon");
    }

  }
  /*
  * Method to scroll the mediathek page.
  */
  async VerifyMediathekPageIsScrollable() {
    await generic.verifyPageIsScrollable("Mediathek page");
  }
  /*
   * Method to verify behaviour of Wissen and Nature tray cards.
   */

  async verifyWissenAndNatureTray(isMobile: boolean) {
    await (await this.wissenAndnatureTray).scrollIntoView();
    await generic.isDisplayed(this.wissenAndnatureTray, "Wissen and Nature Tray");
    const firstCardBefore = await (await this.firstCradInWissenAndnatureTray).getAttribute("aria-label");
    await generic.isDisplayed(this.firstCradInWissenAndnatureTray, "First card before clicking on next swiper button " + '"' + firstCardBefore + '"');
    if (!isMobile) {
      await generic.click(this.nextSwiperButtonOnWissenAndnatureTray, "Next swiper button");
      await generic.wait(2000);
    }
    else {
      // Scroll right (swipe left to see the next card)
      await browser.execute((element: HTMLElement) => {
        element.scrollLeft += 300;  
      }, this.trayCard as unknown as HTMLElement);
    }
    const forthCard = await (await this.forthCradInWissenAndnatureTray).getAttribute("aria-label");
    await generic.isDisplayed(this.firstCradInWissenAndnatureTray, "First card after clicking on next swiper button " + '"' + forthCard + '"');
    assertion.notEqual(firstCardBefore, forthCard);
    if (!isMobile) {
      await generic.click(this.previousSwiperButtonOnWissenAndnatureTray, "Previous swiper button");
      await generic.wait(2000);
    }
    else {
      // Scroll left (swipe right to see the previous card)
      await browser.execute((element: HTMLElement) => {
        element.scrollLeft -= 300;  
      }, this.trayCard as unknown as HTMLElement);
    }
    await (await this.firstCradInWissenAndnatureTray).waitForStable();
    const firstCardAfter = await (await this.firstCradInWissenAndnatureTray).getAttribute("aria-label");
    await generic.isDisplayed(this.firstCradInWissenAndnatureTray, "First card after clicking on previous swiper button " + '"' + firstCardAfter + '"');
    assertion.toEqual(firstCardBefore, firstCardAfter);
  }
}

export default new MediathekPage();
