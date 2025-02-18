/*
    @kkindrai
    17 feb 2025
*/

// Header Text Logic
const displayHeader = () => {
    "use strict";

    // Create Local Variables
    let strings;

    // Fetch Current Lang
    let currentLanguage = getCurrentLang();

    if (currentLanguage == "lang-en") {
        // English String
        
        strings = [
            "<span class='minecraft'>/data get entity @s 3d0e51fc-</span>",
            "<span class='consolas'>this.me = 'Kendra'</span>",
            "<span lang='es'>¡Hola, soy Kendra!</span><span lang='en' class='hidden'>Hi! I'm Kendra.</span>",
            "<span lang='en'>Hi! I'm Kendra.</span><span lang='es' class='hidden'>¡Hola, soy Kendra!</span>" 
        ];
        
    } else if (currentLanguage == "lang-es") {
        // Spanish String

        strings = [
            "<span class='minecraft'>/data get entity @s 3d0e51fc-</span>",
            "<span class='consolas'>this.me = 'Kendra'</span>",
            "<span lang='es' class='hidden'>¡Hola, soy Kendra!</span><span lang='en'>Hi! I'm Kendra.</span>",
            "<span lang='en' class='hidden'>Hi! I'm Kendra.</span><span lang='es'>¡Hola, soy Kendra!</span>" 
        ];

    }

    // Creating the new Auto Typer
    let typed = new Typed(".auto-heading-text", {
        strings,
        typeSpeed : 20,
        backSpeed : 5,
        loop : false
    })

    
}