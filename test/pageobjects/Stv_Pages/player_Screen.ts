import homePage from "@test/pageobjects/Stv_Pages/home_page";
import generic from "@test/Utils/genericMethods";
import assertions from "@test/Utils/assertions";


export var thumbnailPlayButton, playerScreen, videoTitleOnPlayerScreen, seekBar, backWardButton, forwardButton,
  pauseButtonOnPlayerScreen, playButtonOnPlayerScreen, muteButton, settingButton, fullScreenButton, pipButton,
  videoControlTimer, currentVedioTimer, totalVedioTimer, adControl, qualityButton, speedButton, shareButton,
  giveFeedbackButton, closeMenuCrossIcon, seekBarHandle, favoritenButton, teilenButton, liveIcon, fullscreenExitIcon,
  unmuteButton, seekBarHandleknob, nextUPToastBar, crossIconOnupNextUpProgressBar, replayButtonOnPlayerScreen,
  videoTitleOnPlayerScreenAfterUpNext, videoTitleOnPlayerScreenBeforeReplay, adsCounterText, muteButtonFunctionalityFullScreens,
  unmuteButtonFunctionalityFullScreens, videoControlTimerfullscreen, currentVedioTimerFullScreen, totalVedioTimerfullScreen,
  backWardButtonFullScreen, forwardButtonFullScreen, videoTitleOnPlayerFullScreen, settingButtonFullScreen, pipButtonFullScreen
  , adsCounterTextLive, adsCounterTextMid, adsCounterText2, thumbnailPlayLiveAssetButton, stopButtonOnFullScreen, stopButton,
  crossIconSettingOptionMbew, multiLanguageForLive, subTitleOptionForLive

const browserName = (browser.capabilities as any).browserName;

class PlayerScreen {

  beforeUpnextContentTitleName: string;
  afterUpNextContentTitleNameMweb: string;
  beforeReplayContentTitleName: string;
  afterReplayContentTitleNameMweb: string;

  version = '9-5-1';

