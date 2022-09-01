
#Guru99 Demo site

This is the automation scripts for a demo site which is written in cypress


![Logo](https://raw.githubusercontent.com/cypress-io/cypress/develop/assets/cypress-logo-light.png)


## Steps to setup Cypress on your machine
- [Get Started](https://docs.cypress.io/guides/getting-started/installing-cypress)

## Steps to setup Project on your machine

- Clone the repo to you local machine
```bash
  git clone https://binayad@bitbucket.org/binayad/guru99democypresstest.git
```
- Make sure you have installed node in your system.
- After you've cloned the project, make sure you have .env file.
- If you don't have .env file you can copy ".env.example" file and create one with ".env" name. Or, just type this in your terminal.
```bash
  cp .env.example .env
```
## Steps to Run Project on your machine 
- Run following command to install require dependencies   
```bash
  npm install
```
- To Run Cypress in terminal
```bash
  npm run test
```
- To Run Cypress in Real time Brower
```bash
  npm run cypress:open
```
## Available Test cases
### Auth.js
- Login Success with Valid Login Details
- Log Out Success
- Log in with Valid Email Address Only
- Log in with Valid Password Only
- Log in with Invalid Email Address and Password
- Log in with Invalid Email Address and valid Password
- Log in with valid Email Address and Invalid Password
- Log in with Empty Email Address and Password field
- Trying to visit dashboard page without login

### Profile.js
- Profile edit and update with the random value
- Profile Tab Visit and checking the Profile page content
- Profile Tab Visit and checking the Profile Value

### Quotation.js
- Request Quotation visit, Verify the calculation, Save the Qutotaion and Store the Quotation Key
- Retrieve Quotation from stored key and verify the data with Request Quotation,
