
import generic from '@test/Utils/genericMethods';
import mediathek from '@test/pageobjects/Stv_Pages/mediathek_page';
import users from '@test/configData/Users.json';
import loginpage from "@test/pageobjects/Stv_Pages/login_page";

describe('Mediathek Page', () => {
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
      it(`Verify mediathek page user flow for ${userType}`, async () => {
        await loginpage.genericLogin(`${userType}`);
        await mediathek.verifyMediatheSecondaryMenuTab(isMobile);
        await mediathek.verifyWissenAndNatureTray(isMobile);
        await mediathek.VerifyMediathekPageIsScrollable();
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