  get contentTitleBelowplayer() {
    return $('//h1[contains(@class,"text-xl font-bold text-black ")]');
  }
  get favoritenButton() {
    return $('//button[@aria-label="Favoriten"]');
  }
  get teilenButton() {
    return $('//button[@aria-label="Share"]');
  }
  get playerExtensionDOM() {
    return $('#rbupGfk_prod');
  }
  get descriptionBelowPlayer() {
    return $('(//p[@class="text-md opacity-75 dark:text-gray-light"])[1]');
  }
  get stvTagOverPlayerScreen() {
    return $('//li[@class="flex flex-shrink items-center"]')
  }
  get labelBelowPlayerScreen() {
    return $('(//h2[contains(@class,"mb-3 text-lg font-bold dark")])[1]/preceding-sibling::button')
  }
  get upNextTag() {
    return $('//span[text()="UP NEXT"]')
  }
  get thumbnailPlayButtonPlayer() {
    return $('//div[contains(@class,"flex flex-shrink-0 items-center justify-center rounded-full h")]')
  }
  get mwebLabelBelowPlayerScreen() {
    return $('(//span[contains(@class,"text-md normal-case")])[2]')
  }
  get mwebTeilenButton() {
    return $('(//button[@aria-label="Share"])[2]');
  }
  get mwebDescriptionBelowPlayer() {
    return $('(//p[contains(@class,"text-md opacity")])[2]');
  }
  /*
   * Method to play the vedio after search.
   */
  async thumbnailPlayButtonFunctionality() {
    const shadowHost = await $('rbup-video-stv'); // Replace with your shadow host selector
    thumbnailPlayButton = await shadowHost.shadow$(`cosmos-icon-play-${this.version}`); // Replace with your play button selector inside the shadow
    await thumbnailPlayButton.waitForExist({ timeout: 20000 });
    await generic.isDisplayed(thumbnailPlayButton, "thumbnail PlayButton")
    await generic.click(thumbnailPlayButton, "thumbnail PlayButton");
  }
  async thumbnailPlayButton() {
    try{
    await this.thumbnailPlayButtonPlayer.waitForDisplayed({ timeout: 15000 });
    await generic.isDisplayed(this.thumbnailPlayButtonPlayer, "thumbnail PlayButton")
    await generic.click(this.thumbnailPlayButtonPlayer, "thumbnail PlayButton");
    }
    catch(error){
      driver.logUtil("INFO", `Thumbnail play after replay is not present`);
    }
  }
  /*
   * Method to play the vedio after search for live content.
   */
  async thumbnailPlayButtonFunctionalityforLive() {
    const shadowHost = await $('rbup-video-stv'); // Replace with your shadow host selector
    thumbnailPlayLiveAssetButton = await shadowHost.shadow$(`cosmos-icon-play-${this.version}`); // Replace with your play button selector inside the shadow
    await thumbnailPlayLiveAssetButton.waitForDisplayed({ timeout: 20000 });
    await generic.isDisplayed(thumbnailPlayLiveAssetButton, "thumbnail PlayButton")
    await generic.click(thumbnailPlayLiveAssetButton, "thumbnail PlayButton");
  }
  async thumbnailPlayButtonforLive() {
    if(browserName =="safari"){
    await this.thumbnailPlayButtonPlayer.waitForDisplayed({ timeout: 20000 });
    await generic.isDisplayed(this.thumbnailPlayButtonPlayer, "thumbnail PlayButton")
    await generic.click(this.thumbnailPlayButtonPlayer, "thumbnail PlayButton");
    }else{
      await generic.wait(3000);
    }
  }
  /*
   * Method to mouse hover on the player screen.
   */
  async mousehoverToPlayerScreen(isMobile: boolean) {
    if (!isMobile) {
      await generic.wait(6000);
      const shadowHost = await $('rbup-video-stv');
      playerScreen = await shadowHost.shadow$('div');
      await playerScreen.waitForDisplayed({ timeout: 20000 });
      await generic.isDisplayed(playerScreen, "playerScreen")
      await (playerScreen).moveTo();
    }
  }
  async mousehoverToPlayer(isMobile: boolean) {
    if (!isMobile) {
      const shadowHost = await $('rbup-video-stv');
      playerScreen = await shadowHost.shadow$('div');
      await playerScreen.waitForDisplayed({ timeout: 20000 });
      await generic.isDisplayed(playerScreen, "playerScreen")
      await (playerScreen).moveTo();
    }
  }
  async mousehoverToPlayerScreenForMweb(isMobile: boolean) {
    if (isMobile) {
      await generic.wait(2000);
      const shadowHost = await $('rbup-video-stv');
      playerScreen = await shadowHost.shadow$('div');
      await playerScreen.waitForDisplayed({ timeout: 20000 });
      await generic.isDisplayed(playerScreen, "playerScreen")
      await (playerScreen).moveTo();
    }
  }
  /*
   * Method to check the functionality of pause button.
   */
  // 
  async pauseButtonFunctionality(isMobile: boolean) {
    const shadowHost = await $('rbup-video-stv');
    const maxRetries = 3; // Set the maximum number of retries
    let attempts = 0;
    let pauseButtonOnPlayerScreen;

    while (attempts < maxRetries) {
        try {
            if (!isMobile) {
                pauseButtonOnPlayerScreen = await shadowHost.shadow$$(`cosmos-icon-pause-${this.version}`);
                await pauseButtonOnPlayerScreen[1].waitForDisplayed({ timeout: 20000 });
                await generic.isDisplayed(pauseButtonOnPlayerScreen[1], "pause button on playerscreen");
                await generic.click(pauseButtonOnPlayerScreen[1], "pause button on playerscreen");
                await generic.wait(2000);
            } else {
                pauseButtonOnPlayerScreen = await shadowHost.shadow$(`cosmos-icon-pause-${this.version}`);
                await pauseButtonOnPlayerScreen.waitForDisplayed({ timeout: 20000 });
                await generic.isDisplayed(pauseButtonOnPlayerScreen, "pause button on playerscreen Mweb");
                await generic.click(pauseButtonOnPlayerScreen, "pause button on playerscreen Mweb");
            }
            // If everything is successful, break out of the loop
            break;
        } catch (error) {
            attempts++;
            if (attempts >= maxRetries) {
                throw new Error(`Failed to interact with pause button after ${maxRetries} attempts: ${error.message}`);
            }
            // Optionally, you can add a small delay before the next attempt
            await new Promise(resolve => setTimeout(resolve, 3000));
        }
    }
}
  /*
   * Method to check the functionality of play button.
   */
  async playButtonFuctionality(isMobile: boolean) {
    const shadowHost = await $('rbup-video-stv');
    if (!isMobile) {
      playButtonOnPlayerScreen = await shadowHost.shadow$$(`cosmos-button-${this.version} cosmos-icon-play-${this.version}`);
      await playButtonOnPlayerScreen[1].waitForDisplayed({ timeout: 10000 });
      await generic.isDisplayed(playButtonOnPlayerScreen[1], "play button on playerscreen");
      await generic.click(playButtonOnPlayerScreen[1], "play button on playerscreen");
    } else {
      playButtonOnPlayerScreen = await shadowHost.shadow$(`cosmos-icon-play-${this.version}`);
      await playButtonOnPlayerScreen.waitForDisplayed({ timeout: 10000 });
      await generic.isDisplayed(playButtonOnPlayerScreen, "play button on playerscreen Mweb");
      await generic.click(playButtonOnPlayerScreen, "play button on playerscreen Mweb");
    }
  }
  /*
   * Method to check the functionality of forward button.
   */
  async forwardButtonFunctionality(isMobile: boolean) {
    const shadowHost = await $('rbup-video-stv');
    if (!isMobile) {
      forwardButton = await shadowHost.shadow$$(`cosmos-icon-forward-10-${this.version}`);
      await forwardButton[1].waitForDisplayed({ timeout: 10000 });
      await generic.isDisplayed(forwardButton[1], "forwardButton On PlayerScreen");
      await generic.click(forwardButton[1], "forwardButton On PlayerScreen");
    } else {
      forwardButton = await shadowHost.shadow$(`cosmos-icon-forward-10-${this.version}`);
      await forwardButton.waitForDisplayed({ timeout: 10000 });
      await generic.isDisplayed(forwardButton, "forwardButton On PlayerScreen Mweb");
      await generic.click(forwardButton, "forwardButton On PlayerScreen Mweb");
    }
  }
  /*
   * Method to check the functionlaity of backword button.
   */
  async backwardButtonfunctionality(isMobile: boolean) {
    const shadowHost = await $('rbup-video-stv');
    if (!isMobile) {
      backWardButton = await shadowHost.shadow$$(`cosmos-icon-back-10-${this.version}`);
      await backWardButton[1].waitForDisplayed({ timeout: 10000 });
      await generic.isDisplayed(backWardButton[1], "backWard Button On PlayerScreen")
      await generic.click(backWardButton[1], "backWard Button On PlayerScreen");
    } else {
      backWardButton = await shadowHost.shadow$(`cosmos-icon-back-10-${this.version}`);
      await backWardButton.waitForDisplayed({ timeout: 10000 });
      await generic.isDisplayed(backWardButton, "backWard Button On PlayerScreen")
      await generic.click(backWardButton, "backWard Button On PlayerScreen");
    }
  }
  /*
   * Method to check the presence of live icon on player screen for live content.
   */
  async presenceOfLiveIcon() {
    const shadowHost = await $('rbup-video-stv');
    liveIcon = await shadowHost.shadow$(`cosmos-icon-live-${this.version}`);
    await liveIcon.waitForDisplayed({ timeout: 10000 });
    await generic.isDisplayed(liveIcon, "live Icon on default player screen")
  }
  /*
   * Method to check the presence of live icon on player screen for full screen.
   */
  async presenceOfLiveIconOnFullScreen() {
    const shadowHost = await $('rbup-video-stv');
    liveIcon = await shadowHost.shadow$(`cosmos-icon-live-${this.version}`);
    await liveIcon.waitForDisplayed({ timeout: 10000 });
    await generic.isDisplayed(liveIcon, "live Icon on Full Screen")
  }
  /*
   * Method to fetch the title and validate the title present on player screen with the title present below the screen.
   */
  async TitleOnPlayerScreen(isMobile: boolean) {
    if (!isMobile) {
      const shadowHost = await $('rbup-video-stv');
      videoTitleOnPlayerScreen = await shadowHost.shadow$(`cosmos-text-${this.version}`);
      await generic.isDisplayed(videoTitleOnPlayerScreen, "vedioTitleOnPlayerScreen")
      const titleName = await (videoTitleOnPlayerScreen).getText();
      console.log(titleName);
      await generic.isDisplayed(this.contentTitleBelowplayer, "contentTitleBelowplayer");
      const textBelowPlayer = await (await this.contentTitleBelowplayer).getText();
      console.log(textBelowPlayer);
      if (expect(titleName).toEqual(textBelowPlayer)) {
        driver.logUtil("INFO", "content name on the player and content name below the player matched");
        console.log("content name on the player and content name below the player matched");
      }
    }
  }
  /*
   * Method to check the presence of seekbar.
   */
  async seekBarFunctionality(isMobile: boolean) {
    const shadowHost = await $('rbup-video-stv');
    if (!isMobile) {
      seekBar = await shadowHost.shadow$$(`cosmos-tooltip-${this.version}`);
      await seekBar[1].waitForDisplayed({ timeout: 10000 });
      await generic.isDisplayed(seekBar[1], "seekBar")
    } else {
      seekBar = await shadowHost.shadow$(`cosmos-mode-${this.version} [class="controls__scrub-bar"]`);
      await seekBar.waitForDisplayed({ timeout: 10000 });
      await generic.isDisplayed(seekBar, "seekBar")
    }
  }
  /*
   * Method to check the functionality of mute button.
   */
  async muteButtonFunctionality(isMobile: boolean) {
    const shadowHost = await $('rbup-video-stv');
    muteButton = await shadowHost.shadow$(`cosmos-button-${this.version}[aria-label="Mute [m]"]`);
    await muteButton.waitForDisplayed({ timeout: 10000 });
    await generic.isDisplayed(muteButton, "muteButton");
    this.mousehoverToPlayerScreenForMweb(isMobile);
    await generic.click(muteButton, "muteButton");
    await generic.wait(2000);
  }
  /*
   * Method to check the functionality of ummute button.
   */
  async unMuteButtonFunctionality() {
    const shadowHost = await $('rbup-video-stv');
    unmuteButton = await shadowHost.shadow$(`cosmos-button-${this.version}[aria-label="Unmute [m]"]`);
    await unmuteButton.waitForDisplayed({ timeout: 10000 });
    await generic.isDisplayed(unmuteButton, "unmuteButton")
    await generic.click(unmuteButton, "unmuteButton");
  }
  /*
   * Method to fetch the total timing as well as current timming for the content.
   */
  async videoControlTimerFunctionality(isMobile: boolean) {
    const shadowHost = await $('rbup-video-stv');
    videoControlTimer = await shadowHost.shadow$('div.controls-time-display');
    await videoControlTimer.waitForDisplayed({ timeout: 10000 });
    await generic.isDisplayed(videoControlTimer, "videoControlTimer");

    currentVedioTimer = await shadowHost.shadow$$(`cosmos-text-${this.version}`);
    await currentVedioTimer[2].waitForDisplayed({ timeout: 10000 });
    await generic.isDisplayed(currentVedioTimer[2], "currentVedioTimer");
    const CurrentVedioPlayerTimer = await (currentVedioTimer[2]).getText();
    await driver.logUtil("INFO", "CurrentTiming: " + CurrentVedioPlayerTimer);
    if (!isMobile) {
      totalVedioTimer = await shadowHost.shadow$$(`cosmos-text-${this.version}`);
      await totalVedioTimer[4].waitForDisplayed({ timeout: 10000 });
      await generic.isDisplayed(totalVedioTimer[4], "totalVedioTimer")
      const totalVedioPlayerTimer = await (totalVedioTimer[4]).getText();
      await driver.logUtil("INFO", "TotalTiming: " + totalVedioPlayerTimer);
    }
  }
  /*
   * Method to check the presences of all option present in setting option.
   */
  async optionsPresentInSettingButtonfuncionality(isMobile: boolean) {
    const shadowHost = await $('rbup-video-stv');
    settingButton = await shadowHost.shadow$(`cosmos-button-${this.version}[aria-label=\"Settings\"]`);
    await settingButton.waitForDisplayed({ timeout: 10000 });
    await generic.isDisplayed(settingButton, "settingButton")
    await generic.click(settingButton, "settingButton");

    if (browserName !== 'safari') {
      qualityButton = await shadowHost.shadow$('button[data-rbup-menu-button=\"quality\"]');
      await qualityButton.waitForDisplayed({ timeout: 10000 });
      await generic.isDisplayed(qualityButton, "qualityButton")
    }
    speedButton = await shadowHost.shadow$('button[data-rbup-menu-button=\"speed\"]');
    await speedButton.waitForDisplayed({ timeout: 10000 });
    await generic.isDisplayed(speedButton, "speedButton");

    shareButton = await shadowHost.shadow$('button[data-rbup-menu-button=\"share\"]');
    await shareButton.waitForDisplayed({ timeout: 10000 });
    await generic.isDisplayed(shareButton, "shareButton")

    giveFeedbackButton = await shadowHost.shadow$('button[data-rbup-menu-button=\"feedback\"]');
    await giveFeedbackButton.waitForDisplayed({ timeout: 10000 });
    await generic.isDisplayed(giveFeedbackButton, "giveFeedbackButton")

    if (!isMobile) {
      await generic.click(settingButton, "settingButton");
    } else {
      crossIconSettingOptionMbew = await shadowHost.shadow$(`cosmos-button-${this.version}[aria-label=\"Close menu\"]`);
      await crossIconSettingOptionMbew.waitForDisplayed({ timeout: 10000 });
      await generic.isDisplayed(crossIconSettingOptionMbew, "cross Icon Setting Option");
      await generic.click(crossIconSettingOptionMbew, "cross Icon Setting Option");
    }
  }
  /*
   * Method to check the presences of all option present in setting option for live content. 
   */
  async SettingButtonfuncionalityAndOptionPresentForLive(isMobile: boolean) {
    const shadowHost = await $('rbup-video-stv');
    settingButton = await shadowHost.shadow$(`cosmos-button-${this.version}[aria-label=\"Settings\"]`);
    await settingButton.waitForDisplayed({ timeout: 10000 });
    await generic.isDisplayed(settingButton, "settingButton for live content")
    await generic.click(settingButton, "settingButton for live content");

    if (browserName !== 'safari') {
      qualityButton = await shadowHost.shadow$('button[data-rbup-menu-button=\"quality\"]');
      await qualityButton.waitForDisplayed({ timeout: 10000 });
      await generic.isDisplayed(qualityButton, "qualityButton for live content")
    }
    shareButton = await shadowHost.shadow$('button[data-rbup-menu-button=\"share\"]');
    await shareButton.waitForDisplayed({ timeout: 10000 });
    await generic.isDisplayed(shareButton, "shareButton for live content")

    giveFeedbackButton = await shadowHost.shadow$('button[data-rbup-menu-button=\"feedback\"]');
    await giveFeedbackButton.waitForDisplayed({ timeout: 10000 });
    await generic.isDisplayed(giveFeedbackButton, "giveFeedbackButton for live content")

    if (!isMobile) {
      await generic.click(settingButton, "settingButton");
    } else {
      crossIconSettingOptionMbew = await shadowHost.shadow$(`cosmos-button-${this.version}[aria-label=\"Close menu\"]`);
      await crossIconSettingOptionMbew.waitForDisplayed({ timeout: 10000 });
      await generic.isDisplayed(crossIconSettingOptionMbew, "cross Icon for Setting Option");
      await generic.click(crossIconSettingOptionMbew, "cross Icon for Setting Option");
      await generic.wait(2000);
    }
  }
  /*
   * Method to check the pip button functionality .
   */
  async pipButtonfuctionality(isMobile: boolean) {
    if (!isMobile) {
      if (browserName !== 'firefox') {
        const shadowHost = await $('rbup-video-stv');
        pipButton = await shadowHost.shadow$(`cosmos-button-${this.version}[aria-label=\"Picture In Picture\"]`);
        await pipButton.waitForDisplayed({ timeout: 10000 });
        await generic.isDisplayed(pipButton, "pipButton")
        await generic.click(pipButton, "pipButton");
        await generic.wait(1000);
        await (pipButton).click();
        await generic.wait(1000);
      } else {
        console.log("pipButtonfuctionality() method is not applicable for firefox because control are different in firefox for pip")
      }
    }
  }
  /*
   * Method to check the functionality of fullscreen button on fullScreen.
   */
  async fullScreenButtonFunctionality() {
    const shadowHost = await $('rbup-video-stv');
    fullScreenButton = await shadowHost.shadow$(`cosmos-button-${this.version}[aria-label=\"Enter Fullscreen [f]\"]`);
    await fullScreenButton.waitForDisplayed({ timeout: 10000 });
    await generic.isDisplayed(fullScreenButton, "fullScreenButton on default screen")
    await generic.click(fullScreenButton, "fullScreenButton on default screen");
  }
  /*
   * Method to check the presence of vedio title on fullscreen.
   */
  async vedioTitleOnFullScreen(isMobile: boolean) {
    const shadowHost = await $('rbup-video-stv');
    if (!isMobile) {
      videoTitleOnPlayerFullScreen = await shadowHost.shadow$(`cosmos-text-${this.version}`);
      await generic.isDisplayed(videoTitleOnPlayerFullScreen, "vedioTitleOnPlayerScreen")
      const titleName = await (videoTitleOnPlayerScreen).getText();
      console.log(titleName);
    }
  }
  /*
   * Method to check the backward button functionaliy on fullscreen.
   */
  async backwardButtonfunctionalityFullScreen(isMobile: boolean) {
    const shadowHost = await $('rbup-video-stv');
    if (!isMobile) {
      backWardButtonFullScreen = await shadowHost.shadow$$(`cosmos-icon-back-10-${this.version}`);
      await backWardButtonFullScreen[1].waitForDisplayed({ timeout: 10000 });
      await generic.isDisplayed(backWardButtonFullScreen[1], "backWardButton on Fullscreen")
      await generic.click(backWardButtonFullScreen[1], "backWardButton On FullScreen");
    } else {
      backWardButtonFullScreen = await shadowHost.shadow$(`cosmos-icon-back-10-${this.version}`);
      await backWardButtonFullScreen.waitForDisplayed({ timeout: 10000 });
      await generic.isDisplayed(backWardButtonFullScreen, "backWardButton on Fullscreen")
      await generic.click(backWardButtonFullScreen, "backWardButton On FullScreen");
    }
  }
  /*
   * Method to check the pause button functionality on fullscreen.
   */
  async pauseButtonFullScreenValidation(isMobile: boolean) {
    const shadowHost = await $('rbup-video-stv');
    if (!isMobile) {
      pauseButtonOnPlayerScreen = await shadowHost.shadow$$(`cosmos-button-${this.version} cosmos-icon-pause-${this.version}`);
      await pauseButtonOnPlayerScreen[1].waitForDisplayed({ timeout: 20000 });
      await generic.isDisplayed(pauseButtonOnPlayerScreen[1], "pause button on FullScreen")
      await generic.click(pauseButtonOnPlayerScreen[1], "pause button on FullScreen")
    } else {
      pauseButtonOnPlayerScreen = await shadowHost.shadow$(`cosmos-button-${this.version} cosmos-icon-pause-${this.version}`);
      await pauseButtonOnPlayerScreen.waitForDisplayed({ timeout: 20000 });
      await generic.isDisplayed(pauseButtonOnPlayerScreen, "pause button on FullScreen")
      await generic.click(pauseButtonOnPlayerScreen, "pause button on FullScreen")
    }
  }
  /*
   * Method to check the play button functionality on fullscreen.
   */
  async playButtonFuctionalityFullScreen(isMobile: boolean) {
    const shadowHost = await $('rbup-video-stv');
    if (!isMobile) {
      playButtonOnPlayerScreen = await shadowHost.shadow$$(`cosmos-button-${this.version} cosmos-icon-play-${this.version}`);
      await playButtonOnPlayerScreen[1].waitForDisplayed({ timeout: 10000 });
      await generic.isDisplayed(playButtonOnPlayerScreen[1], "play button on FullScreen");
      await generic.click(playButtonOnPlayerScreen[1], "play button on FullScreen");
    } else {
      playButtonOnPlayerScreen = await shadowHost.shadow$(`cosmos-button-${this.version} cosmos-icon-play-${this.version}`);
      await playButtonOnPlayerScreen.waitForDisplayed({ timeout: 10000 });
      await generic.isDisplayed(playButtonOnPlayerScreen, "play button on FullScreen");
      await generic.click(playButtonOnPlayerScreen, "play button on FullScreen");
    }
  }
  /*
   * Method to check the stop button for live video.
   */
  async PresenceOfStopButtonForLiveVideo(isMobile) {
    const shadowHost = await $('rbup-video-stv');
    if (!isMobile) {
      stopButton = await shadowHost.shadow$$(`cosmos-button-${this.version}[aria-label="Stop"]`);
      await stopButton[1].waitForDisplayed({ timeout: 20000 });
      await generic.isDisplayed(stopButton[1], "stop Button");
    } else {
      stopButton = await shadowHost.shadow$(`cosmos-button-${this.version}[aria-label="Stop"]`);
      await stopButton.waitForDisplayed({ timeout: 20000 });
      await generic.isDisplayed(stopButton, "stop Button");
    }
  }
  /*
   * Method to check the stop button on fullscreen.
   */
  async PresenceOfStopButtonOnFullscreenForLiveVideo(isMobile) {
    const shadowHost = await $('rbup-video-stv');
    if (!isMobile) {
      stopButtonOnFullScreen = await shadowHost.shadow$$(`cosmos-button-${this.version}[aria-label="Stop"]`);
      await stopButtonOnFullScreen[1].waitForDisplayed({ timeout: 20000 });
      await generic.isDisplayed(stopButtonOnFullScreen[1], "stop Button on fullscreen")
    } else {
      stopButtonOnFullScreen = await shadowHost.shadow$(`cosmos-button-${this.version}[aria-label="Stop"]`);
      await stopButtonOnFullScreen.waitForDisplayed({ timeout: 20000 });
      await generic.isDisplayed(stopButtonOnFullScreen, "stop Button on fullscreen")
    }
  }
  /*
   * Method to check the functionality of forwardButton on fullscreen.
   */
  async forwardButtonFunctionalityFullScreen(isMobile: boolean) {
    const shadowHost = await $('rbup-video-stv');
    if (!isMobile) {
      forwardButtonFullScreen = await shadowHost.shadow$$(`cosmos-icon-forward-10-${this.version}`);
      await forwardButtonFullScreen[1].waitForDisplayed({ timeout: 10000 });
      await generic.isDisplayed(forwardButtonFullScreen[1], "forwardButton On FullScreen");
      await generic.click(forwardButtonFullScreen[1], "forwardButton On FullScreen");
    } else {
      forwardButtonFullScreen = await shadowHost.shadow$(`cosmos-icon-forward-10-${this.version}`);
      await forwardButtonFullScreen.waitForDisplayed({ timeout: 10000 });
      await generic.isDisplayed(forwardButtonFullScreen, "forwardButton On FullScreen");
      await generic.click(forwardButtonFullScreen, "forwardButton On FullScreen");
    }
  }
  /*
   * Method to check the mute functionality on fullscreen.
   */
  async muteButtonFunctionalityFullScreen(isMobile: boolean) {
    const shadowHost = await $('rbup-video-stv');
    muteButtonFunctionalityFullScreens = await shadowHost.shadow$(`cosmos-button-${this.version}[aria-label="Mute [m]"]`);
    await muteButtonFunctionalityFullScreens.waitForDisplayed({ timeout: 10000 });
    await generic.isDisplayed(muteButtonFunctionalityFullScreens, "muteButton on FullScreen");
    this.mousehoverToPlayerScreenForMweb(isMobile);
    await generic.click(muteButtonFunctionalityFullScreens, "muteButton On FullScreen");
  }
  /*
   * Method to check the functionality of unmute button on fullscreen.
   */
  async unMuteButtonFunctionalityFullscreen() {
    const shadowHost = await $('rbup-video-stv');
    unmuteButtonFunctionalityFullScreens = await shadowHost.shadow$(`cosmos-button-${this.version}[aria-label="Unmute [m]"]`);
    await unmuteButtonFunctionalityFullScreens.waitForDisplayed({ timeout: 10000 });
    await generic.isDisplayed(muteButtonFunctionalityFullScreens, "unmuteButton on FullScreen");
    await generic.click(muteButtonFunctionalityFullScreens, "unmuteButton On FullScreen");
  }
  /*
   * Method to fetch the current vedio and total vedio timming on fullscreen.
   */
  async vedioControlTimerFunctionalityOnfullscreen(isMobile: boolean) {
    const shadowHost = await $('rbup-video-stv');
    videoControlTimerfullscreen = await shadowHost.shadow$('div.controls-time-display');
    await videoControlTimerfullscreen.waitForDisplayed({ timeout: 10000 });
    await generic.isDisplayed(videoControlTimerfullscreen, "videoControlTimer fullscreen");

    currentVedioTimerFullScreen = await shadowHost.shadow$$(`cosmos-text-${this.version}`);
    await currentVedioTimerFullScreen[2].waitForDisplayed({ timeout: 10000 });
    await generic.isDisplayed(currentVedioTimerFullScreen[2], "currentVedioTimer fullscreen");
    const CurrentVedioPlayerTimer = await (currentVedioTimerFullScreen[2]).getText();
    await driver.logUtil("INFO", "CurrentTiming: " + CurrentVedioPlayerTimer);
    if (!isMobile) {
      totalVedioTimerfullScreen = await shadowHost.shadow$$(`cosmos-text-${this.version}`);
      await totalVedioTimerfullScreen[4].waitForDisplayed({ timeout: 10000 });
      await generic.isDisplayed(totalVedioTimerfullScreen[4], "totalVedioTimer fullscreen")
      const totalVedioPlayerTimer = await (totalVedioTimerfullScreen[4]).getText();
      await driver.logUtil("INFO", "TotalTiming: " + totalVedioPlayerTimer);
    }
  }
  /*
   * Method to check presence of setting button on fullscreen.
   */
  async PresenceOfSettingButtonOnFullscreen() {
    const shadowHost = await $('rbup-video-stv');
    // settingButtonFullScreen = await shadowHost.shadow$$(`cosmos-button-${this.version}`);
    // await settingButtonFullScreen[7].waitForDisplayed({ timeout: 10000 });
    // await generic.isDisplayed(settingButtonFullScreen[7], "settingButton on fullscreen")
    settingButtonFullScreen = await shadowHost.shadow$(`cosmos-button-${this.version}[aria-label=\"Settings\"]`);
    await settingButtonFullScreen.waitForDisplayed({ timeout: 10000 });
    await generic.isDisplayed(settingButtonFullScreen, "settingButton on fullscreen")
  }
  /*
   * Method  to check presence of pip button on fullscreen.
   */
  async presenceOfPiPButtonOnFullScreen(isMobile: boolean) {
    if (!isMobile) {
      if (browserName !== 'firefox') {
        const shadowHost = await $('rbup-video-stv');
        pipButtonFullScreen = await shadowHost.shadow$(`cosmos-button-${this.version}[aria-label=\"Picture In Picture\"]`);
        await pipButtonFullScreen.waitForDisplayed({ timeout: 10000 });
        await generic.isDisplayed(pipButtonFullScreen, "pipButton button on fullscreen");
        await generic.wait(3000);
      }
    }
  }
  /*
   * Method for exit icon functionality from fullscreen. 
   */
  async fullscreenExitIconFunctionality() {
    const shadowHost = await $('rbup-video-stv');
    fullscreenExitIcon = await shadowHost.shadow$(`cosmos-button-${this.version}[aria-label="Leave Fullscreen [f]"]`);
    await fullscreenExitIcon.waitForDisplayed({ timeout: 20000 });
    await generic.isDisplayed(fullscreenExitIcon, "fullscreen exit icon");
    await generic.wait(1000);
    await generic.click(fullscreenExitIcon, "fullscreen exit icon");
    await generic.wait(2000);
  }

