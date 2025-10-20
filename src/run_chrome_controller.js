import { Builder, By, until } from 'selenium-webdriver';
import { Xpaths } from './xpaths.js';

async function main() {
    // Create ChromeDriver instance
    const driver = await new Builder()
        .forBrowser('chrome')
        .build();

    try {
        // Navigate to Construct editor
        await driver.get('https://editor.construct.net/');

        // Wait for and click the "No thanks, not now" button
        const noThanksButton = await driver.wait(
            until.elementLocated(By.xpath(Xpaths.Dialog.Welcome.noThanksNotNow)),
            10000
        );
        await driver.wait(until.elementIsVisible(noThanksButton), 10000);
        await driver.wait(until.elementIsEnabled(noThanksButton), 10000);
        await noThanksButton.click();

        // Wait for 5 seconds
        await driver.sleep(5000);

    } catch (error) {
        console.error('Error occurred:', error.message);
    } finally {
        // Close the browser
        // await driver.quit();
    }
}

// Run the main function
main().catch(console.error);
