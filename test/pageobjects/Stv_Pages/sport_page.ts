import generic from '@test/Utils/genericMethods';
import assertion from '@test/Utils/assertions';
import homePage from '@test/pageobjects/Stv_Pages/home_page';

class SportPage {

  get sportHomeSecondaryMenu() {
    return $('//*[text()="Sport Home"]');
  }
  get alleLivestreamsSecondaryMenu() {
    return $('//*[text()="Alle Livestreams"]');
  }
  get fussballSecondaryMenu() {
    return $('//*[text()="Fussball"]');
  }
  get motorsportSecondaryMenu() {
    return $('//*[text()="Motorsport"]');
  }
  get servusWinterSportSecondaryMenu() {
    return $('//a[contains(@class,"flex") and text()="Servus Wintersport"]');
  }
  get tennisSecondaryMenu() {
    return $('//*[text()="Tennis"]');
  }
  get mehrSportSecondaryMenu() {
    return $('//*[text()="Mehr Sport"]');
  }
  get servusRadsportSecondaryMenu() {
    return $('(//*[text()="Servus Radsport"])[1]');
  }
  get topThemenTray() {
    return $('//div[text()="Sport: Top-Themen"]');
  }
  get firstCradInTopThemenTray() {
    return $('((//div[text()="Sport: Top-Themen"]/parent::div/following-sibling::div)[1]/descendant::div[contains(@class,"absolute bottom")])[1]')
  }
  get thirdCradInTopThemenTray() {
    return $('((//div[text()="Sport: Top-Themen"]/parent::div/following-sibling::div)[1]/descendant::div[contains(@class,"absolute bottom")])[3]')
  }
  get forthCradInTopThemenTray() {
    return $('((//div[text()="Sport: Top-Themen"]/parent::div/following-sibling::div)[1]/descendant::div[contains(@class,"absolute bottom")])[4]')
  }
  get nextSwiperButtonOnTopThemenTray() {
    return $('(//div[text()="Sport: Top-Themen"]/parent::div/following-sibling::div)[1]/descendant::div[@aria-label="Next slide" and @aria-disabled="false"]')
  }
  get previousSwiperButtonOnTopThemenTray() {
    return $('(//div[text()="Sport: Top-Themen"]/parent::div/following-sibling::div)[1]/descendant::div[@aria-label="Previous slide" and @aria-disabled="false"]')
  }
  get mWebSportHomeSecondaryMenu() {
    return $('(//*[text()="Sport Home"])[2]');
  }
  get mWebAlleLivestreamsSecondaryMenu() {
    return $('(//*[text()="Alle Livestreams"])[2]');
  }
  get mWebFussballSecondaryMenu() {
    return $('(//*[text()="Fussball"])[2]');
  }
  get mWebMotorsportSecondaryMenu() {
    return $('(//*[text()="Motorsport"])[2]');
  }
  get mWebServusWintersportSecondaryMenu() {
    return $('(//a[text()="Servus Wintersport"])[2]');
  }
  get mWebTennisSecondaryMenu() {
    return $('(//*[text()="Tennis"])[2]');
  }
  get mWebMehrSportSecondaryMenu() {
    return $('(//*[text()="Mehr Sport"])[2]');
  }
  get mWebServusRadsportSecondaryMenu() {
    return $('(//*[text()="Servus Radsport"])[2]');
  }
  get trayCard() {
    return $('//div[contains(@id,"swiper-wrapper-f0")]/descendant::a');
  }

