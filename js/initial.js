/*
    @kkindrai
    17 feb 2025
*/

// Init Function
const init = () => {
    "use strict";

    // Call Language Settings
    languageToggleListener();

    // Set Default Language (en)
    enableEnglish();

    // Call Display Header
    displayHeader();
}


// Window OnLoad
window.onload = init;