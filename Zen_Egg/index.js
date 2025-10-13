const mainScreen = document.querySelector(".mainScreen");

function loadPage(page) {

    if (page === "home") {
        const appNameParent = document.createElement("div");
        appNameParent.id = "appNameParent";
        const appName = document.createElement("h1");
        appName.id = "ZEN_EGG"
        appName.textContent = "ZEN EGG";

        appNameParent.appendChild(appName);
        mainScreen.appendChild(appNameParent);

    }

}



window.addEventListener("DOMContentLoaded", () => {
    loadPage("home");
})

