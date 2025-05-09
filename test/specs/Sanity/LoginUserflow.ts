import LoginPage from '@test/pageobjects/Stv_Pages/login_page';
import logoutPage from '@test/pageobjects/Stv_Pages/logout_page';
import generic from '@test/Utils/genericMethods';
import users from '@test/configData/Users.json';
import login_page from '@test/pageobjects/Stv_Pages/login_page';
import profile_page from '@test/pageobjects/Stv_Pages/profile_page';
const specificUserTypes = ['PremiumUser', 'NonPremiumUser'];

describe('Login', () => {
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
            it(`Verify ${userType} is able to login through cookies banner and logout through profile page`, async () => {
                await generic.wait(2000);
                await generic.clickOnHierAnmeldenButtonInCookiesBanner();
                await LoginPage.enteringValidEmailId(`${userType}`);
                await LoginPage.enteringValidPassword(`${userType}`);
                await LoginPage.validatingEmailInSettingsPage(`${userType}`);
                await generic.click(profile_page.stvLogoKonto, "stvLogo");
                await generic.wait(2000);
                await logoutPage.verifyLogoutThroughProfile(`${userType}`);
            });
            // it(`Verify ${userType} is able to login through profile icon and logout through setting page`, async () => {
            //     await generic.acceptAllCookies();
            //     await generic.clickOnProfileIcon();
            //     await generic.isDisplayed(login_page.loginPage,"login page");
            //     await LoginPage.enteringValidEmailId(`${userType}`);
            //     await LoginPage.enteringValidPassword(`${userType}`);
            //     await LoginPage.validatingEmailInSettingsPage(`${userType}`);
            //     await logoutPage.verifyLogoutThroughSettings(`${userType}`);
            // });
            it(`Verify invalid password error message for ${userType}`, async () => {
                await generic.acceptAllCookies();
                await generic.clickOnProfileIcon();
                await LoginPage.enteringValidEmailid(`${userType}`);
                await LoginPage.enteringInvalidPassword();
                await LoginPage.validatingInvalidPasswordErrorMessage();
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


