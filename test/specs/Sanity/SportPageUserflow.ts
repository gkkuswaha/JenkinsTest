import generic from '@test/Utils/genericMethods'
import users from '@test/configData/Users.json';
import loginpage from "@test/pageobjects/Stv_Pages/login_page";
import sportPage from '@test/pageobjects/Stv_Pages/sport_page';
import homePage from '@test/pageobjects/Stv_Pages/home_page';

describe('Sport Page', () => {
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
      it(`Verify Sport page user flow for ${userType}`, async () => {
        await loginpage.genericLogin(`${userType}`);
        await sportPage.verifySportPageSecondaryMenus(isMobile);
        await homePage.verifyHeroCarouselBeforeClickingOnSwiperButtons(isMobile);
        await homePage.verifyHeroCarouselAfterClickingOnSwiperButtons(isMobile);
        await homePage.verifyAutoSwipeOnHeroCarouselBanner(isMobile);
        await sportPage.verifyTopThemenTray(`${userType}`, isMobile);
        await sportPage.verifySportPageScrollable();
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
