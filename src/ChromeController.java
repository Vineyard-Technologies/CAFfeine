import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class ChromeController {

    public static void main(String[] args) {
        // Selenium Manager will automatically handle chromedriver setup
        WebDriver driver = new ChromeDriver(new ChromeOptions());
        
        driver.get("https://editor.construct.net/");

        WebDriverWait wait = new WebDriverWait(driver, java.time.Duration.ofSeconds(10));
        WebElement noThanksButton = wait.until(
            ExpectedConditions.elementToBeClickable(By.xpath(Xpaths.Dialog.Welcome.noThanksNotNow))
        );
        noThanksButton.click();
        
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            System.err.println("Thread was interrupted: " + e.getMessage());
        }
    }
}