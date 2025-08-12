# Set working directory to script location
Set-Location $PSScriptRoot

# Define classpath (using only Selenium without WebDriverManager)
$classpath = "..;..\lib\selenium-java-4.34.0\*"

# Compile
javac -cp "$classpath" Xpaths.java ChromeController.java

# Only run if compilation was successful
if ($LASTEXITCODE -eq 0) {
    java -cp "$classpath;." ChromeController
} else {
    Write-Host "Compilation failed."
}