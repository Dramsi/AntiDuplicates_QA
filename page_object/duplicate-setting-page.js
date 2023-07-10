import {constants, locators} from "../resources/resources.js";
import {assert} from "chai";

export class DuplicateSettingsPage {
    constructor(driver) {
        this.driver = driver;
    }
    async setMessage(message) {
        await this.driver.findElement(locators.settingPage.textFormatSelect).click();
        await this.driver.findElement(locators.settingPage.restrictedHtmlItem).click();
        await this.driver.findElement(locators.settingPage.messageField).clear();
        await this.driver.findElement(locators.settingPage.messageField).sendKeys(message);
        await this.driver.findElement(locators.settingPage.submitButton).click();
    }
    async setDisableFormCheckbox(expectedCheckStatus) {
        let actualCheckStatus = await this.driver.findElement(locators.settingPage.disableFormCheckbox).getAttribute(constants.checked);
        if (expectedCheckStatus !== actualCheckStatus)
        {
            await this.driver.findElement(locators.settingPage.disableFormCheckbox).click();
            await this.driver.findElement(locators.settingPage.submitButton).click();
        }
    }
    async verifyMessage(message) {
        let messageField = await this.driver.findElement(locators.settingPage.messageField).getText();
        assert.equal(messageField, message, "Verify text in (Message) field.");
    }
    async verifySuccessfullyInfoText() {
        let statusInfoText = await this.driver.findElement(locators.settingPage.statusInfoText).getText();
        assert.equal(statusInfoText, constants.successfully, "Verify successfully info message");
    }
    async verifyDisableFormCheckbox(expectedCheckStatus) {
        let actualCheckStatus = await this.driver.findElement(locators.settingPage.disableFormCheckbox).getAttribute(constants.checked);
        assert.equal(actualCheckStatus, expectedCheckStatus, "Verify status (Disable form submission) checkbox");
    }
}
