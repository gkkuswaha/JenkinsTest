import validData from '@test/testdata/ValidationData.json';
import userCred from '@test/testdata/UserCredential.json';
import generic from '@test/Utils/genericMethods';
import assertion from '@test/Utils/assertions';
import profilePage from '@test/pageobjects/Stv_Pages/profile_page';
import { expect as expectChai } from 'chai';


class HomePage {

  initialSlideContent: string;

  get brandHeaderTab() {
    return $('//div[contains(@class,"item-center z")]')
  }
  get brandLinks() {
    return $$('//div[contains(@class,"mx-auto flex justify-center")]/descendant::a')
  }
  get stvLogo() {
    return $('(//*[contains(@class,"absolute left-0")])[2]');
  }
  get hambergerMenu() {
    return $('//*[contains(@class,"hidden items-center ")]');
  }
  get hambergerMenuItems() {
    return $$('//*[@id="sitecontainerportal"]/descendant::a');
  }
  get hambergerMenuCrossIcon() {
    return $('//*[@id="sitecontainerportal"]/descendant::button');
  }
  get homePageMajorTabs() {
    return $$('//*[contains(@class,"items-baselin")]/descendant::a');
  }
  get searchTextField() {
    return $('#search_field');
  }
  get newsLetterIcon() {
    return $('//*[contains(text(),"Newsletter Signup")]/parent::button');
  }
  get homeProfileIconBeforeLogin() {
    return $('//*[contains(@title,"Anmelden | Registrieren")]');
  }
  get darkSwitchButton() {
    return $('//*[contains(@id,"headlessui-switch") and @aria-checked="true"]');
  }
  get lightSwitchButton() {
    return $('//*[contains(@id,"headlessui-switch") and @aria-checked="false"]');
  }
  get homeProfileIconAfterlogin() {
    return $('//*[contains(@id,"headlessui-menu-button") and @aria-expanded="false"]');
  }
  get onkanaleTab() {
    return $('(//*[text()="TV-Kanäle"])[2]');
  }
  get tvLiveTab() {
    return $('//ul[contains(@class,"items-baselin")]/descendant::a[text()="Live TV"]')
  }
  get sportTab() {
    return $('//ul[contains(@class,"items-baselin")]/descendant::a[text()="Sport"]');
  }
  get mediathekTab() {
    return $('//ul[contains(@class,"items-baselin")]/descendant::a[text()="Sendungen"]');
  }
  get servusWeltLink() {
    return $('//h2[text()="Servus-Welt"]');
  }
  get sportProgramTab() {
    return $('//a[text()="Sport-Programm"]');
  }
  get tvProgramTab() {
    return $('//ul[contains(@class,"items-baselin")]/descendant::a[text()="TV-Programm"]');
  }
  get copyrighNoticeLink() {
    return $('//p/descendant::a[contains(text(),"ServusTV.com")]');
  }
  get footerSection() {
    return $('//*[contains(@class,"bg-footer")]');
  }
  get footerSectionHeaders() {
    return $$('//*[contains(@class,"bg-footer")]//h2');
  }
  footerSectionLinks(header: string) {

    return $$('//*[text()="' + header + '"]/following-sibling::*/descendant::a');
  }
  get aboBestellenHeader() {
    return $('//*[text()="Abo bestellen"]');
  }
  get aboBestellenImage() {
    return $('//*[contains(@class,"bg-footer")]/descendant::img');
  }
  get newsLetterFlex() {
    return $('//div[contains(@class,"flex flex-col items-center")]');
  }
  get newsLetterTitle() {
    return $('//span[text()="ServusTV On Newsletter"]');
  }
  get vornameTextfield() {
    return $('//span[text()="Vorname"]/following-sibling::input');
  }
  get nachnameTextfield() {
    return $('//span[text()="Nachname"]/following-sibling::input');
  }
  get newsletterEmailTextfield() {
    return $('//span[text()="E-Mail"]/following-sibling::input');
  }
  get newsCheckbox() {
    return $('//input[@type="checkbox" and @value="news"]');
  }
  get sportCheckbox() {
    return $('//input[@type="checkbox" and @value="sport"]');
  }
  get heimatCheckbox() {
    return $('//input[@type="checkbox" and @value="heimat"]');
  }
  get natureCheckbox() {
    return $('//input[@type="checkbox" and @value="nature"]');
  }
  get wissenCheckbox() {
    return $('//input[@type="checkbox" and @value="wissen"]');
  }
  get kulturCheckbox() {
    return $('//input[@type="checkbox" and @value="culture"]');
  }
  get showsCheckbox() {
    return $('//input[@type="checkbox" and @value="shows"]');
  }
  get newsletterRegisterNowButton() {
    return $('//button[@type="submit" and text()="Jetzt anmelden"]');
  }
  get registerSuccessfulText() {
    return $('//span[text()="Erfolgreich angemeldet"]');
  }
  get heroCarousel() {
    return $('//div[contains(@class,"from-hero-black ")]')
  }
  get heroBlockSliderRail() {
    return $('//div[contains(@class,"watch-progress hero-block slider-navigation")]')
  }
  get heroBlockSliderCardTitles() {
    return $$('//div[contains(@class,"hero-block slider")]/descendant::span[contains(@class,"leading")]')
  }
  get heroBlockSwiperNext() {
    return $('(//div[@class="swiper-button-next"])[2]')
  }
  get heroBlockSwiperPrevious() {
    return $('(//div[@class="swiper-button-prev"])[2]')
  }
  get activeSlideOnCarousel() {
    return $('(//div[contains(@class,"swiper-slide-thumb-active")]//span)[1]')
  }
  get activeSlidePlayButton() {
    return $('//div[contains(@class,"swiper-slide-thumb-active")]/descendant::div[contains(@class,"rounded-full")]')
  }
  get activeCradLabelOncarousel() {
    return $('//div[contains(@class, "from-hero-black ")]/descendant::span[contains(@class,"inline-block")]')
  }
  get activeCardLabel() {
    return $('//div[contains(@class,"swiper-slide-thumb-active")]/descendant::div[contains(@class,"flex-shrink items-center")]')
  }
  get jetztAnsehenButtonOncarousel() {
    return $('//div[contains(@class, "from-hero-black ")]/descendant::button')
  }
  get spielfilmeTray() {
    return $('//div[contains(@class,"headline-two m") and text()="Spielfilm-Highlights"]')
  }
  get firstCradInSpielfilmeTray() {
    return $('((//div[contains(@class,"headline-two m") and text()="Spielfilm-Highlights"]/parent :: div/following-sibling::div)[1]/descendant::div[1]/descendant::div/a[contains(@class,"absolute inset-0")])[1]')
  }
  get mWebForthCradInSpielfilmeTray() {
    return $('((//div[contains(@class,"headline-two m") and text()="Spielfilm-Highlights"]/parent :: div/following-sibling::div)[1]/descendant::div[1]/descendant::div/a[contains(@class,"absolute inset-0")])[2]')
  }
  get forthCradInSpielfilmeTray() {
    return $('((//div[contains(@class,"headline-two m") and text()="Spielfilm-Highlights"]/parent :: div/following-sibling::div)[1]/descendant::div[1]/descendant::div/a[contains(@class,"absolute inset-0")])[4]')
  }
  get nextSwiperButtonOnSpielfilmeTray() {
    return $('(//div[contains(@class,"headline") and text()="Spielfilm-Highlights"]/parent::div/following-sibling::div)[1]/descendant::div[@aria-label="Next slide" and @aria-disabled="false"]')
  }
  get previousSwiperButtonOnSpielfilmeTray() {
    return $('(//div[contains(@class,"headline") and text()="Spielfilm-Highlights"]/parent::div/following-sibling::div)[1]/descendant::div[@aria-label="Previous slide" and @aria-disabled="false"]')
  }
  get loginPopupTitle() {
    return $('//p[text()="Bitte einloggen"]')
  }
  get loginPopupDescription() {
    return $('//p[text()="Logge dich bitte ein, um Meine Liste setzen zu können."]')
  }
  get mWebMediathekTab() {
    return $('//ul[contains(@class,"flex items-center")]/descendant::a[text()="Sendungen"]');
  }
  get mWebTvProgramTab() {
    return $('//ul[contains(@class,"flex items-center")]/descendant::a[text()="TV-Programm"]');
  }
  get mWebTvLiveTab() {
    return $('//ul[contains(@class,"flex items-center")]/descendant::a[text()="Live TV"]');
  }
  get mWebSportTab() {
    return $('//ul[contains(@class,"flex items-center")]/descendant::a[text()="Sport"]');
  }
  get mWebSportProgramTab() {
    return $('//a[text()="Sport-Programm"]');
  }
  get mWebHambergerMenu() {
    return $('//button[contains(@id,"headlessui-disclosure-button") and @aria-expanded="false"]');
  }
  get mWebHambergerMenuCrossIcon() {
    return $('//button[contains(@id,"headlessui-disclosure-button") and @aria-expanded="true"]');
  }
  get onkanaelTabHanbergerMenu() {
    return $('//a[text()="On-Kanäle"]');
  }
  get mWebHeroCarousel() {
    return $('//div[contains(@class,"mobile-hero")]');
  }
  get mWebJetztAnsehenButtonOncarousel() {
    return $('(//div[@id="maincontentstart"]/descendant::button[text()="Jetzt Ansehen"])[2]');
  }
  get mWebTitleOncarousel() {
    return $('//div[contains(@class,"swiper-slide-visible")]/descendant::p');
  }
  get mWebLabelOncarousel() {
    return $('//div[contains(@class,"swiper-slide-visible")]/descendant::p/preceding-sibling::div');
  }
  get mWebHambergerMenuItems() {
    return $$('//div[@class="space-y-3 p-4"]/descendant::a');
  }
  get mWebSearchIcon() {
    return $('//button[@aria-label="Search"]');
  }
  get trayCard() {
    return $('//div[contains(@id,"swiper-wrapper-17")]/descendant::a[1]');
  }
  get mWebTvprogramChevronIcon() {
    return $('//div[@class="flex justify-between"]/descendant::a[text()="TV-Programm"]/following-sibling::button');
  }
  /*
   * Method to verify hero carousel before clicking on swiper buttons.
   */
  async verifyHeroCarouselBeforeClickingOnSwiperButtons(isMobile: boolean) {
    if (!isMobile) {
      await generic.isDisplayed(this.heroCarousel, "Hero carousel block")
      await generic.isDisplayed(this.heroBlockSliderRail, "Hero carousel slider rail")
      await generic.wait(2000);
      expect(await this.heroBlockSliderCardTitles.length).toBeGreaterThan(0);
      await (await this.heroBlockSwiperPrevious).waitForClickable();
      await generic.click(this.heroBlockSwiperPrevious, "Previous swiper button");
      this.initialSlideContent = await this.activeSlideOnCarousel.getText();
      await generic.isDisplayed(this.activeSlideOnCarousel, "Active card before clicking on next swiper button " + '"' + this.initialSlideContent + '"');
      await generic.isDisplayed(this.activeSlidePlayButton, "Play button on active card")
      await generic.isDisplayed(this.jetztAnsehenButtonOncarousel, "Jetzt Ansehen button on carousel")
      const carouselLabel = (await (await this.activeCradLabelOncarousel).getText()).trim();
      const cardLabel = (await (await this.activeCardLabel).getText()).trim();
      assertion.toEqual(carouselLabel, cardLabel);
    }
  }
  /*
  * Method to verify hero carousel after clicking on swiper buttons.
  */
  async verifyHeroCarouselAfterClickingOnSwiperButtons(isMobile: boolean) {
    if (!isMobile) {
      await (await this.heroBlockSwiperNext).waitForClickable();
      await generic.click(this.heroBlockSwiperNext, "Next swiper button");
      const newSlideContent = await this.activeSlideOnCarousel.getText();
      await generic.isDisplayed(this.activeSlideOnCarousel, "Active card after clicking on next swiper button " + '"' + newSlideContent + '"')
      await generic.isDisplayed(this.activeSlidePlayButton, "Play button on active card");
      await generic.isDisplayed(this.jetztAnsehenButtonOncarousel, "Jetzt Ansehen button on carousel");
      const carouselLabel1 = (await (await this.activeCradLabelOncarousel).getText()).trim();
      const cardLabel1 = (await (await this.activeCardLabel).getText()).trim();
      assertion.toEqual(carouselLabel1, cardLabel1);
      assertion.notEqual(this.initialSlideContent, newSlideContent);
      await (await this.heroBlockSwiperPrevious).waitForClickable();
      await generic.click(this.heroBlockSwiperPrevious, "Previous swiper button");
      const prevSlideContent = await this.activeSlideOnCarousel.getText();
      await generic.isDisplayed(this.activeSlideOnCarousel, "Active card after clicking on Back swiper button " + '"' + prevSlideContent + '"');
      const carouselLabel2 = (await (await this.activeCradLabelOncarousel).getText()).trim();
      const cardLabel2 = (await (await this.activeCardLabel).getText()).trim();
      assertion.toEqual(carouselLabel2, cardLabel2);
    }
  }
  /*
  * Method to scroll the homepage.
  */
  async verifyHomePageScrollable() {
    await generic.verifyPageIsScrollable("Home page");
  }
  /*
   * Method to verify brand headers on home page.
   */
  async verifyBrandHeadersOnHomePage(userType: string) {
    if (userType === "PremiumUser") {
    await (await this.brandHeaderTab).waitForDisplayed();
    await generic.click(this.brandHeaderTab, "Brand Header Tab");
    const brandLinksLength = await this.brandLinks.length;
    for (let i = 0; i < brandLinksLength; i++) {
      await generic.wait(500);
      const brandURl = await (await this.brandLinks[i]).getAttribute("href");
      const splitedBrandURl = brandURl.split(".");
      if (splitedBrandURl.length > 1) {
        if (splitedBrandURl[1].includes("servustv")) {
          const splitedBrandURl1 = brandURl.split("b");
          assertion.toContain(splitedBrandURl1[1], validData.brandLinks[1])
          driver.logUtil("INFO", "Brand name Displayed is " + splitedBrandURl1[1]);
        } else {
          assertion.toContain(splitedBrandURl[1], validData.brandLinks[i])
          driver.logUtil("INFO", "Brand name Displayed is " + splitedBrandURl[1]);
        }
      }
    }
  }
    await browser.refresh()
  }
  /*
   * Method to verify hamberger menu items in home page.
   */
  async verifyHambergerMenuItems(isMobile:boolean) {
    if(!isMobile){
    await generic.isDisplayed(this.hambergerMenu, "Hamberger menu icon")
    await generic.click(this.hambergerMenu, "Hamberger menu icon");
    const itemsLength = await this.hambergerMenuItems.length;
    for (let i = 1; i < itemsLength; i++) {
      if (await (await this.hambergerMenuItems[i]).isExisting()) {
        expectChai(await this.hambergerMenuItems[i].getText()).to.equal(validData.hambergerMenuItems[i])
        await driver.logUtil("PASS", validData.hambergerMenuItems[i] + " is displayed");
      } else {
        await driver.logUtil("FAIL", validData.hambergerMenuItems[i] + " is not displayed");
      }
    }
    await generic.click(this.hambergerMenuCrossIcon, "Hamberger menu cross icon");
  }
  else{
    await generic.isDisplayed(this.mWebHambergerMenu, "Hamberger menu icon");
    await (await this.mWebHambergerMenu).waitForClickable();
    await generic.click(this.mWebHambergerMenu, "Hamberger menu icon");
    const itemsLength = await this.mWebHambergerMenuItems.length;
    for (let i = 0; i < itemsLength; i++) {
      if (await (await this.mWebHambergerMenuItems[i]).isExisting()) {
        expectChai(await this.mWebHambergerMenuItems[i].getText()).to.equal(validData.mWebHambergerMenuItems[i])
        await driver.logUtil("PASS", validData.mWebHambergerMenuItems[i] + " is displayed");
      } else {
        await driver.logUtil("FAIL", validData.mWebHambergerMenuItems[i] + " is not displayed");
      }
    }
    await generic.click(this.mWebHambergerMenuCrossIcon, "Hamberger menu cross icon");
  }
  }
  /*
   * Method to verify major tabs in home page.
   */
  async verifyMajorTabsInHomePage(isMobile:boolean) {
    if(!isMobile){
    await generic.isDisplayed(this.tvLiveTab, "TV live tab");
    await generic.isDisplayed(this.sportTab, "Sport tab");
    await generic.isDisplayed(this.mediathekTab, "Sendungen tab");
    await generic.isDisplayed(this.tvProgramTab, "TV program tab");
    }
    else{
    await generic.isDisplayed(this.mWebTvLiveTab, "TV live tab");
    await generic.isDisplayed(this.mWebSportTab, "Sport tab");
    await generic.isDisplayed(this.mWebMediathekTab, "Sendungen tab");
    await generic.isDisplayed(this.mWebTvProgramTab, "Program tab");
    }

  }
  /*
   * Method to verify header section elements in home page.
   * @param userType
   */
  async verifyHeaderSectionOfHomepage(userType: string,isMobile:boolean) {
    await this.stvLogo.waitForDisplayed();
    await generic.isDisplayed(this.stvLogo, "STV Logo");
    if(isMobile){
      await generic.isDisplayed(this.mWebSearchIcon, "Search Icon");
    }
    else{
    await generic.isDisplayed(this.searchTextField, "Search text field");
    }
    await generic.isDisplayed(this.newsLetterIcon, "News letter icon");
    if (userType == "GuestUser") {
      await generic.isDisplayed(this.homeProfileIconBeforeLogin, "Profile icon");
    }
    else {
      await generic.isDisplayed(this.homeProfileIconAfterlogin, "Profile icon");
    }
    await (await this.darkSwitchButton).waitForDisplayed();
    await generic.isDisplayed(this.darkSwitchButton, "Dark switch button")
    await generic.click(this.darkSwitchButton, "Dark switch button");
    await (await this.lightSwitchButton).waitForClickable();
    await generic.isDisplayed(this.lightSwitchButton, "Light switch button");
    await generic.click(this.lightSwitchButton, "Light switch button");
  }
  /*
   * Method to verify behaviour of Spielfilme tray cards.
   */
  async verifySpielfilmeTray(isMobile:boolean) {
    await (await this.spielfilmeTray).scrollIntoView();
    await generic.isDisplayed(this.spielfilmeTray, "SpielfilmeTray");
    const firstCardBefore = await (await this.firstCradInSpielfilmeTray).getText();
    await generic.isDisplayed(this.firstCradInSpielfilmeTray, "First card before clicking on next swiper button " + '"' + firstCardBefore + '"');
    if (!isMobile) {
      await generic.click(this.nextSwiperButtonOnSpielfilmeTray, "Next swiper button");
    }
    else {
      // Scroll right (swipe left to see the next card)
      await browser.execute((element: HTMLElement) => {
        element.scrollLeft += 300;  
      }, this.trayCard as unknown as HTMLElement);
    }
    if(!isMobile){
    const forthCard = await (await this.forthCradInSpielfilmeTray).getText();
    await generic.isDisplayed(this.firstCradInSpielfilmeTray, "First card after clicking on next swiper button " + '"' + forthCard + '"');
    assertion.notEqual(firstCardBefore, forthCard);
    }else{
      const forthCard = await (await this.mWebForthCradInSpielfilmeTray).getText();
      await generic.isDisplayed(this.firstCradInSpielfilmeTray, "First card after clicking on next swiper button " + '"' + forthCard + '"');
      assertion.notEqual(firstCardBefore, forthCard);
    }
    if (!isMobile) {
      await generic.click(this.previousSwiperButtonOnSpielfilmeTray, "Previous swiper button");
    }
    else {
      // Scroll left (swipe right to see the previous card)
      await browser.execute((element: HTMLElement) => {
        element.scrollLeft -= 300;  
      }, this.trayCard as unknown as HTMLElement);
    }
    await generic.wait(1000);
    const firstCardAfter = await (await this.firstCradInSpielfilmeTray).getText();
    await generic.isDisplayed(this.firstCradInSpielfilmeTray, "First card after clicking on previous swiper button " + '"' + firstCardAfter + '"');
    assertion.toEqual(firstCardBefore, firstCardAfter);
  }
  /*
   * Method to verify the functionality of newsletter flex.
   */
  async verfiyFunctionalityOfNewsletterFlex() {
    await generic.wait(1000);
    await browser.execute((el) => {
      el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    }, await this.newsLetterFlex);
    await generic.isDisplayed(this.newsLetterFlex, "Newsletter Flex");
    await generic.isDisplayed(this.newsLetterTitle, "ServusTV On Newsletter text");
    await browser.execute((el) => {
      el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    }, await this.nachnameTextfield);
    await generic.isDisplayed(this.vornameTextfield, "Vorname text field");
    await generic.setvalue(this.vornameTextfield, userCred.newsLetter.firstName, "Vorname textfield");
    await generic.isDisplayed(this.nachnameTextfield, "Nachname textfield");
    await generic.setvalue(this.nachnameTextfield, userCred.newsLetter.lastName, "Nachname textfield");
    await generic.isDisplayed(this.newsletterEmailTextfield, "Email Id textfield");
    await generic.setvalue(this.newsletterEmailTextfield, userCred.newsLetter.emailId, "Email textfield");
    await browser.execute((el) => {
      el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    }, await this.newsletterRegisterNowButton);
    await generic.click(this.newsCheckbox, "News and Talks checkbox");
    await generic.click(this.heimatCheckbox, "Heimat checkbox");
    await generic.click(this.wissenCheckbox, "Wissen checkbox");
    await generic.click(this.showsCheckbox, "Spielfilme and shows checkbox");
    await generic.click(this.sportCheckbox, "Livesport and mehr checkbox");
    await generic.click(this.natureCheckbox, "Bergwelten and Natur checkbox");
    await generic.click(this.kulturCheckbox, "Kabarett and Kultur checkbox");
    await generic.click(this.newsletterRegisterNowButton, "Jetzt anmelden button")
    await (await this.registerSuccessfulText).waitForDisplayed();
    await generic.isDisplayed(this.registerSuccessfulText, "Registration successful popup");
  }
  /*
   * Method to verify please login popup for guest user.
   * @param userType
   */
  async verifyPleaseLoginPopup(userType: string) {
    if (userType == "GuestUser") {
      await (await profilePage.spielfilmeTrayTitle).waitForDisplayed();
      await (await profilePage.spielfilmeTrayTitle).scrollIntoView();
      await generic.isDisplayed(profilePage.firstContentCardOnSpielfilmeTray, "First Content Card Spielfilme Tray");
      await (await profilePage.addTofavoritenButton).waitForClickable();
      await generic.click(profilePage.addTofavoritenButton, "Add To favoriten Button on the first card");
      await this.loginPopupTitle.waitForDisplayed();
      await generic.isDisplayed(this.loginPopupTitle, "Please login text");
      await generic.isDisplayed(this.loginPopupDescription, "Please login to be able to set favourites text");
    }
  }
 /*
  * Method to verify auto swipe on hero carousel banner.
  */
  async verifyAutoSwipeOnHeroCarouselBanner(isMobile: boolean) {
    if (isMobile) {
      await generic.isDisplayed(this.mWebHeroCarousel, "Hero carousel block");
      await generic.isDisplayed(this.mWebJetztAnsehenButtonOncarousel, "Jetzt anmelden button")
      const label1= await this.mWebLabelOncarousel.getText();
      await generic.isDisplayed(this.mWebLabelOncarousel, `Label displayed on carousel before auto swipe ${label1}`);
      const title1= await this.mWebTitleOncarousel.getText();
      await generic.isDisplayed(this.mWebTitleOncarousel, `Title displayed on carousel before auto swipe ${title1}`);
      await generic.wait(5000);
      await generic.isDisplayed(this.mWebJetztAnsehenButtonOncarousel, "Jetzt anmelden button")
      const label2= await this.mWebLabelOncarousel.getText();
      await generic.isDisplayed(this.mWebLabelOncarousel, `Label displayed on carousel after auto swipe ${label2}`);
      const title2= await this.mWebTitleOncarousel.getText();
      await generic.isDisplayed(this.mWebTitleOncarousel, `Title displayed on carousel after auto swipe ${title2}`);
      assertion.notEqual(title1,title2);
    }
  }
}
export default new HomePage();