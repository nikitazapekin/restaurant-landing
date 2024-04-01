/*class ThemeSwitcher {
    constructor(configuration) {
         const defaultConfig = {
              targetElementClass: "application",
              triggerButtonClass: "theme-switcher-button",
              triggerButtonActiveClass: "theme-switcher-button-active",
              darkThemeClass: "dark-theme",
              themeLocalStorageID: "theme",
              onChangeTheme: () => {}
         };

         this.activeTheme = "light";
         this.options = Object.assign(defaultConfig, configuration);

         this.initialization();
    }

    initialization() {
         this.defineElements();
         this.applyCurrentTheme();
         this.switchThemeHandler();
         this.registerMatchMediaListener();
    }

    defineElements() {
         const { triggerButtonClass, targetElementClass } = this.options;

         this.triggerButton = document.querySelector(`.${triggerButtonClass}`);
         this.targetElement = document.querySelector(`.${targetElementClass}`);
    }

    onChangeThemeHandler() {
         const { onChangeTheme } = this.options;

         if (onChangeTheme) {
              return onChangeTheme(this);
         }
    }

    setDarkTheme() {
         //prettier-ignore
         const {
              darkThemeClass,
              themeLocalStorageID,
              triggerButtonActiveClass
         } = this.options;

         localStorage.setItem(themeLocalStorageID, "dark");

         this.activeTheme = "dark";
         this.targetElement.classList.add(darkThemeClass);
         this.triggerButton.classList.add(triggerButtonActiveClass);

         this.onChangeThemeHandler();
    }

    setLightTheme() {
         //prettier-ignore
         const {
              darkThemeClass,
              themeLocalStorageID,
              triggerButtonActiveClass
         } = this.options;

         localStorage.setItem(themeLocalStorageID, "light");

         this.activeTheme = "light";
         this.targetElement.classList.remove(darkThemeClass);
         this.triggerButton.classList.remove(triggerButtonActiveClass);

         this.onChangeThemeHandler();
    }

    setPreferredTheme() {
         const conditionID1 = window.matchMedia;
         const conditionID2 = window.matchMedia("(prefers-color-scheme: dark)").matches;

         conditionID1 && conditionID2 ? this.setDarkTheme() : this.setLightTheme();
    }

    applyCurrentTheme() {
         //prettier-ignore
         const { themeLocalStorageID } = this.options;

         if (localStorage.getItem(themeLocalStorageID) != null) {
              this.activeTheme = localStorage.getItem(themeLocalStorageID);

              switch (localStorage.getItem(themeLocalStorageID)) {
                   case "light":
                        return this.setLightTheme();
                   case "dark":
                        return this.setDarkTheme();
                   default:
                        return this.setPreferredTheme();
              }
         } else {
              return this.setPreferredTheme();
         }
    }

    switchThemeHandler() {
         this.triggerButton.addEventListener("click", () => {
              switch (this.activeTheme) {
                   case "light":
                        return this.setDarkTheme();
                   case "dark":
                        return this.setLightTheme();
              }
         });
    }

    registerMatchMediaListener() {
         const prefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)");

         prefersColorScheme.addEventListener("change", this.applyCurrentTheme.bind(this));
    }
}

new ThemeSwitcher({
    onChangeTheme: ({ triggerButton, activeTheme }) => {
         switch (activeTheme) {
              case "light":
                   triggerButton.textContent = `Light Theme`;
                   break;
              case "dark":
                   triggerButton.textContent = `Dark Theme`;
                   break;
         }
    }
}); */




document.addEventListener("DOMContentLoaded", ()=>{
    init()
  })
  function init() {
    if(localStorage.getItem('theme')) {
      document.documentElement.setAttribute("theme", "dark");
    }
    else {
      document.documentElement.removeAttribute("theme");
    }
    
  }
  const toggleBtn = document.querySelector("#toggle-theme");
  toggleBtn.addEventListener("click", function() {
    if(document.documentElement.hasAttribute("theme")){
      document.documentElement.removeAttribute("theme");
      localStorage.removeItem('theme');
    }
    else{
      document.documentElement.setAttribute("theme", "dark");
      localStorage.setItem('theme', 1);
      alert("dark")
    }
  });