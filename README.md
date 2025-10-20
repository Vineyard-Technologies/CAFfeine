![CAFfiene Logo](images/logo.webp)

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Selenium](https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white)](https://www.selenium.dev/)


### An automation framework for [Construct](https://www.construct.net/)

## 📋 Prerequisites

- **Node.js 14+** - JavaScript runtime
- **npm** - Node package manager (comes with Node.js)
- **Supported Browsers** - Chrome, Edge, Firefox (drivers managed automatically)

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Vineyard-Technologies/CAFfeine.git
   cd CAFfeine
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the automation:**
   ```bash
   node src/run_chrome_controller.js
   ```

## 📁 Project Structure

```
CAFfeine/
├── src/
│   ├── run_chrome_controller.js  # Main automation controller
│   ├── methods.js                # Core automation methods
│   ├── position.js               # Position utilities
│   └── xpaths.js                 # XPath repository
├── images/
│   └── logo.webp                 # Project assets
├── package.json                  # Node.js dependencies
├── LICENSE                       # License file
└── README.md                     # This file
```

## 🧪 Writing Tests

### Basic Test Structure

```javascript
import { Builder, By } from 'selenium-webdriver';
import { Methods } from './methods.js';
import { Xpaths } from './xpaths.js';

async function main() {
    // Setup WebDriver
    const driver = await new Builder()
        .forBrowser('chrome')
        .build();
    
    try {
        // Create methods helper
        const methods = new Methods(driver);
        
        // Navigate to Construct
        await driver.get('https://editor.construct.net/');
        
        // Perform test actions using Methods class
        await methods.dismissWelcomeDialog();
        
        // Your test logic here...
        
    } finally {
        // Clean up
        await driver.quit();
    }
}

main().catch(console.error);
```

### Available Methods

The `Methods` class provides utility methods for browser automation:

- **Element Interaction:**
  - `clickElement(xpath)` - Click elements
  - `sendText(xpath, text, clear)` - Input text
  - `clickableElement(xpath, seconds)` - Wait for clickable elements

- **JavaScript Execution:**
  - `executeJavascript(script, ...args)` - Execute scripts in browser
  - `getPosition(constructObject)` - Get Construct object positions

- **Waiting:**
  - `waitUntilElementIsGone(xpath, seconds)` - Wait for element removal

### XPath Management

The `Xpaths` object organizes all selectors:

```javascript
// Example usage
await methods.clickElement(Xpaths.Dialog.Welcome.noThanksNotNow);
await methods.clickElement(Xpaths.MenuDropdown.project);
```

## 🏃‍♂️ Running the Framework

### Direct Execution

```bash
node src/run_chrome_controller.js
```

### Using npm Scripts

From the root directory:

```bash
npm start
# or
npm test
```

### Creating Custom Tests

1. Create a new JavaScript file in the `src/` directory
2. Import the `Methods` class for utility functions
3. Import the `Xpaths` object for element selectors
4. Use async/await patterns for all Selenium operations
5. Run using: `node src/your_test.js`

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

- **XPath Organization:** Keep all XPath selectors organized in `xpaths.js`
- **Method Reusability:** Use the `Methods` class for common operations
- **Async/Await:** Always use async/await for Selenium operations
- **Error Handling:** Use try/catch blocks for proper exception handling
- **Resource Cleanup:** Always call `driver.quit()` in a finally block
- **ES Modules:** Use import/export syntax for better code organization

## 🛡️ Dependencies

| Dependency | Version | Purpose |
|------------|---------|---------|
| selenium-webdriver | ^4.34.0 | Web automation framework |
| Node.js | >=14.0.0 | JavaScript runtime |


## 📄 License

This project is licensed under the [AGPL 3.0 License](https://www.gnu.org/licenses/agpl-3.0.html.en) - see the [LICENSE](LICENSE) file for details.