  /*
   * Method to check FavoritenButton is present below player.
   */
  async presenceOfFavoritenButtonBelowPlayerScreen() {
    await generic.isDisplayed(this.favoritenButton, "favoriten Button Below player");
  }

  /*
   * Method to check teilenButton is present below player.
   */
  async presenceOfTeilenButtonBelowPlayerScreen(isMobile: boolean) {
    if(!isMobile){
    await generic.isDisplayed(this.teilenButton, "teilen Button Below player");
    }
  }
  /*
   * Method to check the presence of upnext feature.
   */
  async nextUpToastBar() {
    const shadowHost = await $('rbup-video-stv');
    nextUPToastBar = await shadowHost.shadow$$(`div`);
    await nextUPToastBar[11].waitForDisplayed({ timeout: 25000 });
    await generic.isDisplayed(nextUPToastBar[11], "up Next Up ProgressBar")
  }

  /*
   * Method to check the presence of cross icon on upnext bar and click on it.
   */
  async crossIconOnupNextUpProgressBar() {
    const shadowHost = await $('rbup-video-stv');
    crossIconOnupNextUpProgressBar = await shadowHost.shadow$(`cosmos-button-${this.version}`);
    await crossIconOnupNextUpProgressBar.waitForDisplayed({ timeout: 30000 });
    await generic.isDisplayed(crossIconOnupNextUpProgressBar, "cross Icon OnupNext Up ProgressBar")
    await generic.click(crossIconOnupNextUpProgressBar, "cross Icon OnupNext Up ProgressBar");
    await generic.wait(3000);
  }

