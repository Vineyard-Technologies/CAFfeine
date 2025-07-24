import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import io.github.bonigarcia.wdm.WebDriverManager;

/**
 * <h1>Chrome Controller</h1>
 * A simple script that opens Chrome, waits 5 seconds, and then closes it.
 *
 * @author laserwolve
 */
public class ChromeController {

    /**
     * Main method to execute the Chrome automation script.
     * 
     * @param args command line arguments (not used)
     */
    public static void main(String[] args) {
        WebDriver driver = null;
        
        try {
            // Setup ChromeDriver using WebDriverManager
            WebDriverManager.chromedriver().setup();
            
            // Create Chrome options for better control
            ChromeOptions options = new ChromeOptions();
            // Add any desired Chrome options here
            // options.addArguments("--headless"); // Uncomment for headless mode
            
            // Initialize ChromeDriver
            driver = new ChromeDriver(options);
            
            System.out.println("Chrome browser opened successfully!");
            
            // Navigate to a blank page
            driver.get("about:blank");
            
            // Wait for 5 seconds
            System.out.println("Waiting for 5 seconds...");
            Thread.sleep(5000);
            
            System.out.println("Closing Chrome browser...");
            
        } catch (InterruptedException e) {
            System.err.println("Thread was interrupted: " + e.getMessage());
            Thread.currentThread().interrupt();
        } catch (Exception e) {
            System.err.println("An error occurred: " + e.getMessage());
            e.printStackTrace();
        } finally {
            // Ensure the browser is closed even if an exception occurs
            if (driver != null) {
                driver.quit();
                System.out.println("Chrome browser closed successfully!");
            }
        }
    }
}
