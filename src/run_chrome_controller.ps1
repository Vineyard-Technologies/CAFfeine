# Set working directory to script location
Set-Location $PSScriptRoot

# Define classpath
$classpath = "..;..\lib\selenium-java-4.34.0\*;..\lib\webdrivermanager-6.2.0\*"

# Compile
javac -cp "$classpath" ChromeController.java

# Run
java -cp "$classpath;." ChromeController