  /*
   * Method to check the presence of replay button funcitonlity.
   */
  async replayButtonOnPlayerScreen() {
    const shadowHost = await $('rbup-video-stv');
    replayButtonOnPlayerScreen = await shadowHost.shadow$(`cosmos-button-${this.version} cosmos-icon-replay-${this.version}`);
    await replayButtonOnPlayerScreen.waitForDisplayed({ timeout: 30000 });
    await generic.isDisplayed(replayButtonOnPlayerScreen, "replay Button On PlayerScreen")
    await generic.click(replayButtonOnPlayerScreen, "replay Button On PlayerScreen");
  }
  /*
   * Method to scrub the player to the starting time from the current timming.
   */
  async scrubFunctionalityBackward(isMobile: boolean) {
    if (!isMobile) {
      const shadowHost = await $('rbup-video-stv');
      currentVedioTimer = await shadowHost.shadow$$(`cosmos-text-${this.version}`);
      await currentVedioTimer[2].waitForDisplayed({ timeout: 10000 });
      const CurrentVedioPlayerTimer = await currentVedioTimer[2].getText();
      const currenttimeParts = CurrentVedioPlayerTimer.split(":");
      const currentminutes = parseInt(currenttimeParts[0]);
      const currentseconds = parseInt(currenttimeParts[1]);
      const currentTotalSeconds = currentminutes * 60 + currentseconds;

      //condition will apply once current timming of the player is >10 and <60 second
      if (currentTotalSeconds > 10 && currentTotalSeconds <= 60) {
        for (let i = 0; i < 6; i++) {
          await browser.keys(["ArrowRight"]);
          await generic.wait(1000); // Small pause to ensure the player registers each key press
        }
      }
      // otherwise it will scrub after converting all minutes in second and scrub every 10 sec as per press count.
      const skipDurationInMinutes = currentminutes;
      const secondsPerPress = 10;
      const totalSecondsToScrub = skipDurationInMinutes * 60;
      const pressesNeeded = totalSecondsToScrub / secondsPerPress;

      for (let i = 0; i < pressesNeeded; i++) {
        await browser.keys(["ArrowLeft"]);
        await generic.wait(1000); // Small pause to ensure the player registers each key press
      }
    } else {
      const shadowHost = await $('rbup-video-stv');
      currentVedioTimer = await shadowHost.shadow$$(`cosmos-text-${this.version}`);
      await currentVedioTimer[2].waitForDisplayed({ timeout: 10000 });
      const CurrentVedioPlayerTimer = await currentVedioTimer[2].getText();
      const currenttimeParts = CurrentVedioPlayerTimer.split(":");
      const currentminutes = parseInt(currenttimeParts[0]);
      const currentseconds = parseInt(currenttimeParts[1]);
      const currentTotalSeconds = currentminutes * 60 + currentseconds;

      //condition will apply once current timming of the player is >10 and <60 second
      if (currentTotalSeconds > 10 && currentTotalSeconds <= 30) {
        for (let i = 0; i <= 3; i++) {
          playerScreen = await shadowHost.shadow$('div');
          await (playerScreen).moveTo();
          forwardButtonFullScreen = await shadowHost.shadow$(`cosmos-icon-forward-10-${this.version}`);
          await forwardButtonFullScreen.click();
          await generic.wait(1000);
        }
      }
      if (currentTotalSeconds >= 40 && currentTotalSeconds <= 70) {
        for (let i = 0; i < 7; i++) {
          const shadowHost = await $('rbup-video-stv');
          playerScreen = await shadowHost.shadow$('div');
          await (playerScreen).moveTo();
          backWardButton = await shadowHost.shadow$(`cosmos-icon-back-10-${this.version}`);
          await backWardButton.click();
          await generic.wait(1000);
        }
      }
    }
  }

