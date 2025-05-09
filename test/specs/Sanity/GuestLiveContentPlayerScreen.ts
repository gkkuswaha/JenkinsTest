import playerPage from '@test/pageobjects/Stv_Pages/player_Screen';
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
            it(`LIVE content player screen validation for ${userType}`, async () => {
                await generic.acceptAllCookies();
                await playerPage.liveContentSearch(isMobile);
                await playerPage.waitForMultiPreRollAd();
                await playerPage.mousehoverToPlayerScreenForMweb(isMobile);
                await playerPage.mousehoverToPlayerScreen(isMobile);
                await playerPage.PresenceOfStopButtonForLiveVideo(isMobile);
                await playerPage.mousehoverToPlayerScreenForMweb(isMobile);
                await playerPage.muteButtonFunctionality(isMobile);
                await playerPage.mousehoverToPlayerScreenForMweb(isMobile);
                await playerPage.unMuteButtonFunctionality();
                await playerPage.presenceOfLiveIcon();
                await playerPage.multiLanguageOptionForLiveVedio(isMobile);
                await playerPage.subTitleOptionForLiveVedio(isMobile);
                await playerPage.mousehoverToPlayerScreenForMweb(isMobile);
                await playerPage.SettingButtonfuncionalityAndOptionPresentForLive(isMobile);
                await playerPage.pipButtonfuctionality(isMobile);
                await playerPage.fullScreenButtonFunctionality();
                await playerPage.mousehoverToPlayerScreen(isMobile);
                await playerPage.mousehoverToPlayerScreenForMweb(isMobile);
                await playerPage.PresenceOfStopButtonOnFullscreenForLiveVideo(isMobile);
                await playerPage.muteButtonFunctionalityFullScreen(isMobile);
                await playerPage.mousehoverToPlayerScreenForMweb(isMobile);
                await playerPage.unMuteButtonFunctionalityFullscreen();
                await playerPage.presenceOfLiveIconOnFullScreen();
                await playerPage.mousehoverToPlayerScreenForMweb(isMobile);
                await playerPage.mousehoverToPlayerScreen(isMobile);
                if (!isMobile) {
                    await playerPage.SettingButtonfuncionalityAndOptionPresentForLive(isMobile);
                }
                await playerPage.presenceOfPiPButtonOnFullScreen(isMobile);
                await playerPage.fullscreenExitIconFunctionality();
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


