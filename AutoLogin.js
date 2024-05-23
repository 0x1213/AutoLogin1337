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
