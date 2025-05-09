import onkanalePage from '@test/pageobjects/Stv_Pages/onkanale_page';
import generic from '@test/Utils/genericMethods';
import loginPage from '@test/pageobjects/Stv_Pages/login_page';
import users from '@test/configData/Users.json';

describe('Onkanale Page', () => {
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
      it(`Verify On kanale page trays for ${userType}`, async () => {
        await loginPage.genericLogin(`${userType}`);
        await onkanalePage.verifyTvKanaleTrayCards(isMobile);
        await onkanalePage.verifyOnKanaleTrayCards(isMobile);
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

