import profilepage from "@test/pageobjects/Stv_Pages/profile_page";
import loginpage from "@test/pageobjects/Stv_Pages/login_page";
import generic from '@test/Utils/genericMethods';
import users from '@test/configData/Users.json';
const specificUserTypes = ['PremiumUser', 'NonPremiumUser'];

describe('Profile Page', () => {
  const filteredUsers = Object.keys(users).filter(userType => specificUserTypes.includes(userType));

  filteredUsers.forEach(userType => {
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
      it(`Verify the navigation of profile page options for ${userType}`, async () => {
        await loginpage.genericLogin(`${userType}`);
        await profilepage.verifyKontoEinstellungenPageNaviagtionFlow();
       // await profilepage.verifyNewsletterPageflow();
        await profilepage.verifyAbonnementPageflow();
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

