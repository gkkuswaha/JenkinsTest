import homePage from '@test/pageobjects/Stv_Pages/home_page';
import generic from '@test/Utils/genericMethods';
import users from '@test/configData/Users.json';
import loginpage from "@test/pageobjects/Stv_Pages/login_page";
import searchPage from "@test/pageobjects/Stv_Pages/search_page";
import contentData from '@test/testdata/ContentData.json';

describe('Home Page', () => {
  Object.keys(users).forEach(userType => {
    describe(`${userType}`, () => {
      let platformName: string;
      let isMobile: boolean;
      beforeEach(async () => {
        await browser.url("/");
        platformName = (browser.capabilities as any).platformName || '';
        isMobile = ['android', 'ios', 'Android', 'iOS'].includes(platformName);
        if (!isMobile) {
          await browser.maximizeWindow();
        }
      });
      it(`Verify home page user flow for ${userType}`, async () => {
        await loginpage.genericLogin(`${userType}`);
        await homePage.verifyBrandHeadersOnHomePage(`${userType}`);
        await homePage.verifyHambergerMenuItems(isMobile);
        await homePage.verifyHeaderSectionOfHomepage(`${userType}`, isMobile);
        await homePage.verifyMajorTabsInHomePage(isMobile);
        await searchPage.verifyPopularSearchSuggetions(isMobile);
        await searchPage.verifySearchSuggetionsForSingleCharacter(contentData.singleCharcter);
        await searchPage.verifySearchSuggetionsForTwoCharacter(contentData.twoCharacter);
        await searchPage.verifyNoResultsErrorMessage(contentData.invalidSearchText);
        await homePage.verifyHeroCarouselBeforeClickingOnSwiperButtons(isMobile);
        await homePage.verifyHeroCarouselAfterClickingOnSwiperButtons(isMobile);
        await homePage.verifyAutoSwipeOnHeroCarouselBanner(isMobile);
        //await homePage.verfiyFunctionalityOfNewsletterFlex();
        await homePage.verifySpielfilmeTray(isMobile);
        await homePage.verifyHomePageScrollable();
        await homePage.verifyPleaseLoginPopup(`${userType}`);
        await generic.verifyFooterSectionOfThePage();
      });
      afterEach(async () => {
        await generic.wait(2000);
        if (platformName === "iOS") {
          await generic.clearSafariHistory(browser);
        }
        await browser.reloadSession();
      });
    });
  });
});
