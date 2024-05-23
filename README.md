# Auto Login 1337

## Description
Auto Login 1337 is a Tampermonkey script that automates the login process for the [1337.ma](https://admission.1337.ma/en/users/sign_in) website. The script logs in using the provided credentials and redirects you to the desired page after a successful login.

## Features
- Automates the login process for 1337.ma.
- Redirects to a specific page after login.
- Simplifies repetitive login tasks.

## Installation
1. **Install Tampermonkey:**
   - [Google Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Microsoft Edge](https://www.microsoft.com/store/apps/9NBLGGH5162S)

2. **Install the Script:**
   - Open Tampermonkey dashboard.
   - Click on the `+` icon to create a new script.
   - Copy and paste the following script into the editor:

```javascript
// ==UserScript==
// @name         Auto Login 1337
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Automate your authentication on 1337.ma
// @author       0x1213
// @match        https://admission.1337.ma/en/users/sign_in
// @grant        none
// ==/UserScript==

(function() {
  const data = {
    email: '<YOUR_EMAIL>',
    password: '<YOUR_PASSWORD>'
  };
  const url = 'https://admission.1337.ma/api/auth/login';
  
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Login successful:', data);
    window.location.href = 'https://admission.1337.ma/en/candidature/piscine';
  })
  .catch(error => {
    console.error('There was a problem with the login request:', error);
  });
})();
```

3. **Customize the Script:**
   - Replace `<YOUR_EMAIL>` and `<YOUR_PASSWORD>` with your actual login credentials.

4. **Save and Enable the Script:**
   - Click on the `File` menu and select `Save`.
   - Ensure the script is enabled in the Tampermonkey dashboard.
  
5. **Star this Repository:**
   - If you find this script useful, please consider starring the repository on GitHub. It helps others discover it and shows your support.
   [![GitHub stars](https://img.shields.io/github/stars/0x1213/AutoLogin1337.svg?style=social&label=Star&maxAge=2592000)](https://github.com/0x1213/AutoLogin1337/stargazers)


## Usage
- Navigate to [1337.ma login page](https://admission.1337.ma/en/users/sign_in).
- The script will automatically log you in and redirect you to the candidature page.

## Notes
- Make sure your credentials are correct to avoid login issues.
- Handle your credentials securely and avoid sharing the script with hardcoded credentials.

## Author
Created by 0x1213

## License
This project is licensed under the MIT License.
