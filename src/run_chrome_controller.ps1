# Set working directory to script location
Set-Location $PSScriptRoot

# Define classpath
$classpath = "..;..\lib\selenium-java-4.34.0\*;..\lib\webdrivermanager-6.2.0\*"

# Compile
javac -cp "$classpath" ChromeController.java

# Only run if compilation was successful
if ($LASTEXITCODE -eq 0) {
    java -cp "$classpath;." ChromeController
} else {
    Write-Host "Compilation failed."
}