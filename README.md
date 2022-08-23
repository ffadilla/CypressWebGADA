# qe-test-web

WEB UI automation test for gudangada
<br>

## 1. About Cypress

Everything about Cypress can be read in [Cypress Documentation](https://docs.cypress.io/guides), including the functions you can use to implement your test.
<br>

## 2. Development Requirement

### Mac OSX

1. Install Homebrew:

```
/bin/bash -c "$(curl -fs https://raw.githubusercontent.com/Homebrew/install/master/install.sh)
```

2. Install Node JS: There are 3 main ways to install Node.js:

   1. Using the [volta.sh](https://volta.sh/), this will automatically install the Node.js version when you visit the repo.
   2. Using the [NVM](https://github.com/nvm-sh/nvm), install it and choose node version 16.16.
   3. Manually install Node.js
      1. Go to the Node.js Downloads page https://nodejs.org/en/download/
      2. Download Node.js for macOS by clicking the "Macintosh Installer" option
      3. Run the downloaded Node.js .pkg Installer
      4. Run the installer, including accepting the license, selecting the destination, and authenticating for the install.
      5. You're finished! To ensure Node.js has been installed, run node -v in your terminal - you should get something like v6.9.4

3. Install Cypress:

Make sure you are at the project repository

```
cd /path/qe-test-web
```

Install dependencies and necessary setup.

```
npm install
```

4. Install cucumber-json-formatter:

Download and install the [cucumber JSON fomatter](https://github.com/cucumber/json-formatter) depending on your OS

## 3. Open and Run Cypress

Open cypress using

```
npx cypress open --env configFile={staging|development|production}
```

Run scenarios using

```
npx cypress run --env configFile={staging|development|production} --spec [specific feature file]
```

Run scenarios in a folder

```
npx cypress run --env configFile={staging|development|production} --spec cypress/e2e/google/features
```

Generate cucumber html report using

```
npm run report:generate
```