  /*
   * Method to scrub the player to 99 percent.
   */
  async scrubFowardToNextUp(percent: number, isMobile: boolean) {
    const shadowHost = await $('rbup-video-stv');
    let xOffset;
    if (!isMobile) {
      seekBar = await shadowHost.shadow$(`cosmos-tooltip-${this.version} [class="seek-bar"]`);
      await seekBar.waitForDisplayed({ timeout: 10000 });
      const scrubBarSize = await seekBar.getSize();
      xOffset = Math.floor(scrubBarSize.width * percent);
    } else {
      seekBar = await shadowHost.shadow$(`cosmos-mode-${this.version} [class="seek-bar__handle-container "]`);
      await seekBar.waitForDisplayed({ timeout: 10000 });
      const scrubBarSize = await seekBar.getSize();
      xOffset = Math.floor(scrubBarSize.width * percent);
    }
    seekBarHandleknob = await shadowHost.shadow$(`cosmos-tooltip-${this.version} .seek-bar-handle__knob`);
    await browser.execute(function(element) {
      element.style.pointerEvents = 'auto';
  }, seekBarHandleknob);
    await seekBarHandleknob.waitForDisplayed({ timeout: 10000 });
    await seekBarHandleknob.moveTo();
    await browser.action('pointer')
      .move({ origin: seekBarHandleknob })
      .down()
      .move({ origin: seekBarHandleknob, x: xOffset, y: 0 })
      .up()
      .perform();
    await generic.wait(2000);
    driver.logUtil("INFO", "Scrubbed the content");
  }
  /*
   * Method to verify upnext Tag on the thumbanail card 
   */
  async upNext() {
    await generic.isDisplayed(this.upNextTag, "up Next Tag on the thumbanail card")
  }
  /*
   * Method to fetch video title before upnext.
   */
  async vedioTitleBeforNextUpFeature(isMobile: boolean) {
    if (!isMobile) {
      const shadowHost = await $('rbup-video-stv');
      videoTitleOnPlayerScreen = await shadowHost.shadow$(`cosmos-text-${this.version}`);
      await videoTitleOnPlayerScreen.waitForDisplayed({ timeout: 15000 });
      this.beforeUpnextContentTitleName = await videoTitleOnPlayerScreen.getText();
      driver.logUtil("INFO", this.beforeUpnextContentTitleName);
    } else {
      await generic.isDisplayed(this.contentTitleBelowplayer, "content Title Below player Mweb");
      this.beforeUpnextContentTitleName = await (await this.contentTitleBelowplayer).getText();
      driver.logUtil("INFO", this.beforeUpnextContentTitleName);
    }
  }
  /*
   * Method to verify nextup functionality.
   */
  async validationForNextUpFeature(isMobile: boolean) {
    if (!isMobile) {
      const shadowHost = await $('rbup-video-stv');
      videoTitleOnPlayerScreenAfterUpNext = await shadowHost.shadow$(`cosmos-text-${this.version}`);
      await videoTitleOnPlayerScreenAfterUpNext.waitForDisplayed({ timeout: 10000 });
      await generic.isDisplayed(videoTitleOnPlayerScreenAfterUpNext, "videoTitleOnPlayerScreenAfterUpNext");
      const afterUpNextContentTitleName = await videoTitleOnPlayerScreenAfterUpNext.getText();
      assertions.notEqual(this.beforeUpnextContentTitleName, afterUpNextContentTitleName)
      driver.logUtil("PASS", "content changed because of Next up functionlatiy");
    } else {
      await generic.isDisplayed(this.contentTitleBelowplayer, "content Title Below player Mweb");
      this.afterUpNextContentTitleNameMweb = await (await this.contentTitleBelowplayer).getText();
      assertions.notEqual(this.beforeUpnextContentTitleName, this.afterUpNextContentTitleNameMweb)
      driver.logUtil("PASS", "content changed because of Next up functionlatiy");
    }
  }
  /*
   * Method to fetch video title before reply.
   */
  async videoTitleBeforeReplayFeature(isMobile: boolean) {
    if (!isMobile) {
      const shadowHost = await $('rbup-video-stv');
      videoTitleOnPlayerScreenBeforeReplay = await shadowHost.shadow$(`cosmos-text-${this.version}`);
      await videoTitleOnPlayerScreenBeforeReplay.waitForDisplayed({ timeout: 10000 });
      await generic.isDisplayed(videoTitleOnPlayerScreenBeforeReplay, "videoTitleOnPlayerScreenBeforeReplay");
      this.beforeReplayContentTitleName = await videoTitleOnPlayerScreenBeforeReplay.getText();
      driver.logUtil("INFO", this.beforeReplayContentTitleName);
    } else {
      await generic.isDisplayed(this.contentTitleBelowplayer, "content Title Below player Mweb");
      this.beforeReplayContentTitleName = await (await this.contentTitleBelowplayer).getText();
      driver.logUtil("INFO", this.beforeReplayContentTitleName);
    }
  }
  /*
   * Method to verify reply functionality.
   */
  async verificationForReplayFeature(isMobile: boolean) {
    if (!isMobile) {
      const shadowHost = await $('rbup-video-stv');
      const videoTitleOnPlayerScreenAfterReplay = await shadowHost.shadow$(`cosmos-text-${this.version}`);
      await videoTitleOnPlayerScreenAfterReplay.waitForDisplayed({ timeout: 10000 });
      await generic.isDisplayed($(videoTitleOnPlayerScreenAfterReplay), "videoTitleOnPlayerScreenAfterReplay");
      const afterReplayContentTitleName = await videoTitleOnPlayerScreenAfterReplay.getText();
      assertions.toEqual(this.beforeReplayContentTitleName, afterReplayContentTitleName)
      driver.logUtil("PASS", "content Replayed because of Replay functionality");
    } else {
      await generic.isDisplayed(this.contentTitleBelowplayer, "content Title Below player Mweb");
      this.afterReplayContentTitleNameMweb = await (await this.contentTitleBelowplayer).getText();
      assertions.toEqual(this.beforeReplayContentTitleName, this.afterReplayContentTitleNameMweb);
      driver.logUtil("PASS", "content Replayed because of Replay functionality");
    }
  }
  /*
   * Method to wait for preroll ads to complete for vod content.
   */
  async waitForsinglePreRollAd() {
    try {
      const shadowHost = await $('rbup-video-stv');
      adsCounterText = await shadowHost.shadow$(`div[class=\"ad-controls-time-display\"]`);
      await adsCounterText.waitForDisplayed({ timeout: 7000 });
      await generic.verticalScroll(100);
      const adText = await adsCounterText.getText();
      const excludedAds = ["Ad 1 of 2", "Ad 1 of 3","Ad 1 of 4", "Ad 1 of 5"];
      if (!excludedAds.includes(adText)) {
        const oneAdsTiming = adText.match(/\d+/);
        if (oneAdsTiming) {
          const oneAd = parseInt(oneAdsTiming[0], 10);
          const onlyOneAd = oneAd * 1000;
          driver.logUtil("INFO", "wait for single pre-roll ad to complete");
          await generic.wait(onlyOneAd + 2000);
        }
      }
    } catch (error) {
      driver.logUtil("INFO", `no single ads for the content at the begging`);
    }
  }

