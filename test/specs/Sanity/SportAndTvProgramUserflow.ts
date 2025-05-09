import generic from '@test/Utils/genericMethods'
import users from '@test/configData/Users.json';
import loginpage from "@test/pageobjects/Stv_Pages/login_page";
import sportProgramPage from '@test/pageobjects/Stv_Pages/sportAndTvProgram_page';

describe('Sport and Tv Program Page', () => {
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
      it(`Verify Sport and Tv program page user flow for ${userType}`, async () => {
        await loginpage.genericLogin(`${userType}`);
        await sportProgramPage.verifySportProgramTabClickable(isMobile);
        await sportProgramPage.verifyEventTabs(isMobile);
        await sportProgramPage.verifySportProgramPageScrollable();
        await generic.verifyFooterSectionOfThePage();
        await sportProgramPage.verifyTvProgramTabClickable(isMobile);
        await sportProgramPage.verifyEventTitles();
        await sportProgramPage.verifyTvProgramPageScrollable();
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
