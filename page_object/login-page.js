import {locators} from "../resources/resources.js";

export class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }
    async setUsername(username) {
        await this.driver.findElement(locators.loginPage.nameField).clear();
        await this.driver.findElement(locators.loginPage.nameField).sendKeys(username);
    }
    async setPassword(password) {
        await this.driver.findElement(locators.loginPage.passwordField).clear();
        await this.driver.findElement(locators.loginPage.passwordField).sendKeys(password);
    }
    async clickLoginButton() {
        await this.driver.findElement(locators.loginPage.submitButton).click();
    }
}
