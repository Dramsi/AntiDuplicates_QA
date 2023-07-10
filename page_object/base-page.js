export class BasePage {
    constructor(driver) {
        this.driver = driver;
    }
    async getToUrl(url) {
        await this.driver.get(url);
    }
    async refreshPage() {
        await this.driver.navigate().refresh();
    }
    async isElementPresent(by) {
        try {
            await this.driver.findElement(by);
            return true;
        } catch (NoSuchElementException) {
            return false;
        }
    }
}