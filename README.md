# Construct Automation Framework
![CAFfiene Logo](images/logo.png)

[![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)](https://www.java.com/)
[![Selenium](https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white)](https://www.selenium.dev/)
[![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white)](https://maven.apache.org/)

A comprehensive automation and testing framework built with Selenium WebDriver and Java, specifically designed for testing [Construct](https://www.construct.net/) applications and projects. This framework provides a robust foundation for automated testing with WebDriverManager for browser management and Logback for logging.

## 🚀 Features

- **Selenium WebDriver 4.32.0** - Latest Selenium features and improvements
- **WebDriverManager 6.1.0** - Automatic browser driver management
- **Logback Logging** - Comprehensive logging with configurable levels
- **JUnit 5 Integration** - Modern testing framework support
- **Cross-Browser Testing** - Support for Chrome, Edge, and other browsers
- **Construct-Specific Methods** - Specialized methods for testing Construct applications
- **Page Object Model** - Organized XPath management and element handling
- **Utility Methods** - Rich set of helper methods for common test operations

## 📋 Prerequisites

- **Java 8+** - Java Development Kit
- **Maven 3.6+** - Build and dependency management
- **Supported Browsers** - Chrome, Edge, Firefox (drivers managed automatically)

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Laserwolve-Games/ConstructAutomationFramework.git
   cd ConstructAutomationFramework
   ```

2. **Install dependencies:**
   ```bash
   mvn clean install
   ```

3. **Verify installation:**
   ```bash
   mvn test
   ```

## 📁 Project Structure

```
ConstructAutomationFramework/
├── src/
│   └── constructAutomation/
│       ├── DaggerQuestTest.java    # Sample test implementation
│       ├── Methods.java            # Core automation methods
│       ├── Position.java           # Position utilities
│       └── Xpaths.java            # XPath repository
├── resources/
│   └── logback.xml                # Logging configuration
├── images/
│   └── caffienelogo.png           # Project assets
├── pom.xml                        # Maven configuration
└── README.md                      # This file
```

## 🔧 Configuration

### Logback Configuration

The framework uses Logback for logging. Configure logging levels in `resources/logback.xml`:

```xml
<configuration>
    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36}.%M\(%line\) - %msg%n</pattern>
        </encoder>
    </appender>
    <root level="error">
        <appender-ref ref="STDOUT" />
    </root>
</configuration>
```

### Browser Configuration

WebDriverManager automatically handles browser driver downloads and management. No manual driver setup required!

## 🧪 Writing Tests

### Basic Test Structure

```java
package constructAutomation;

import org.junit.jupiter.api.Test;

class MyConstructTest extends Methods {

    @Test
    void testConstructApplication() {
        // Start the desktop client
        startDesktopClient();
        
        // Perform test actions
        click("playButton");
        
        // Verify results
        verifyTrue("Game started successfully", 
            (boolean) executeJavascript("return runtime.layout.getLayer('gameLayer').isVisible"));
        
        // Clean up
        quit();
    }
}
```

### Available Methods

The `Methods` class provides numerous utility methods:

- **Browser Management:**
  - `startDesktopClient()` - Initialize browser for Construct testing
  - `quit()` - Close browser and clean up resources

- **Element Interaction:**
  - `click(String xpath)` - Click on elements
  - `sendKeys(String xpath, String text)` - Input text
  - `verifyTrue(String message, boolean condition)` - Assertions

- **JavaScript Execution:**
  - `executeJavascript(String script)` - Execute JavaScript in browser context

- **Verification:**
  - `verifyThrows(String message, Class<T> exception, ThrowingRunnable runnable)` - Exception testing

### XPath Management

The `Xpaths` class organizes all selectors:

```java
// Example usage
click(Xpaths.AccountDropdown.logIn);
click(Xpaths.Dialog.AnimationsEditor.Animations.addAnimation);
```

## 🏃‍♂️ Running Tests

### Maven Commands

```bash
# Run all tests
mvn test

# Run specific test class
mvn test -Dtest=DaggerQuestTest

# Clean and rebuild
mvn clean install

# Run tests with specific profile
mvn test -Dspring.profiles.active=test
```

### VS Code Tasks

The project includes pre-configured VS Code tasks:

- **Maven Build:** `Ctrl+Shift+P` → "Tasks: Run Task" → "Maven Build"
- **Maven Test:** `Ctrl+Shift+P` → "Tasks: Run Task" → "Maven Test"

## 📊 Test Results and Reports

Test results are automatically generated and can be found in:
- `target/surefire-reports/` - JUnit test reports
- Console output with timestamps and log levels

## 🔍 Debugging

### Logging Levels

Adjust logging levels in `logback.xml`:
- `trace` - Very detailed debugging
- `debug` - General debugging information
- `info` - General information
- `warn` - Warning messages
- `error` - Error messages only (default)

### Common Issues

1. **Browser Driver Issues:** WebDriverManager handles this automatically
2. **Element Not Found:** Check XPath selectors in `Xpaths.java`
3. **Timing Issues:** Use WebDriverWait for dynamic content

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Best Practices

- **Page Object Model:** Keep XPaths organized in `Xpaths.java`
- **Method Reusability:** Use methods from `Methods.java` for common operations
- **Clear Test Names:** Use descriptive test method names
- **Assertions:** Always include meaningful assertion messages
- **Clean Up:** Always call `quit()` in test teardown

## 🛡️ Dependencies

| Dependency | Version | Purpose |
|------------|---------|---------|
| Selenium Java | 4.32.0 | Web automation framework |
| WebDriverManager | 6.1.0 | Automatic driver management |
| Logback Classic | 1.5.18 | Logging framework |
| JUnit Jupiter | Latest | Testing framework |

## 📄 License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file.

## 🆘 Support

For issues and questions:
- Create an issue on GitHub
- Check existing documentation
- Review test examples in the codebase

## 🏗️ Roadmap

- [ ] Add support for mobile testing
- [ ] Implement parallel test execution
- [ ] Add screenshot capture on failures
- [ ] Integrate with CI/CD pipelines
- [ ] Add performance testing capabilities

---

**Built with ❤️ for the Construct community**