  /*
   * Method to verify secondary menu items in sport page.
   */
  async verifySportPageSecondaryMenus(isMobile: boolean) {
    if (!isMobile) {
      await (await homePage.sportTab).waitForDisplayed();
      await generic.isDisplayed(homePage.sportTab, "Sport Tab");
      await generic.click(homePage.sportTab, "Sport tab");
      await generic.isDisplayed(this.sportHomeSecondaryMenu, "Sport Home secondary menu");
      await generic.isDisplayed(this.alleLivestreamsSecondaryMenu, "Alle Live Streams secondary menu");
      await generic.isDisplayed(this.fussballSecondaryMenu, "Fussball secondary menu");
      await generic.isDisplayed(this.motorsportSecondaryMenu, "Motorsport secondary menu");
      await generic.isDisplayed(this.servusWinterSportSecondaryMenu, "Servus wintersport secondary menu");
      await generic.isDisplayed(this.tennisSecondaryMenu, "Tennis secondary menu");
      await generic.isDisplayed(this.servusRadsportSecondaryMenu, "Servus radsport secondary menu");
      await generic.isDisplayed(this.mehrSportSecondaryMenu, "Mehr Sport secondary menu");
    }
    else {
      await (await homePage.mWebSportTab).waitForClickable();
      await generic.isDisplayed(homePage.mWebSportTab, "Sport Tab");
      await generic.click(homePage.mWebSportTab, "Sport tab");
      await(await homePage.mWebHambergerMenu).waitForClickable();
      await generic.click(homePage.mWebHambergerMenu, "Hamberger Menu");
      await (await this.mWebSportHomeSecondaryMenu).waitForDisplayed();
      await generic.isDisplayed(this.mWebSportHomeSecondaryMenu, "Sport Home secondary menu");
      await generic.isDisplayed(this.mWebAlleLivestreamsSecondaryMenu, "Alle Live Streams secondary menu");
      await generic.isDisplayed(this.mWebFussballSecondaryMenu, "Fussball secondary menu");
      await generic.isDisplayed(this.mWebMotorsportSecondaryMenu, "Motorsport secondary menu");
      await generic.isDisplayed(this.mWebServusWintersportSecondaryMenu, "Servus wintersport secondary menu");
      await generic.isDisplayed(this.mWebTennisSecondaryMenu, "Tennis secondary menu");
      await generic.isDisplayed(this.mWebServusRadsportSecondaryMenu, "Servus radsport secondary menu");
      await generic.isDisplayed(this.mWebMehrSportSecondaryMenu, "Mehr Sport secondary menu");
      await generic.click(homePage.mWebHambergerMenuCrossIcon, "Hamberger menu cross icon");
    }
  }
  /*
  * Method to scroll the sport page.
  */
  async verifySportPageScrollable() {
    await generic.verifyPageIsScrollable("Sport page");
  }
  /*
   * Method to verify behaviour of Top-Themen tray cards.
   */
  async verifyTopThemenTray(userType: string, isMobile: boolean) {
    await (await this.topThemenTray).scrollIntoView();
    await generic.isDisplayed(this.topThemenTray, "Sport:Top-themen Tray");
    if (!isMobile) {
      const firstCardBefore = await (await this.firstCradInTopThemenTray).getText();
      await generic.isDisplayed(this.firstCradInTopThemenTray, "First card before clicking on next swiper button " + '"' + firstCardBefore + '"');
      await generic.click(this.nextSwiperButtonOnTopThemenTray, "Next swiper button");
      if (userType == "GuestUser") {
        const thirdCard = await (await this.thirdCradInTopThemenTray).getText();
        await generic.isDisplayed(this.thirdCradInTopThemenTray, "third card after clicking on next swiper button " + '"' + thirdCard + '"');
        assertion.notEqual(firstCardBefore, thirdCard);
      }
      else {
        const forthCard = await (await this.forthCradInTopThemenTray).getText();
        await generic.isDisplayed(this.forthCradInTopThemenTray, "First card after clicking on next swiper button " + '"' + forthCard + '"');
        assertion.notEqual(firstCardBefore, forthCard);
      }
      await generic.click(this.previousSwiperButtonOnTopThemenTray, "Previous swiper button");
      await (await this.firstCradInTopThemenTray).waitForStable();
      const firstCardAfter = await (await this.firstCradInTopThemenTray).getText();
      await generic.isDisplayed(this.firstCradInTopThemenTray, "First card after clicking on previous swiper button " + '"' + firstCardAfter + '"');
      assertion.toEqual(firstCardBefore, firstCardAfter);
    }
  }
}
export default new SportPage();