const phone = document.querySelector(".phone");
const divHeader = document.querySelector(".divHeader");
const mainScreen = document.querySelector(".mainScreen");
const divFooter = document.querySelector(".divFooter");

//1:a sidan
const homeButton = document.createElement("button");
homeButton.textContent = "";

//2:a sidan
const boilingTimeInfo = document.createElement("p");
const boilingMinutesVariable = "";
const boilingTimeDiv = document.createElement("div");


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

    changeLogoSize();

    mainScreen.innerHTML = "";
    divFooter.innerHTML = "";

    //section 1

    const eggConsistencyParent = document.createElement("div");
    const eggConsistencyQuestion = document.createElement("p");
    const hardButton = document.createElement("button");
    const softButton = document.createElement("button");
    const runnyButton = document.createElement("button");
    const eggButtonsDiv = document.createElement("div");

    eggConsistencyQuestion.classList.add("consistencyQuestion");
    eggConsistencyParent.classList.add("eggConsistencyParent");

    eggButtonsDiv.classList.add("eggButtonsDiv");
    hardButton.classList.add("hardButton", "eggButton");
    softButton.classList.add("softButton", "eggButton");
    runnyButton.classList.add("runnyButton", "eggButton");

    eggConsistencyQuestion.textContent = "Choose an egg consistency";
    hardButton.textContent = "Hard";
    softButton.textContent = "Soft";
    runnyButton.textContent = "Runny";

    eggConsistencyParent.appendChild(eggConsistencyQuestion);
    eggButtonsDiv.append(hardButton, softButton, runnyButton);
    eggConsistencyParent.appendChild(eggButtonsDiv);
    mainScreen.appendChild(eggConsistencyParent);

    //section 2

    const eggSizeParent = document.createElement("div");
    const eggSizeChoiceDiv = document.createElement("div");
    const eggSizeQuestion = document.createElement("p");
    const eggSizeSButton = document.createElement("button");
    const eggSizeMButton = document.createElement("button");
    const eggSizeLButton = document.createElement("button");
    const eggSizeXLButton = document.createElement("button");

    eggSizeParent.classList.add("eggSizeParent");
    eggSizeChoiceDiv.classList.add("eggSizeChoiceDiv", "sizeButton");
    eggSizeQuestion.classList.add("sizeQuestion");
    eggSizeSButton.classList.add("eggSizeSButton", "sizeButton");
    eggSizeMButton.classList.add("eggSizeMButton", "sizeButton");
    eggSizeLButton.classList.add("eggSizeLButton", "sizeButton");
    eggSizeXLButton.classList.add("eggSizeXLButton", "sizeButton");

    eggSizeChoiceDiv.append(eggSizeSButton, eggSizeMButton, eggSizeLButton, eggSizeXLButton);
    eggSizeParent.append(eggSizeQuestion, eggSizeChoiceDiv);
    mainScreen.appendChild(eggSizeParent);

    eggSizeQuestion.textContent = "Specify your egg size";
    eggSizeSButton.textContent = "S";
    eggSizeMButton.textContent = "M";
    eggSizeLButton.textContent = "L";
    eggSizeXLButton.textContent = "XL";

    //section 3

    const eggAmountParent = document.createElement("div");
    const amountQuestion = document.createElement("p");
    const amountInput = document.createElement("input");
    const amountInputDiv = document.createElement("div");
    amountInput.type = "number";

    amountQuestion.textContent = "Specify how many eggs";

    eggAmountParent.classList.add("eggAmountParent");
    amountInput.classList.add("amountInput");
    amountQuestion.classList.add("amountQuestion");
    amountInputDiv.classList.add("amountInputDiv");

    eggAmountParent.append(amountQuestion, amountInputDiv);
    amountInputDiv.appendChild(amountInput);
    mainScreen.appendChild(eggAmountParent);

    amountInput.addEventListener("input", () => {
        console.log("egg");
        const nextButton = createButton("Next");
        divFooter.appendChild(nextButton);

        // boilingTimeInfo

    })
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

function changeLogoSize() {

    divHeader.innerHTML = "";
    appLogo.classList.replace("appLogoBig", "appLogoSmall");
    divHeader.appendChild(appLogo);
}

