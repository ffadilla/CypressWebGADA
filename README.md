# qe-test-web
API test automation for gudangada
<br>
## About Karate
Everything about Karate can be read in [Karate Documentation](https://github.com/intuit/karate), including the functions you can use to implement your test.
<br>
## Development Requirement
### Mac OSX

1. Install Homebrew: 	
```
/bin/bash -c "$(curl -fs https://raw.githubusercontent.com/Homebrew/install/master/install.sh)
```

2. Install Node JS:
```
2.1 Go to the Node.js Downloads page https://nodejs.org/en/download/
2.2 Download Node.js for macOS by clicking the "Macintosh Installer" option
2.3 Run the downloaded Node.js .pkg Installer
2.4 Run the installer, including accepting the license, selecting the destination, and authenticating for the install.
2.5 You're finished! To ensure Node.js has been installed, run node -v in your terminal - you should get something like v6.9.4
```

3. Install Cypress:

Make sure you are at the project repository
```
cd /path/qe-test-web
```

Install Cypress using Node JS
```
npm install cypress --save-dev
```

## Open and Run Cypress
Run scenarios using 
```
cypress open
```
