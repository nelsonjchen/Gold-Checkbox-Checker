// ==UserScript==
// @name UCSB GOLD Login Checkbox Checker
// @match https://my.sa.ucsb.edu/gold/login.aspx
// @match https://my.sa.ucsb.edu/gold/Login.aspx
// @description GOLD, thieves lie. I am not better protected. Just more annoyed.
// ==/UserScript==

box = document.getElementById('ctl00_pageContent_CredentialCheckBox');
box.checked = true;
