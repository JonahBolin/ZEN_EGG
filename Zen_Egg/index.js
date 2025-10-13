const phone = document.querySelector(".phone");
const divHeader = document.querySelector(".divHeader");
const mainScreen = document.querySelector(".mainScreen");
const divFooter = document.querySelector(".divFooter");

const homeButton = document.createElement("button");
homeButton.textContent = "";

const appLogo = document.createElement("img");
appLogo.src = "./app_logga/egg_heart_zen2.png";
appLogo.alt = "Zen Egg Logo";

function loadPage(page) {

    if (page === "home") {

        divHeader.innerHTML = "";
        mainScreen.innerHTML = "";
        divFooter.innerHTML = "";

        const appNameParent = document.createElement("div");
        appNameParent.id = "appNameParent";
        const appName = document.createElement("h1");
        appName.id = "ZenEgg";
        appName.textContent = "ZEN EGG";

        appNameParent.appendChild(appName);
        mainScreen.appendChild(appNameParent);

        const appLogoParent = document.createElement("div");
        appLogoParent.id = "appLogoParent";
        mainScreen.appendChild(appLogoParent);

        appLogo.classList.add("appLogoBig");

        appLogoParent.appendChild(appLogo);

        const homeButton = createButton("Get your day started");
        divFooter.appendChild(homeButton);
    }

}

function loadEggChoice() {
    console.log("Hej!");

    divHeader.innerHTML = "";
    mainScreen.innerHTML = "";
    divFooter.innerHTML = "";

    appLogoSmall.classList.replace("appLogoBig", "appLogoSmall");
    divHeader.appendChild(appLogoSmall);


}

window.addEventListener("DOMContentLoaded", () => {
    loadPage("home");
})

function createButton(text) {
    const button = document.createElement("button");
    button.textContent = text;
    button.classList.add("button");
    button.addEventListener("click", () => loadEggChoice());
    return button;
}


