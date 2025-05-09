
import CookiesBanner from '@test/pageobjects/Stv_Pages/cookies_Banner_page';
import generic from '@test/Utils/genericMethods';

describe('Cookies User Flow', () => {
    it('Verify one trust cookies banner', async () => {
        await browser.url("/");
        const platformName = (browser.capabilities as any).platformName || '';
        const isMobile = ['android', 'ios','Android','iOS'].includes(platformName);
        if (!isMobile) {
            await browser.maximizeWindow();
        }
        await CookiesBanner.verifyPresenceOfOnetrustGroupContainer();
        await CookiesBanner.verifyFunctionalityOfPersonalisierteWebungButton();
        await generic.deleteCookies();
        await CookiesBanner.verifyFunctionalityOfAlleAkzeptierenButton();
        await generic.deleteCookies();
        await CookiesBanner.verifyThefuntionalityOflisteUnsererPartner();
        await CookiesBanner.verifyFunctionalityOfHyperLinksTabPresentOnCookiesBanner();
        await CookiesBanner.verifyFunctionalityOfCookieSetting();
        await generic.deleteCookies();
        await CookiesBanner.verifyPresenceOfZumAboButton();
        if(platformName==="iOS"){
            await generic.clearSafariHistory(browser);
            }
    });

})