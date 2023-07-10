import webdriver from 'selenium-webdriver';
import { Capabilities } from 'selenium-webdriver/lib/capabilities.js';
import {constants} from "../resources/resources.js";
import {LoginPage} from "../page_object/login-page.js";
import {BasePage} from "../page_object/base-page.js";
import {DuplicateSettingsPage} from "../page_object/duplicate-setting-page.js";
import {ConfigurationPage} from "../page_object/configuration-page.js";

const capabilities = Capabilities.chrome();
capabilities.set('marionette', true);

let driver;
let loginPage;
let basePage;
let duplicateSettingsPage;
let configurationPage;

it('Test C1', async() => {
    await loginPage.setUsername(constants.login);
    await loginPage.setPassword(constants.password);
    await loginPage.clickLoginButton();
    await basePage.getToUrl(constants.adSettingsLink);
    await duplicateSettingsPage.setMessage(constants.message);
    await duplicateSettingsPage.verifySuccessfullyInfoText();
    await duplicateSettingsPage.verifyMessage(constants.message);
    await basePage.refreshPage();
    await duplicateSettingsPage.verifyMessage(constants.message);
    await basePage.getToUrl(constants.configLink);
    await configurationPage.clickDuplicateSettingsTab();
    await duplicateSettingsPage.verifyMessage(constants.message);
    await duplicateSettingsPage.setMessage(constants.empty);
    await duplicateSettingsPage.verifySuccessfullyInfoText();
    await duplicateSettingsPage.verifyMessage(constants.empty);
    await basePage.refreshPage();
    await duplicateSettingsPage.verifyMessage(constants.empty);
    await basePage.getToUrl(constants.configLink);
    await configurationPage.clickDuplicateSettingsTab();
    await duplicateSettingsPage.verifyMessage(constants.empty);
}).timeout(15000);
before(async() => {
    driver = await new webdriver.Builder().withCapabilities(capabilities).build();
    await driver.manage().window().maximize();
    loginPage = new LoginPage(driver);
    basePage = new BasePage(driver);
    duplicateSettingsPage = new DuplicateSettingsPage(driver);
    configurationPage = new ConfigurationPage(driver);
    await basePage.getToUrl(constants.loginLink);
});
after(async() => {
    await driver.quit();
});