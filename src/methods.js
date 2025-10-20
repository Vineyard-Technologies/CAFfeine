/**
 * Helper methods for Construct automation
 * Example structure showing key automation patterns
 */

import { By, until } from 'selenium-webdriver';
import { Xpaths } from './xpaths.js';
import { Position } from './position.js';

export class Methods {
    constructor(driver) {
        this.driver = driver;
    }

    // Click an element by XPath
    async clickElement(xpath) {
        const element = await this.clickableElement(xpath);
        await element.click();
    }

    // Wait for element to be clickable
    async clickableElement(xpath, seconds = 5) {
        return await this.driver.wait(
            until.elementLocated(By.xpath(xpath)),
            seconds * 1000
        ).then(async (element) => {
            await this.driver.wait(until.elementIsVisible(element), seconds * 1000);
            await this.driver.wait(until.elementIsEnabled(element), seconds * 1000);
            return element;
        });
    }

    // Send text to an element
    async sendText(xpath, text, clear = true) {
        const element = await this.clickableElement(xpath);
        if (clear) {
            await element.clear();
        }
        await element.sendKeys(text);
    }

    // Execute JavaScript in the browser
    async executeJavascript(script, ...args) {
        return await this.driver.executeScript(script, ...args);
    }

    // Get position of a Construct object
    async getPosition(constructObject) {
        const result = await this.executeJavascript(
            `const obj = runtime.objects.${constructObject}.getFirstInstance();
             return obj.layer.layerToCssPx(obj.x, obj.y);`
        );
        return new Position(result[0], result[1]);
    }

    // Wait for element to disappear
    async waitUntilElementIsGone(xpath, seconds = 10) {
        try {
            await this.driver.wait(
                until.elementIsNotVisible(await this.driver.findElement(By.xpath(xpath))),
                seconds * 1000
            );
            return true;
        } catch (error) {
            return true;
        }
    }

    // Dismiss welcome dialog
    async dismissWelcomeDialog() {
        await this.clickElement(Xpaths.Dialog.Welcome.noThanksNotNow);
        await this.waitUntilElementIsGone(Xpaths.welcome);
    }

    // Quit the browser
    async quit() {
        await this.driver.quit();
    }
}
