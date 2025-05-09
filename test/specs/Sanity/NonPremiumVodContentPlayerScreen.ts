import playerPage from '@test/pageobjects/Stv_Pages/player_Screen';
import searchPage from '@test/pageobjects/Stv_Pages/search_page';
import loginPage from '@test/pageobjects/Stv_Pages/login_page';
import contentData from '@test/testdata/ContentData.json';
import generic from '@test/Utils/genericMethods';
import users from '@test/configData/Users.json';
const specificUserTypes = ['NonPremiumUser'];

describe('Player Screen Non premium user flow', () => {

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
            it(`VOD content player screen validation for ${userType}`, async () => {
                await loginPage.genericLogin(`${userType}`);
                await searchPage.contentSearchFunctionality(contentData.vodContentNonpremium, isMobile);
                await generic.wait(4000);
                await playerPage.thumbnailPlayButton();
                await playerPage.waitForMultiPreRollAd();
                await playerPage.waitForMultiPreRollAd();
                await playerPage.mousehoverToPlayerScreen(isMobile);
                await playerPage.pauseButtonFunctionality(isMobile);
                await playerPage.playButtonFuctionality(isMobile);
                await playerPage.forwardButtonFunctionality(isMobile);
                await playerPage.backwardButtonfunctionality(isMobile);
                await playerPage.TitleOnPlayerScreen(isMobile);
                await playerPage.seekBarFunctionality(isMobile);
                await playerPage.muteButtonFunctionality(isMobile);
                await playerPage.unMuteButtonFunctionality();
                await playerPage.videoControlTimerFunctionality(isMobile);
                await playerPage.optionsPresentInSettingButtonfuncionality(isMobile);
                await playerPage.pipButtonfuctionality(isMobile);
                await playerPage.fullScreenButtonFunctionality();
                await playerPage.vedioTitleOnFullScreen(isMobile);
                await playerPage.forwardButtonFunctionalityFullScreen(isMobile);
                await playerPage.mousehoverToPlayerScreenForMweb(isMobile);
                await playerPage.backwardButtonfunctionalityFullScreen(isMobile);
                await playerPage.pauseButtonFullScreenValidation(isMobile);
                await playerPage.playButtonFuctionalityFullScreen(isMobile);
                await playerPage.muteButtonFunctionalityFullScreen(isMobile);
                await playerPage.unMuteButtonFunctionalityFullscreen();
                await playerPage.vedioControlTimerFunctionalityOnfullscreen(isMobile);
                await playerPage.PresenceOfSettingButtonOnFullscreen();
                await playerPage.presenceOfPiPButtonOnFullScreen(isMobile);
                await playerPage.fullscreenExitIconFunctionality();
                await playerPage.presenceOfFavoritenButtonBelowPlayerScreen();
                await playerPage.presenceOfTeilenButtonBelowPlayerScreen(isMobile);
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


