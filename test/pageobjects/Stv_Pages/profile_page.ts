import vaidationData from '@test/testdata/ValidationData.json';
import homePage from '@test/pageobjects/Stv_Pages/home_page';
import assertion from '@test/Utils/assertions';
import generic from '@test/Utils/genericMethods';

class ProfilePage {
  get profileMenuEmailID() {
    return $('//*[@id="headlessui-menu-items-:r5:"]/descendant::small');
  }
  get einstellungenButton() {
    return $('//*[text()="Einstellungen" and @role="menuitem"]');
  }
  get einstellungenTitle() {
    return $('//h1[normalize-space()="Einstellungen"]');
  }
  get favoritenButton() {
    return $('//*[text()="Favoriten" and @role="menuitem"]');
  }
  get favoritenTitle() {
    return $('//h1[normalize-space()="Favoriten"]');
  }
  get weiterAnsehenTitle() {
    return $('//h1[normalize-space()="Weiter ansehen"]');
  }
  get allCardPresentInFavoriten() {
    return $$('//div[@class="card__wrapper"]');
  }
  get savedFavoritenIcon() {
    return $('(//div[contains(@class,"headline") and text()="Meine Liste"]/parent::div/following::div[contains(@class, "swiper-slide")])[1]/descendant::button');
  }
  get cardRemovedPopup() {
    return $('//div[@class="flex items-start"]/descendant::p[text()="Aus Meine Liste entfernt."]');
  }
  get spielfilmeTrayTitle() {
    return $('//div[contains(@class,"headline") and text()="Servus TV Originale"]')
  }
  get firstContentCardOnSpielfilmeTray() {
    return $('(//div[contains(@class,"headline") and text()="Servus TV Originale"]/parent::div/following::div[contains(@class, "swiper-slide")])[1]//a')
  }
  get meinefavoritenTray() {
    return $('//div[contains(@class,"headline") and text()="Meine Liste"]')
  }
  get firstContentCardOnMeinefavoritenTray() {
    return $('(//div[contains(@class,"headline") and text()="Meine Liste"]/parent::div/following::div[contains(@class, "swiper-slide")])[1]//a')
  }
  get addTofavoritenButton() {
    return $('(//div[contains(@class,"headline") and text()="Servus TV Originale"]/parent::div/following::div[contains(@class, "swiper-slide")])[1]/descendant::button')
  }
  get weiterAnsehenButton() {
    return $('//*[text()="Weiter Ansehen" and @role="menuitem"]');
  }
  get abonnementButton() {
    return $('//*[text()="Abonnements & Käufe" and @role="menuitem"]');
  }
  get logoutButton() {
    return $('//a[text()="Abmelden"]');
  }
  get cardTitleOnFavPage() {
    return $('//p[@class="card__title"]');
  }
  get emailIdValue() {
    return $('(//cosmos-text[@class="cosmos-text hydrated"])[1]');
  }
  get privacyPolicyLink() {
    return $('//a[text()="Datenschutzerklärung"]');
  }
  get stvLogoKonto() {
    return $('//img[@class="sidebar-nav__logo"]');
  }
  get newsletterProfilePage() {
    return $('//a[text()="Newsletter" and @role="menuitem"]');
  }
  get profileMenuItemPage() {
    return $('//ul[@id="headlessui-menu-items-:ri:"]');
  }
  /*
   * Method to verify Konto Einstellungen page navigation.
   */
  async verifyKontoEinstellungenPageNaviagtionFlow() {
    await driver.logUtil("INFO", "<-- Verify KnotoEinstellungen Page NaviagtionFlow -->");
    await generic.click(homePage.homeProfileIconAfterlogin, "Profile icon on home page");
    if (!(await this.profileMenuItemPage).isDisplayed) {
      await generic.click(homePage.homeProfileIconAfterlogin, "Profile icon on home page");
    }
    await (await this.einstellungenButton).waitForDisplayed();
    await generic.isDisplayed(this.einstellungenButton, "kontoEinstellungenLink");
    await (await this.einstellungenButton).waitForClickable();
    await generic.click(this.einstellungenButton, "kontoEinstellungenLink");
    await generic.wait(9000);
    const currentUrlkontoEinstellungen = await browser.getUrl();
    await driver.logUtil("INFO", currentUrlkontoEinstellungen);
    assertion.toContain(currentUrlkontoEinstellungen, vaidationData.profilePageUrl.Einstellungen);
    await (await this.stvLogoKonto).click();
    await generic.wait(2000);
    if (!(await homePage.homeProfileIconAfterlogin).isDisplayed) {
      await (await this.stvLogoKonto).click();
      await generic.wait(3000);
    }
  }
  /*
  * Method to verify Newsletter page navigation.
  */
  async verifyNewsletterPageflow() {
    await driver.logUtil("INFO", "<-- verify Newsletter Page navigatioflow -->");
    await generic.click(homePage.homeProfileIconAfterlogin, "Profile icon in home page");
    if (!(await this.profileMenuItemPage).isDisplayed) {
      await generic.click(homePage.homeProfileIconAfterlogin, "Profile icon on home page");
    }
    await (await this.newsletterProfilePage).waitForDisplayed();
    await generic.isDisplayed(this.newsletterProfilePage, "newsletter on ProfilePage");
    await generic.click(this.newsletterProfilePage, "newsletter on ProfilePage");
    const currentUrlnewsletter = await browser.getUrl();
    assertion.toContain(currentUrlnewsletter, vaidationData.profilePageUrl.Newsletter);
    await (await this.stvLogoKonto).click();
    await generic.wait(2000);
  }

