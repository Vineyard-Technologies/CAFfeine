![CAFfiene Logo](images/logo.webp)

[![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)](https://www.java.com/)
[![Selenium](https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white)](https://www.selenium.dev/)


### An automation framework for [Construct](https://www.construct.net/)

## 📋 Prerequisites

- **Java 8+** - Java Development Kit
- **Supported Browsers** - Chrome, Edge, Firefox (drivers managed automatically)

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Laserwolve-Games/ConstructAutomationFramework.git
   cd ConstructAutomationFramework
   ```

2. **No additional setup required!** - Dependencies are included in the `lib/` directory

3. **Verify installation:**
   ```powershell
   cd src
   .\run_chrome_controller.ps1
   ```

## 📁 Project Structure

```
CAFfeine/
├── src/
│   ├── ChromeController.java       # Main automation controller
│   ├── Methods.java               # Core automation methods
│   ├── Position.java              # Position utilities
│   ├── Xpaths.java               # XPath repository
│   └── run_chrome_controller.ps1  # PowerShell runner script
├── lib/
│   ├── selenium-java-4.34.0/     # Selenium WebDriver
│management
├── images/
│   └── logo.png                   # Project assets
├── LICENSE                        # License file
└── README.md                      # This file
```

## 🧪 Writing Tests

### Basic Test Structure

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class MyConstructTest extends Methods {

    public static void main(String[] args) {
        // Setup WebDriver
        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver(new ChromeOptions());
        
        // Navigate to Construct
        driver.get("https://editor.construct.net/");
        
        // Perform test actions using Methods class
        // (Implementation details in Methods.java)
        
        // Clean up
        driver.quit();
    }
}
```

### Available Methods

The `Methods` class provides numerous utility methods for browser automation:

- **Browser Management:**
  - WebDriver setup and configuration
  - Navigation and window management

- **Element Interaction:**
  - `click()` methods for various element types
  - Text input and form handling
  - Element waiting and synchronization

- **File Operations:**
  - File upload and download handling
  - Project management utilities

### XPath Management

The `Xpaths` class organizes all selectors:

```java
// Example usage
click(Xpaths.AccountDropdown.logIn);
click(Xpaths.Dialog.AnimationsEditor.Animations.addAnimation);
```

## 🏃‍♂️ Running the Framework

### PowerShell Script

The easiest way to run the framework:

```powershell
cd src
.\run_chrome_controller.ps1
```

### Manual Compilation and Execution

```powershell
# Navigate to src directory
cd src

# Compile Java files
javac -cp "..\lib\selenium-java-4.34.0\*;..\lib\webdrivermanager-6.2.0\*" *.java

# Run the main controller
java -cp "..\lib\selenium-java-4.34.0\*;..\lib\webdrivermanager-6.2.0\*;." ChromeController
```

### Creating Custom Tests

1. Create a new Java file in the `src/` directory
2. Extend the `Methods` class for utility functions
3. Use `Xpaths` class for element selectors
4. Compile and run using the same classpath

## 📊 Output and Logging

The framework outputs information directly to the console, including:
- WebDriver setup and browser launch status
- Element interaction results
- Error messages and stack traces
- Custom debug output from your test implementations

## 🔍 Debugging

### Console Output

All output is displayed in the console where you run the framework. Monitor for:
- WebDriver initialization messages
- Element interaction confirmations
- JavaScript execution results
- Error messages and exceptions

### Common Issues

- **Driver Issues:** WebDriverManager should automatically handle driver downloads
- **Element Not Found:** Check XPath selectors in `Xpaths.java`
- **Timing Issues:** Adjust wait times in your automation scripts

## 📝 Best Practices

- **XPath Organization:** Keep all XPath selectors organized in `Xpaths.java`
- **Method Reusability:** Extend the `Methods` class for common operations
- **Clear Code Structure:** Use descriptive variable and method names
- **Error Handling:** Always include proper exception handling
- **Resource Cleanup:** Always call `driver.quit()` when finished

## 🛡️ Dependencies

| Dependency | Version | Purpose | Location |
|------------|---------|---------|----------|
| Selenium Java | 4.34.0 | Web automation framework | `lib/selenium-java-4.34.0/` |


## 📄 License

This project is licensed under the [AGPL 3.0 License](https://www.gnu.org/licenses/agpl-3.0.html.en) - see the [LICENSE](LICENSE) file for details.
