/*
    @kkindrai
    17 feb 2025
*/

// Init Function
const init = () => {
    "use strict";

    // Call Display Header
    displayHeader();

    // Call Language Settings
    languageToggleListener();

    // Set Default Language (en)
    enableEnglish();
}


// Window OnLoad
window.onload = init;