  async waitForMultiPreRollAd() {
    await generic.wait(3000);
    const excludedAds = ["Ad 1 of 2", "Ad 1 of 3", "Ad 1 of 4", "Ad 1 of 5"];
    try {
      const shadowHost = await $('rbup-video-stv');
      adsCounterText = await shadowHost.shadow$(`div[class=\"ad-controls-time-display\"]`);
      await adsCounterText.waitForDisplayed({ timeout: 10000 });
      await generic.verticalScroll(90);
      const text = await adsCounterText.getText();
      let parts = text.split(" · ");
      let result = parts[1];

      // Check for Ad 1 of 2
      if (result === "Ad 1 of 2") {
        const firstadstext = text.match(/\d+/);
        const firstads = parseInt(firstadstext[0], 10);
        const firstadtime = firstads * 1000;
        driver.logUtil("INFO", "Wait for first ads to complete.");

        await generic.wait(firstadtime + 2000);

        // Check for second ad
        adsCounterText2 = await shadowHost.shadow$(`div[class=\"ad-controls-time-display\"]`);
        await adsCounterText2.waitForDisplayed({ timeout: 5000 });
        const secondAdText = await adsCounterText2.getText();
        driver.logUtil("INFO", secondAdText);
        const secondAdtext = secondAdText.match(/\d+/);
        const secondAd = parseInt(secondAdtext[0], 10);
        const adSecondTime = secondAd * 1000;
        driver.logUtil("INFO", "Ads is playing");
        driver.logUtil("INFO", "Wait for second ads to complete.");
        await generic.wait(adSecondTime + 5000);

        // Check for Ad 1 of 3
      } else if (result === "Ad 1 of 3") {
        const firstadstext = text.match(/\d+/);
        const firstads = parseInt(firstadstext[0], 10);
        const firstadtime = firstads * 1000;
        driver.logUtil("INFO", "Wait for first ads to complete.");
        await generic.wait(firstadtime + 4000);

        // Loop for second and third ads
        for (let i = 2; i <= 3; i++) {
          adsCounterText = await shadowHost.shadow$(`div[class=\"ad-controls-time-display\"]`);
          await adsCounterText.waitForDisplayed({ timeout: 5000 });
          const nextAdText = await adsCounterText.getText();
          driver.logUtil("INFO", nextAdText);
          const nextAdtext = nextAdText.match(/\d+/);
          const nextAd = parseInt(nextAdtext[0], 10);
          const adNextTime = nextAd * 1000;
          driver.logUtil("INFO", `Wait for ad ${i} to complete.`);
          await generic.wait(adNextTime + 1000);
        }
      }
      // Check for Ad 1 of 4
      else if (result === "Ad 1 of 4") {
        const firstadstext = text.match(/\d+/);
        const firstads = parseInt(firstadstext[0], 10);
        const firstadtime = firstads * 1000;
        driver.logUtil("INFO", "Wait for first ads to complete.");
        await generic.wait(firstadtime + 2000);

        // Loop for second and fourth ads
        for (let i = 2; i <= 4; i++) {
          adsCounterText = await shadowHost.shadow$(`div[class=\"ad-controls-time-display\"]`);
          await adsCounterText.waitForDisplayed({ timeout: 5000 });
          const nextAdText = await adsCounterText.getText();
          driver.logUtil("INFO", nextAdText);
          const nextAdtext = nextAdText.match(/\d+/);
          const nextAd = parseInt(nextAdtext[0], 10);
          const adNextTime = nextAd * 1000;
          driver.logUtil("INFO", `Wait for ad ${i} to complete.`);
          await generic.wait(adNextTime + 2000);
        }
        // Check for Ad 1 of 5
      } else if (result === "Ad 1 of 5") {
        const firstadstext = text.match(/\d+/);
        const firstads = parseInt(firstadstext[0], 10);
        const firstadtime = firstads * 1000;
        driver.logUtil("INFO", "Wait for first ads to complete.");
        await generic.wait(firstadtime + 2000);
        // Loop for ads 2 to 5
        for (let i = 2; i <= 5; i++) {
          adsCounterText = await shadowHost.shadow$(`div[class=\"ad-controls-time-display\"]`);
          await adsCounterText.waitForDisplayed({ timeout: 5000 });
          const nextAdText = await adsCounterText.getText();
          const nextAdtext = nextAdText.match(/\d+/);
          const nextAd = parseInt(nextAdtext[0], 10);
          const adNextTime = nextAd * 1000;
          driver.logUtil("INFO", `Wait for ad ${i} to complete.`);
          await generic.wait(adNextTime + 1000);
        }
      } else if (!excludedAds.includes(text)) {
        const oneAdsTiming = text.match(/\d+/);
        if (oneAdsTiming) {
          const oneAd = parseInt(oneAdsTiming[0], 10);
          const onlyOneAd = oneAd * 1000;
          driver.logUtil("INFO", "wait for single pre-roll ad to complete");
          await generic.wait(onlyOneAd + 2000);
        }
      }
    }
    catch (error) {
      driver.logUtil("INFO", `no multiple ads for player`);
    }
  }

