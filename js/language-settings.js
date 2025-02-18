/*
    @kkindrai
    17 feb 2025
*/

let currentLanguage = "lang-en";

// Get Current Language
const getCurrentLang = () => {
    "use strict";

    return currentLanguage;
}
// Change Language Event Listeners
const languageToggleListener = () => {
    "use strict";
    let buttons = document.querySelectorAll(".language-select");

    buttons.forEach(button => {
        button.addEventListener("click", changeDisplayLanguage);
    });
    
}

const changeDisplayLanguage = event => {
    "use strict";

    // Get the id from the event, set page language
    let pageLanguage = event.currentTarget.getAttribute('data-language');
    
    // Set Current Global Display Language
    currentLanguage = pageLanguage;

    // Determine Language
    if (pageLanguage == "lang-en") {
        // Set Site to English
        console.log("English Enabled");
        enableEnglish();

    } else if (pageLanguage == "lang-es") {
        // Set Site to Spanish
        console.log("Spanish Enabled");
        enableSpanish();
    }
}

const enableEnglish = () => {
    document.documentElement.classList.remove("hidden");
    document.documentElement.style.display = "block";

    document.querySelectorAll('[lang="en"]').forEach(el => el.classList.remove("hidden"));
    document.querySelectorAll('[lang="es"]').forEach(el => el.classList.add("hidden"));
};

const enableSpanish = () => {
    document.documentElement.classList.remove("hidden");
    document.documentElement.style.display = "block";

    document.querySelectorAll('[lang="es"]').forEach(el => el.classList.remove("hidden"));
    document.querySelectorAll('[lang="en"]').forEach(el => el.classList.add("hidden"));
};
