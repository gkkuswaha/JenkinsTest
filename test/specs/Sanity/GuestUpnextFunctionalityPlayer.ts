import playerPage from '@test/pageobjects/Stv_Pages/player_Screen';
import searchPage from '@test/pageobjects/Stv_Pages/search_page';
import contentData from '@test/testdata/ContentData.json';
import generic from '@test/Utils/genericMethods';
import users from '@test/configData/Users.json';
const specificUserTypes = ['GuestUser'];

describe('Player Screen Guest user flow', () => {

    const filteredUsers = Object.keys(users).filter(userType => specificUserTypes.includes(userType));
    filteredUsers.forEach(userType => {
        describe(`${userType}`, () => {
            let platformName: string;
            let isMobile: boolean;
            beforeEach(async () => {
                await browser.url("/");
                platformName = (await browser.capabilities as any).platformName || '';
                isMobile = ['android', 'ios', 'Android', 'iOS'].includes(platformName);
                if (!isMobile) {
                    await browser.maximizeWindow();
                }
            });
            it(`UPNEXT feature validation for ${userType}`, async () => {
                await generic.acceptAllCookies();
                await searchPage.contentSearchFunctionality(contentData.upNextContent, isMobile);
                await playerPage.thumbnailPlayButton();
                await playerPage.waitForMultiPreRollAd();
                await playerPage.mousehoverToPlayerScreen(isMobile);
                await playerPage.pauseButtonFunctionality(isMobile);
                await playerPage.scrubFunctionalityBackward(isMobile);
                await playerPage.vedioTitleBeforNextUpFeature(isMobile);
                await playerPage.scrubFowardToNextUp(0.98, isMobile);
                await playerPage.playButtonFuctionality(isMobile);
                await playerPage.waitForMidRollAdToComplete(`${userType}`);
                await playerPage.forwardButtonClickUpnext(5, isMobile);
                await playerPage.upNext();
                await playerPage.nextUpToastBar();
                await generic.wait(12000);//just ten second wait for the completion of content to play the next content.
                await playerPage.thumbnailPlayButton();
                await playerPage.waitForsinglePreRollAd();
                await playerPage.waitForMultiPreRollAd();
                await playerPage.waitForsinglePreRollAd();
                await playerPage.mousehoverToPlayerScreen(isMobile);
                await playerPage.validationForNextUpFeature(isMobile);
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


