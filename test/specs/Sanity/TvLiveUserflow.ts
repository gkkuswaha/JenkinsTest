import generic from '@test/Utils/genericMethods'
import users from '@test/configData/Users.json';
import tvLivePage from "@test/pageobjects/Stv_Pages/tvlive_page";
import loginpage from "@test/pageobjects/Stv_Pages/login_page";

describe('Tv-Live Page', () => {
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
      it(`Verify Tv-Live page user flow for ${userType}`, async () => {
        await loginpage.genericLogin(`${userType}`);
        await tvLivePage.verifyTvliveTabClickable(isMobile);
        await tvLivePage.verifyTvliveConentDetails(isMobile);
        await tvLivePage.verifyTvlivePageScrollable();
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
