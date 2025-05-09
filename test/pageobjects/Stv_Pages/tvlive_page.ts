
import homePage from '@test/pageobjects/Stv_Pages/home_page';
import generic from '@test/Utils/genericMethods';
import playerScreen from '@test/pageobjects/Stv_Pages/player_Screen';
import vaidationData from '@test/testdata/ValidationData.json';
import assertion from '@test/Utils/assertions';

class TvlivePage {
  get empfohleneTrayTitle() {
    return $('//div[text()="Empfohlene Videos"]');
  }
  get descriptionBelowPlayer() {
    return $('//p[@class="mb-4"]');
  }
  get empfohleneVideoTrayTilte() {
    return $('(//div[text()="Empfohlene Videos"])[1]');
  }
  get empfohleneRail() {
    return $('//div[text()="Empfohlene Videos"]/parent::div/following::div[@class="swiper-slide swiper-slide-visible"]');
  }
  get guideCards() {
    return $$('//div[contains(@class,"block md:mt")]/descendant::div[contains(@class,"mb-1")]');
  }
  get mwebProgramButton() {
    return $('//button[text()="Programm"]');
  }
  get mwebEmpfohleneVideoTrayTilte() {
    return $('(//div[text()="Empfohlene Videos"])[2]');
  }
  /*
   * Method to verify URL of Tv live page.
   */
  async verifyTvliveTabClickable(isMobile: boolean) {
    if (!isMobile) {
      await generic.isDisplayed(homePage.tvLiveTab, "tvlive tab");
      await (await homePage.tvLiveTab).waitForClickable();
      await generic.click(homePage.tvLiveTab, "tvlive tab");
    }
    else {
      await generic.isDisplayed(homePage.mWebTvLiveTab, "tvlive tab");
      await (await homePage.mWebTvLiveTab).waitForClickable();
      await generic.click(homePage.mWebTvLiveTab, "tvlive tab");
    }
    await generic.wait(2000);
    const currentUrlTvLive = await browser.getUrl();
    assertion.toContain(currentUrlTvLive, vaidationData.tVLive.Url);
  }
  /*
   * Method to verify the TVlive contnet deatils and rails.
   */
  async verifyTvliveConentDetails(isMobile:boolean) {
    if(!isMobile){
    await generic.isDisplayed(playerScreen.labelBelowPlayerScreen, "Label below player");
    await generic.isDisplayed(playerScreen.teilenButton, "Teilen Button below player");
    await generic.isDisplayed(playerScreen.descriptionBelowPlayer, "Description Below Player");
    await generic.isDisplayed(this.empfohleneVideoTrayTilte, "Empfohlene Video Tray Tilte");
    await generic.isDisplayed(this.empfohleneRail, "empfohlene Rail");
    const guideCardsLength = await this.guideCards.length;
    if(guideCardsLength>0){
    driver.logUtil("INFO", `Number of guide cards displayed is ${guideCardsLength}`);
    }
    else{
      driver.logUtil("FAIL", "Guide cards are missing");
    }
  }
else{
  await generic.isDisplayed(playerScreen.mwebLabelBelowPlayerScreen, "Label below player");
  await generic.isDisplayed(playerScreen.mwebTeilenButton, "Teilen Button below player");
  await generic.isDisplayed(playerScreen.mwebDescriptionBelowPlayer, "Description Below Player");
  await generic.isDisplayed(this.mwebEmpfohleneVideoTrayTilte, "Empfohlene Video Tray Tilte");
  await generic.isDisplayed(this.empfohleneRail, "empfohlene Rail");
  await browser.execute((el) => {
    el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  }, await this.mwebProgramButton);
  await generic.click(this.mwebProgramButton,"program button");
  const guideCardsLength = await this.guideCards.length;
  if(guideCardsLength>0){
  driver.logUtil("INFO", `Number of guide cards displayed is ${guideCardsLength}`);
  }
  else{
    driver.logUtil("FAIL", "Guide cards are missing");
  }
}
  }
  /*
   * Method to scroll the TV-live page.
   */
  async verifyTvlivePageScrollable() {
    await generic.verifyPageIsScrollable("Tv-live page");
  }
}
export default new TvlivePage();