  /*
   * Method to wait for preroll ads to complete for live content.
   */
  async waitForLiveVideoPreRollAdToComplete(userType: string, isMobile: boolean) {
    await generic.wait(3000);
    await generic.verticalScroll(100);
    if (userType == "NonPremiumUser" || userType == "GuestUser") {
      const shadowHost = await $('rbup-video-stv');
      adsCounterTextLive = await shadowHost.shadow$(`div[class=\"ad-controls-time-display\"]`);
      await adsCounterTextLive.waitForDisplayed({ timeout: 20000 });
      const text = await adsCounterTextLive.getText();
      driver.logUtil("PASS", text);
      if (text.includes("Ad 1 of 2")) {
        const firstadstext = text.match(/\d+/);
        const firstads = parseInt(firstadstext[0], 10);
        const firstadtime = firstads * 1000;
        driver.logUtil("INFO", "Wait for first ads to complete.");
        if (!isMobile) {
          this.pauseButtonFullScreenValidation(isMobile);
          this.playButtonFuctionality(isMobile);
          this.muteButtonFunctionality(isMobile);
          this.unMuteButtonFunctionality();
        }
        await generic.wait(firstadtime + 2000);
        adsCounterText2 = await shadowHost.shadow$(`div[class=\"ad-controls-time-display\"]`);
        await adsCounterText2.waitForDisplayed({ timeout: 5000 });
        const secondAdText = await adsCounterText2.getText();
        driver.logUtil("INFO", secondAdText);
        const secondAdtext = secondAdText.match(/\d+/);
        const secondAd = parseInt(secondAdtext[0], 10);
        const adSecondTime = secondAd * 1000;
        driver.logUtil("INFO", "Ads is playing");
        driver.logUtil("INFO", "Wait for second ads to complete.");
        await generic.wait(adSecondTime + 6000);
      } else {
        const oneAdsTiming = text.match(/\d+/);
        const oneAd = parseInt(oneAdsTiming[0], 10);
        const onlyOneAd = oneAd * 1000;
        driver.logUtil("INFO", onlyOneAd);
        driver.logUtil("INFO", "Wait for ads to complete.");
        await generic.wait(onlyOneAd + 6000);
      }
    } else {
      driver.logUtil("INFO", "Ads are not present For premium User ");
    }
  }
  /*
   * Method to wait midroll ads to complete.
   */
  async waitForMidRollAdToComplete(userType: string) {
    if (userType == "NonPremiumUser" || userType == "GuestUser") {
      const excludedAds = ["Ad 1 of 2"];
    try {
      const shadowHost = await $('rbup-video-stv');
      adsCounterText = await shadowHost.shadow$(`div[class=\"ad-controls-time-display\"]`);
      await adsCounterText.waitForDisplayed({ timeout: 10000 });
      await generic.verticalScroll(90);
      const text = await adsCounterText.getText();
      let parts = text.split(" · ");
      let result = parts[1];

      // Check for Ad 1 of 2
      if (result === "Ad 1 of 2") {
        const firstadstext = text.match(/\d+/);
        const firstads = parseInt(firstadstext[0], 10);
        const firstadtime = firstads * 1000;
        driver.logUtil("INFO", "Wait for first midroll ads to complete.");

        await generic.wait(firstadtime + 2000);

        // Check for second ad
        adsCounterText2 = await shadowHost.shadow$(`div[class=\"ad-controls-time-display\"]`);
        await adsCounterText2.waitForDisplayed({ timeout: 5000 });
        const secondAdText = await adsCounterText2.getText();
        driver.logUtil("INFO", secondAdText);
        const secondAdtext = secondAdText.match(/\d+/);
        const secondAd = parseInt(secondAdtext[0], 10);
        const adSecondTime = secondAd * 1000;
        driver.logUtil("INFO", "Ads is playing");
        driver.logUtil("INFO", "Wait for second midroll ads to complete.");
        await generic.wait(adSecondTime + 2000);
        } else if (!excludedAds.includes(text)) {
        const oneAdsTiming = text.match(/\d+/);
        if (oneAdsTiming) {
          const oneAd = parseInt(oneAdsTiming[0], 10);
          const onlyOneAd = oneAd * 1000;
          driver.logUtil("INFO", "wait for midroll ad to complete");
          await generic.wait(onlyOneAd + 2000);
        }
      }
    }
    catch (error) {
      driver.logUtil("INFO", `no mid roll ads for player`);
    }
    } else {
      driver.logUtil("INFO", "Ads are not For Premium Users");
    }
  }
  /*
   * Method to click on forward arrow button using keyboard.
   */
  async forwardArrowButtonClick(numberOfPress, isMobile) {
    if (!isMobile) {
      for (let i = 0; i < numberOfPress; i++) {
        await browser.keys(["ArrowRight"]);
        await generic.wait(1000);
      }
    } else {
      for (let i = 0; i < numberOfPress; i++) {
        const shadowHost = await $('rbup-video-stv');
        forwardButtonFullScreen = await shadowHost.shadow$(`cosmos-icon-forward-10-${this.version}`);
        await forwardButtonFullScreen.waitForDisplayed({ timeout: 10000 });
        await forwardButtonFullScreen.click();
        await generic.wait(1000);
      }
    }
  }
  async forwardButtonClickUpnext(numberOfPress, isMobile) {
    if (!isMobile) {
      for (let i = 0; i < numberOfPress; i++) {
        await browser.keys(["ArrowRight"]);
        await generic.wait(1000);
      }
    } else {
      for (let i = 0; i < numberOfPress + 1; i++) {
        const shadowHost = await $('rbup-video-stv');
        forwardButtonFullScreen = await shadowHost.shadow$(`cosmos-icon-forward-10-${this.version}`);
        await forwardButtonFullScreen.waitForDisplayed({ timeout: 10000 });
        await forwardButtonFullScreen.click();
        await generic.wait(1000);
      }
    }
  }

