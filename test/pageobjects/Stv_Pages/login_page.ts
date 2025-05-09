
import homepage from '@test/pageobjects/Stv_Pages/home_page.ts';
import profilepage from '@test/pageobjects/Stv_Pages/profile_page.ts';
import CookiesBanner from '@test/pageobjects/Stv_Pages/cookies_Banner_page.ts';
import validData from '@test/testdata/ValidationData.json';
import generic from '@test/Utils/genericMethods';
import users from '@test/configData/Users.json';
import userCred from '@test/testdata/UserCredential.json';
import assertion from '@test/Utils/assertions';

class LoginPage {

  get loginPage() {
    return $('//main[@class="_widget login"]');
  }
  get emailTextField() {
    return $('//*[@id="username" and @inputmode="email"]');
  }
  get weiterCTA() {
    return $('//*[@type="submit" and text()="Weiter"]');
  }
  get disabledWeiterCTA() {
    return $('//*[@disabled]');
  }
  get passwordTextField() {
    return $('//*[@id="password" and @type="password"]');
  }
  get anmeldenCTA() {
    return $('//*[@type="submit" and text()="Anmelden"]');
  }
  get errorElementPassword() {
    return $('//span[@id="error-element-password"]');
  }

  /*
   * Method to login without validating email in settings page.
   * @param userType
   */
  async genericLogin(userType: string) {
    if (userType === "GuestUser") {
      await generic.acceptAllCookies();
    }
    else {
      await generic.acceptAllCookies();
      await generic.clickOnProfileIcon();
      await generic.isDisplayed(this.loginPage, "Login page")
      await generic.setvalue(this.emailTextField, users[userType].email, "Email-ID text field");
      await generic.setvalue(this.passwordTextField, users[userType].password, "Password text field");
      await generic.click(this.anmeldenCTA, "Login Button");
      await generic.wait(3000);
      if (await this.weiterCTA.isDisplayed()) {
        await generic.click(this.weiterCTA, "Weiter(Further) button");
      }
      await generic.wait(5000);
    }
  }
  /*
   * Method to enter email id and click on further button.
   * @param userType
   */
  async enteringValidEmailId(userType: string) {
    await generic.setvalue(this.emailTextField, users[userType].email, "Email-ID text field");
    await generic.wait(3000);
  }
  /*
   * Method to enter password and click on login button.
   * @param userType
   */
  async enteringValidPassword(userType: string) {
    await generic.setvalue(this.passwordTextField, users[userType].password, "Password text field");
    await generic.click(this.anmeldenCTA, "Login Button");
    await generic.wait(2000);
    if (await this.weiterCTA.isDisplayed()) {
      await generic.click(this.weiterCTA, "Weiter(Further) button");
    }
  }
  /*
   * Method to validate email id on setting page.
   * @param userType
   */
  async validatingEmailInSettingsPage(userType: string) {
    await generic.wait(5000);
    if (userType == "NonPremiumUser") {
      await generic.wait(4000);
      if (await (await CookiesBanner.onetrustGroupContainer).isDisplayed()) {
        await generic.click(CookiesBanner.alleAkzeptierenButton, "alleAkzeptieren(Accept All) button");
        await generic.wait(3000);
      }
    }
    await (await homepage.homeProfileIconAfterlogin).waitForDisplayed();
    await generic.click(homepage.homeProfileIconAfterlogin, "Profile icon in home page");
    await (await profilepage.einstellungenButton).waitForDisplayed();
    await generic.wait(2000);
    await generic.click(profilepage.einstellungenButton, "Konto-Einstellungen(settings) link");
    await (await profilepage.emailIdValue).waitForDisplayed();
    await generic.wait(2000);
    const settingsPageEmail = await (await profilepage.emailIdValue).getText();
    assertion.toEqual(settingsPageEmail, users[userType].email);
    //await generic.kontoPageCookies();
    await generic.wait(3000);
  }
  /*
   * Method to enter valid email id into email text field.
   */
  async enteringValidEmailid(userType: string) {
    const randomEmail = `testuser${Date.now()}${Math.floor(Math.random() * 1)}@mailinator.com`;
    await generic.setvalue(this.emailTextField, randomEmail, "Email-ID text field");
  }
  /*
   * Method to enter valid email id and invalid password.
   */
  async enteringInvalidPassword() {
    await generic.wait(2000);
    await generic.setvalue(this.passwordTextField, userCred.inValid.password, "Password text field");
    await generic.click(this.anmeldenCTA, "Login Button");
  }
  /*
   * Method to validate invalid password error message.
   */
  async validatingInvalidPasswordErrorMessage() {
    await (await this.errorElementPassword).waitForDisplayed();
    await generic.isDisplayed(this.errorElementPassword, "Invalid Password error message")
    const error = await (await this.errorElementPassword).getText();
    assertion.toContain(error, validData.loginErrorMsg)
  }

}
export default new LoginPage();