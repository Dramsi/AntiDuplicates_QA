import {locators} from "../resources/resources.js";

export class ConfigurationPage {
    constructor(driver) {
        this.driver = driver;
    }
    async clickDuplicateSettingsTab() {
        await this.driver.findElement(locators.configurationPage.adSettings).click();
    }
}
