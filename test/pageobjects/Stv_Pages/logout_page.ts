import cookiesBanner from '@test/pageobjects/Stv_Pages/cookies_Banner_page';
import profilePage from '@test/pageobjects/Stv_Pages/profile_page';
import homePage from '@test/pageobjects/Stv_Pages/home_page';
import generic from '@test/Utils/genericMethods';

class LogoutPage {
  /*
   * Method to verify logout through profile.
   * @param userType
   */
  async verifyLogoutThroughProfile(userType: string) {
    await generic.wait(5000);
    await generic.click(homePage.homeProfileIconAfterlogin, "Profile icon in home page");
    await (await profilePage.logoutButton).waitForDisplayed();
    await generic.isDisplayed(profilePage.logoutButton, "Abmeleden button on profile page");
    await generic.click(profilePage.logoutButton, "Abmeleden button on profile page ");
    if (userType == "PremiumUser") {
      await (await cookiesBanner.onetrustGroupContainer).waitForDisplayed();
      await generic.isDisplayed(cookiesBanner.onetrustGroupContainer, "One trust cookies banner");
    }
    else {
      await generic.isDisplayed(homePage.homeProfileIconBeforeLogin, "Profile Icon Before login");
    }
  }
  /*
   * Method to verify logout through settings.
   * @param userType
   */
  async verifyLogoutThroughSettings(userType: string) {
    await generic.isDisplayed(profilePage.einstellungenTitle, "einstellungenTitle");
    await generic.click(profilePage.logoutButton, "Abmelden button on einstellungn page ");
    if (userType == "PremiumUser") {
      await (await cookiesBanner.onetrustGroupContainer).waitForDisplayed();
      await generic.isDisplayed(cookiesBanner.onetrustGroupContainer, "One trust cookies banner");
    }
    else {
      await generic.isDisplayed(homePage.homeProfileIconBeforeLogin, "Profile Icon Before login");
    }
  }
}
export default new LogoutPage();