  /*
   * Method to verify abonnement page navigation.
   */
  async verifyAbonnementPageflow() {
    await driver.logUtil("INFO", "<-- verify abonnement Page navigatioflow -->");
    await generic.click(homePage.homeProfileIconAfterlogin, "Profile icon in home page");
    await generic.wait(3000);
    if (!(await this.profileMenuItemPage).isDisplayed) {
      await generic.click(homePage.homeProfileIconAfterlogin, "Profile icon on home page");
    }
    await (await this.abonnementButton).waitForDisplayed();
    await generic.isDisplayed(this.abonnementButton, "abonnementButton");
    await generic.click(this.abonnementButton, "abonnementButton");
    await generic.wait(5000);
    const currentUrlabonnement = await browser.getUrl();
    assertion.toContain(currentUrlabonnement, vaidationData.profilePageUrl.Abonnement);
  }
  /*
   * Method to verify favoriten page navigation.
   */
  async verifyFavoritenPageNaviagationFlow() {
    await driver.logUtil("INFO", "<-- Verify Favoriten Page Naviagtion Flow -->");
    await generic.wait(5000);
    await browser.execute((el) => {
      el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    }, await this.spielfilmeTrayTitle);
    await generic.isDisplayed(this.spielfilmeTrayTitle, "Spielfilme Tray")
    await generic.isDisplayed(this.firstContentCardOnSpielfilmeTray, "First Content Card On Spielfilme Tray");
    const cardTitleOnSpielfilmeTray = await (await this.firstContentCardOnSpielfilmeTray).getAttribute("aria-label");
    await generic.isDisplayed(this.addTofavoritenButton, "Add To favoriten Button")
    await generic.click(this.addTofavoritenButton, "Add To favoriten Button on the first card");
    await generic.wait(6000);
    await (await this.meinefavoritenTray).scrollIntoView();
    await browser.execute((el) => {
      el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    }, await this.meinefavoritenTray);
    await generic.wait(2000);
    await generic.isDisplayed(this.meinefavoritenTray, "Meine favoriten Tray");
    await generic.isDisplayed(this.firstContentCardOnMeinefavoritenTray, "First Content Card On Meine Favoriten Tray");
    const cardTitleOnMeineFavoritenTray = await (await this.firstContentCardOnMeinefavoritenTray).getAttribute("aria-label");
    assertion.toEqual(cardTitleOnSpielfilmeTray, cardTitleOnMeineFavoritenTray);
    await generic.isDisplayed(this.savedFavoritenIcon, "Favoriten Icon present on added Card");
    await generic.wait(2000);
    await generic.click(this.savedFavoritenIcon, "Favoriten Icon present on added Card");
    await generic.wait(2000);
    if (await (await this.cardRemovedPopup).waitForDisplayed()) {
      await driver.logUtil("PASS", "User is able to add and remove the cards from My favourites");
    }
    else {
      await driver.logUtil("FAIL", "User is not able to add and remove the cards from My favourites");
    }
  }
  /*
   * Method to verify URL of favouriten page.
   */
}
export default new ProfilePage();