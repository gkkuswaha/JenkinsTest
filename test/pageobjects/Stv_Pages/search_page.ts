import generic from '@test/Utils/genericMethods';
import home_page from './home_page';

class SearchPage {

  get searchTextField() {
    return $('#search_field');
  }
  get searchIconMweb() {
    return $('//button[@aria-label="Search"]');
  }
  get firstSearchSuggestion() {
    return $('(//ul[@id="results-item"]/descendant:: button)[1]');
  }
  get WorldOfRedBullLiveSearchResult() {
    return $('(//ul[@id="results-archive"]/descendant::button[contains(@title,\'World of Red Bull\')])');
  }
  get searchIcon() {
    return $('//div[contains(@class,"items-center md:pointer-events-none")]');
  }
  get popularSearchText() {
    return $('//p[@class="mb-2 text-sm md:text-center"]');
  }
  get popularSearchSuggestions() {
    return $$('//div[contains(@class,"text-gray-medium block")]/descendant::li')
  }
  get unfortunateMsgText() {
    return $('//h2[text()="Leider konnten wir nichts finden"]')
  }
  get searchResultsuggetions() {
    return $('//ul[@id="results-item"]')
  }
  get firstArchivedResultSuggestion() {
    return $('//ul[@id="results-archive"]/li[1]');
  }
  /*
   * Method to click on the first searched suggestion.
   * @param VodContent
   */
  async contentSearchFunctionality(vodContent: string, isMobile: Boolean) {
    if (isMobile) {
      await generic.isDisplayed(this.searchIconMweb, "searchIcon for Mweb");
      await generic.click(this.searchIconMweb, "searchIcon for Mweb");
      await generic.wait(2000);
    }
    await generic.isDisplayed(this.searchTextField, "seachTextField");
    await generic.click(this.searchTextField, "searchTextfield");
    await generic.wait(1000);
    await (await this.searchTextField).setValue(vodContent);
    await generic.wait(1000);
    if(!(await this.firstSearchSuggestion).isDisplayed){
      await generic.click(this.searchTextField, "searchTextfield")
      await (await this.searchTextField).setValue(vodContent);
    }
    await (await this.firstSearchSuggestion).waitForDisplayed({ timeout: 10000, timeoutMsg: "first suggestion not displayed" });
    await generic.wait(2000);
    await generic.click(this.firstSearchSuggestion, "first suggestion");
    await generic.verticalScroll(400);
    await generic.wait(4000);
  }
  /*
   * Method to verify popular search suggestions.
   */
  async verifyPopularSearchSuggetions(isMobile:boolean) {
    if(!isMobile){
      await generic.isDisplayed(this.searchIcon, "search Icon");
    }
    else{
      await generic.isDisplayed(home_page.mWebSearchIcon, "Search Icon");
      await generic.click(home_page.mWebSearchIcon, "Search Icon");
    } 
    if(isMobile){
      if(!await (await this.searchTextField).isDisplayed()){
        await generic.click(home_page.mWebSearchIcon, "Search Icon");
      }
    }
    await generic.click(this.searchTextField, "searchTextField");
    await generic.isDisplayed(this.popularSearchText, "popular Search Text");
    const suggetionsLingth = await this.popularSearchSuggestions.length;
    for (let i = 0; i < suggetionsLingth; i++) {
      await generic.isDisplayed(this.popularSearchSuggestions[i], await (await this.popularSearchSuggestions[i]).getText());
    }

  }
  /*
   * Method to verify Unfortunately we could not find anything error message
   * @param invalidSearchText
   */
  async verifyNoResultsErrorMessage(invalidSearchText: string) {
    await generic.click(this.searchTextField, "searchTextField");
    await generic.setvalue(this.searchTextField, invalidSearchText, "Search text field");
    await (await this.unfortunateMsgText).waitForDisplayed();
    await generic.isDisplayed(this.unfortunateMsgText, "Unfortunately we could not find anything error message");
    await browser.refresh();
  }
  /*
   * Method to verify search suggestions for two character
   * @param twoChar
   */
  async verifySearchSuggetionsForTwoCharacter(twoChar: string) {
    await generic.click(this.searchTextField, "searchTextField");
    await generic.setvalue(this.searchTextField, twoChar, "Search text field");
    await (await this.searchResultsuggetions).waitForDisplayed();
    await generic.isDisplayed(this.searchResultsuggetions, "Search suggestions for two character");
    await (await this.searchTextField).clearValue();
  }
  /*
   * Method to verify search suggestions for single character
   * @param singleChar
   */
  async verifySearchSuggetionsForSingleCharacter(singleChar: string) {
    await generic.click(this.searchTextField, "searchTextField");
    await generic.setvalue(this.searchTextField, singleChar, "Search text field");
    if (this.popularSearchText) {
      await driver.logUtil("PASS", "Search suggestions not displayed");
    }
    else {
      await driver.logUtil("FAIL", "Search suggestions displayed");
    }
    await (await this.searchTextField).clearValue();
  }
  /*
   * Method to first search Archived Result suggestions 
   * @param content
   */
  async clickOnFirstSearchArchivedResultSuggestion(Content: string) {
    await generic.isDisplayed(this.searchIcon, "search Icon");
    await generic.isDisplayed(this.searchTextField, "seachTextField");
    await generic.click(this.searchTextField, "searchTextfield")
    generic.setvalue(this.searchTextField, Content, "Search text field")
    await (await this.firstArchivedResultSuggestion).waitForDisplayed({ timeout: 10000, timeoutMsg: "first suggestion not displayed" });
    await generic.click(this.firstArchivedResultSuggestion, "first suggestion");
  }

}
export default new SearchPage();
