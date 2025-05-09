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
            it(`REPLAY feature validation for ${userType}`, async () => {
                await generic.acceptAllCookies();
                await searchPage.contentSearchFunctionality(contentData.replayContent, isMobile);
                await playerPage.thumbnailPlayButton();
                await playerPage.waitForMultiPreRollAd();
                await playerPage.videoTitleBeforeReplayFeature(isMobile);
                await playerPage.mousehoverToPlayerScreen(isMobile);
                await playerPage.scrubFowardToNextUp(0.98, isMobile);
                await playerPage.waitForMultiPreRollAd();
                await playerPage.mousehoverToPlayer(isMobile);
                await playerPage.muteButtonFunctionality(isMobile);
                await playerPage.forwardArrowButtonClick(4, isMobile);
                await playerPage.nextUpToastBar();
                await playerPage.crossIconOnupNextUpProgressBar();
                await playerPage.replayButtonOnPlayerScreen();
                await playerPage.waitForMultiPreRollAd();
                await playerPage.mousehoverToPlayerScreen(isMobile);
                await playerPage.verificationForReplayFeature(isMobile);
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


