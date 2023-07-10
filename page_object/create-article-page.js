import {constants, locators} from "../resources/resources.js";
import {Key} from "selenium-webdriver";
import {assert} from "chai";
import { BasePage } from "./base-page.js";

export class CreateArticlePage {
    constructor(driver) {
        this.driver = driver;
        this.basePage = new BasePage(this.driver);
    }
    async fillTitleField(title) {
        await this.driver.findElement(locators.createArticlePage.titleField).clear();
        await this.driver.findElement(locators.createArticlePage.titleField).sendKeys(title);
        await this.driver.findElement(locators.createArticlePage.titleField).sendKeys(Key.ENTER);
    }
    async clickNotDuplicateButton() {
        await this.driver.findElement(locators.createArticlePage.notDuplicateButton).click();
    }
    async verifyRelatedContentMessageText(message) {
        let textContent = await this.driver.findElement(locators.createArticlePage.relatedContentMessageText).getText();
        assert.equal(textContent, message, "Verify message in Related Content.");
    }
    async verifyRelatedContentArticle(duplicateArticleName) {
        let actualArticleName = await this.driver.findElement(locators.createArticlePage.relatedContentArticle).getText();
        assert.isTrue(actualArticleName.contains(duplicateArticleName), "Verify duplicate article in Related Content.");
    }
    async verifyPresentDuplicates(expected) {
        let duplicateElement = this.basePage.isElementPresent(this.driver, locators.createArticlePage.relatedContentArticle);
        if (expected) {
            assert.isTrue(duplicateElement, "Verify presence of duplicates in Related Content.");
        }
        else {
            assert.isFalse(duplicateElement, "Verify absence of duplicates in Related Content.");
        }
    }
    async verifyPresentNotDuplicateButton(expected) {
        let actual = this.basePage.isElementPresent(this.driver, locators.createArticlePage.notDuplicateButton);
        if (expected) {
            assert.isTrue(actual, "Verify presence (not a duplicate) button.");
        }
        else {
            assert.isFalse(actual, "Verify absence (not a duplicate) button.");
        }
    }
    async verifyAvailableSubmitButton(expectedStatus) {
        let actualStatus = await this.driver.findElement(locators.createArticlePage.submitButton).getAttribute(constants.disabled);
        assert.equal(actualStatus, expectedStatus, "Verify available (Submit) button.");
    }
}
