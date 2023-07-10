import {By} from "selenium-webdriver";

export const locators = {
    loginPage: {
        nameField: By.id("edit-name"),
        passwordField: By.id("edit-pass"),
        submitButton: By.id("edit-submit")
    },
    settingPage: {
        statusInfoText: By.xpath("//div[@aria-label='Status message']"),
        textFormatSelect: By.id("edit-anti-duplicates-message-format--2"),
        restrictedHtmlItem: By.xpath("//*[@value='restricted_html']"),
        messageField: By.className("form-textarea resize-vertical"),
        disableFormCheckbox: By.id("edit-anti-duplicates-form-submission"),
        submitButton: By.id("edit-submit")
    },
    configurationPage: {
        adSettings: By.xpath("//span[text()='Anti-Duplicates settings']")
    },
    createArticlePage: {
        titleField: By.id("edit-title-0-value"),
        relatedContentMessageText: By.id("dw_container"),
        relatedContentArticle: By.xpath("//ul[@id='dw-listing']/li/a"),
        notDuplicateButton: By.id("dw-enable-form"),
        submitButton: By.id("edit-submit")
    }
}
export const constants = {
    login: "UserQA",
    password: "nestleqauser136",
    adSettingsLink: "http://localhost/drupal/en/admin/config/anti-duplicates",
    loginLink: "http://localhost/drupal/en/user/login",
    configLink: "http://localhost/drupal/en/admin/config",
    createArticleLink: "http://localhost/drupal/en/node/add/article",
    message: "You have duplicates.",
    empty: "",
    checked: "checked",
    isChecked: "true",
    isNotChecked: null,
    isAvailable: null,
    isNotAvailable: "true",
    testName: "Test name",
    test: "Test",
    anything: "Anything",
    disabled: "disabled",
    successfully: "Status message\nAnti Duplicates configuration submitted successfully.",
    defaultMessageText: "Help us reduce the chance of duplicated content, if we find content that is similar or related to the one you are posting it will be listed below :"
}