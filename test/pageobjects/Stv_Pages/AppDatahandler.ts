

class appDeletePage{

    get sidebarButton() {
        return $('//XCUIElementTypeButton[@name="SidebarButton"]')
    }

    get clearHistoryButton() {
        return $('//XCUIElementTypeButton[@name="ClearHistoryButton"]');
    }

    get deleteAllTime() {
        return $('//XCUIElementTypeButton[@name="All time"]');
    }

    get DoneButton() {
        return $('//XCUIElementTypeButton[@name="Done"]');
    }

    async deleteAllHistroyIosSafari() {
      await browser.pause(1000);
      await (await this.sidebarButton).click();
      await (await this.clearHistoryButton).click();
      await (await this.deleteAllTime).click();
      await (await this.DoneButton).click();
      await browser.pause(1000);
    }
    }


 

export default new appDeletePage();