  async liveContentSearch(isMoblie: boolean) {
    if (!isMoblie) {
      await generic.wait(4000);
      await generic.click(homePage.tvLiveTab, "Tv Live Tab");
      await generic.wait(7000);
    } else {
      await generic.wait(4000);
      await generic.click(homePage.mWebTvLiveTab, "On kanale link");
      await generic.wait(6000);
    }
  }
  async multiLanguageOptionForLiveVedio(isMobile: boolean) {
    try {  
    if (!isMobile) {
      const shadowHost = await $('rbup-video-stv');
      multiLanguageForLive = await shadowHost.shadow$(`cosmos-icon-multi-language-${this.version}`);
      await multiLanguageForLive.waitForDisplayed({ timeout: 5000 });
      await generic.isDisplayed(multiLanguageForLive, "multi Language option For Live Vedio");
    }
  }
 catch (error) {
  driver.logUtil("INFO","multiLanguage Option is not enabled for this live content");
 }  
}
  async subTitleOptionForLiveVedio(isMobile: boolean) {
    try {
      
    if (!isMobile) {
      const shadowHost = await $('rbup-video-stv');
      subTitleOptionForLive = await shadowHost.shadow$(`cosmos-icon-captions-${this.version}`);
      await subTitleOptionForLive.waitForDisplayed({ timeout: 5000 });
      await generic.isDisplayed(subTitleOptionForLive, "subTitle Option For Live Vedio");
    }
  } catch (error) {
    driver.logUtil("INFO","subTitle Option is not enabled for this live content");  
  }
  }

}
export default new PlayerScreen();