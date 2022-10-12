
#Guru99 Demo site

This is the automation scripts for a demo site which is written in cypress


![Logo](https://raw.githubusercontent.com/cypress-io/cypress/develop/assets/cypress-logo-light.png)


## Steps to setup Cypress on your machine
- [Get Started](https://docs.cypress.io/guides/getting-started/installing-cypress)

## Steps to setup Project on your machine

- Clone the repo to you local machine or download zip file
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

## Test cases Overall Results

| File Name         | Test Cases                      | Test result                                                 | 
| ----------------- | --------------------------------|------------------------------------------------------------ |
| Auth.js      | Login Success with Valid Login Details |   ![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass|
||Log Out Success |![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass
||Log in with Valid Email Address Only |![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass
||Log in with Valid Password Only |![#FF0000](https://via.placeholder.com/10/FF0000.jpg) Fail
||Log in with Invalid Email Address and Password |![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass
||Log in with Invalid Email Address and valid Password |![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass
||Log in with valid Email Address and Invalid Password |![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass
||Log in with Empty Email Address and Password field |![#FF0000](https://via.placeholder.com/10/FF0000.jpg) Fail
||Trying to visit dashboard page without login |![#FF0000](https://via.placeholder.com/10/FF0000.jpg) Fail



| File Name         | Test Cases                      | Test result                                                 | 
| ----------------- | --------------------------------|------------------------------------------------------------ |
|Profile.js      | Profile edit and update with the random value | ![#FF0000](https://via.placeholder.com/10/FF0000.jpg) Fail|
||Profile Tab Visit and checking the Profile page content|![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass
||Profile Tab Visit and checking the Profile Value |![#FF0000](https://via.placeholder.com/10/FF0000.jpg) Fail

| File Name         | Test Cases                      | Test result                                                 | 
| ----------------- | --------------------------------|------------------------------------------------------------ |
| Quotation.js     | Request Quotation visit, Verify the calculation, Save the Qutotaion and Store the Quotation Key |   ![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass|
||Retrieve Quotation from stored key and verify the data with Request Quotation |![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass


## Test Steps for Failed Results
### Log in with Valid Password Only
|Test Steps                      | Test result     | Expected Result                                                   | Actual Result |
| ----------------- | --------------------------------|------------------------------------------------------------ | -----------------|
| Visit Login Page link |   ![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass||||
| Check URL and site Title |    ![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass||||
| Check email input field is visible and Clear |   ![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass||||
| Check email input field is visible, clear and input correct password |   ![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass||||
| Click the Login Button |![#FF0000](https://via.placeholder.com/10/FF0000.jpg) Fail | Should not able to login | Redirected to Dashboard |

### Log in with Empty Email Address and Password
|Test Steps                      | Test result     | Expected Result                                                   | Actual Result |
| ----------------- | --------------------------------|------------------------------------------------------------ | -----------------|
| Visit Login Page link |   ![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass||||
| Check URL and site Title |    ![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass||||
| Check email input field is visible and clear |   ![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass||||
| Check email input field is visible and clear |   ![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass||||
| Click the Login Button |![#FF0000](https://via.placeholder.com/10/FF0000.jpg) Fail | Should not able to login | Redirected to Dashboard |


### Trying to visit dashboard page without login via URL
|Test Steps                      | Test result     | Expected Result                                                   | Actual Result |
| ----------------- | --------------------------------|------------------------------------------------------------ | -----------------|
| Visit Login Page link |   ![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass||||
| Check URL |    ![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass||||
| Visit Direct link via URL and check Email and Password input field | ![#FF0000](https://via.placeholder.com/10/FF0000.jpg) Fail| Redirect to login page and email and password input field is visible| Able to Access Dashboard Page with login credentials|

### Profile edit and update with the random value
|Test Steps                      | Test result     | Expected Result                                                   | Actual Result |
| ----------------- | --------------------------------|------------------------------------------------------------ | -----------------|
| Visit Login Page link |   ![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass||||
| Enter Email and Password |    ![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass||||
| Click Login Button |    ![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass||||
| Click Edit Profile |    ![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass||||
| Input all the necessary thing from faker.js plugin for editing the profile |    ![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass||||
| Click Update User Button | ![#FF0000](https://via.placeholder.com/10/FF0000.jpg) Fail| Should be click and show shome message like User is Updated| No Response on click |

### Profile Tab Visit and checking the Profile Value
|Test Steps                      | Test result     | Expected Result                                                   | Actual Result |
| ----------------- | --------------------------------|------------------------------------------------------------ | -----------------|
| Check Profile Tab is Visible  |   ![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass||||
| Click Profile Tab |    ![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass||||
| Check Profile Tab is visible, have text Profile and tab is active after click |    ![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass||||
| Check Title |    ![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass||||
| Check Firstname text to be visible |    ![#00b48a](https://via.placeholder.com/10/00b48a.jpg) Pass||||
| Check Firstname value| ![#FF0000](https://via.placeholder.com/10/FF0000.jpg) Fail| Should have the Value which is insert during previous test cases (Profile edit and Update) | Value is not shown |
|Test Exist|



