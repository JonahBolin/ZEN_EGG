const phone = document.querySelector(".phone");
const divHeader = document.querySelector(".divHeader");
const mainScreen = document.querySelector(".mainScreen");
const divFooter = document.querySelector(".divFooter");

//1:a sidan
const homeButton = document.createElement("button");
homeButton.textContent = "";

//2:a sidan
const eggConsistencyParent = document.createElement("div");
const eggConsistencyQuestion = document.createElement("p");
const hardButton = document.createElement("button");
const softButton = document.createElement("button");
const runnyButton = document.createElement("button");
const eggButtonsDiv = document.createElement("div");
eggConsistencyQuestion.textContent = "Choose an egg consistency";
hardButton.textContent = "Hard";
softButton.textContent = "Soft";
runnyButton.textContent = "Runny";

const eggSizeParent = document.createElement("div");
const eggSizeChoiceDiv = document.createElement("div");
const eggSizeQuestion = document.createElement("p");
const eggSizeSButton = document.createElement("button");
const eggSizeMButton = document.createElement("button");
const eggSizeLButton = document.createElement("button");
const eggSizeXLButton = document.createElement("button");
eggSizeQuestion.textContent = "Specify your egg size";
eggSizeSButton.textContent = "S";
eggSizeMButton.textContent = "M";
eggSizeLButton.textContent = "L";
eggSizeXLButton.textContent = "XL";

const eggAmountParent = document.createElement("div");
const amountQuestion = document.createElement("p");
const amountInput = document.createElement("input");
const amountInputDiv = document.createElement("div");
amountInput.type = "number";

amountQuestion.textContent = "Specify how many eggs";
let chosenConsistency = "";
let chosenSize = "";

const boilingTimeInfo = document.createElement("p");
const boilingWaterInfo = document.createElement("p");
const boilingInfoDiv = document.createElement("div");
let boilingMinutesVariable = "";

const nextButton = createButton("Next");
nextButton.classList.add("nextButton");
nextButton.addEventListener("click", loadWellnessChoices);

inputStatus = false;
let inputValue = "";

//3:e sidan

const wellnessQuestion = document.createElement("p");
const wellnessQuestionParent = document.createElement("div");
const wellnessChoicesDiv = document.createElement("div");
const wellnessTotalDiv = document.createElement("div");

wellnessQuestion.classList.add("wellnessQuestion");
wellnessQuestionParent.classList.add("wellnessQuestionParent");
wellnessChoicesDiv.classList.add("wellnessChoicesDiv");
wellnessTotalDiv.classList.add("wellnessTotalDiv");

wellnessQuestion.textContent = "What would you like to start your day with";

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
        homeButton.addEventListener("click", () => loadEggChoice());
        divFooter.appendChild(homeButton);
    }

}

function loadEggChoice() {
    console.log("Hej!");

    changeLogoSize();

    mainScreen.innerHTML = "";
    divFooter.innerHTML = "";

    divFooter.appendChild(nextButton);

    //section 1
    eggConsistencyQuestion.classList.add("consistencyQuestion");
    eggConsistencyParent.classList.add("eggConsistencyParent");

    eggButtonsDiv.classList.add("eggButtonsDiv");
    hardButton.classList.add("hardButton", "eggButton");
    softButton.classList.add("softButton", "eggButton");
    runnyButton.classList.add("runnyButton", "eggButton");

    eggConsistencyParent.appendChild(eggConsistencyQuestion);
    eggButtonsDiv.append(hardButton, softButton, runnyButton);
    eggConsistencyParent.appendChild(eggButtonsDiv);
    mainScreen.appendChild(eggConsistencyParent);

    const allConsistencyButtons = document.querySelectorAll(".eggButton");
    for (let consistencyButton of allConsistencyButtons) {
        consistencyButton.addEventListener("click", function () {
            chosenConsistency = consistencyButton.textContent;
            console.log(chosenConsistency);

            checkIfBoilingIsReady();
        })
    }

    //section 2
    eggSizeParent.classList.add("eggSizeParent");
    eggSizeChoiceDiv.classList.add("eggSizeChoiceDiv");
    eggSizeQuestion.classList.add("sizeQuestion");
    eggSizeSButton.classList.add("eggSizeSButton", "sizeButton");
    eggSizeMButton.classList.add("eggSizeMButton", "sizeButton");
    eggSizeLButton.classList.add("eggSizeLButton", "sizeButton");
    eggSizeXLButton.classList.add("eggSizeXLButton", "sizeButton");

    eggSizeChoiceDiv.append(eggSizeSButton, eggSizeMButton, eggSizeLButton, eggSizeXLButton);
    eggSizeParent.append(eggSizeQuestion, eggSizeChoiceDiv);
    mainScreen.appendChild(eggSizeParent);

    const allSizeButtons = document.querySelectorAll(".sizeButton");
    for (let sizeButton of allSizeButtons) {
        sizeButton.addEventListener("click", function () {
            chosenSize = sizeButton.textContent;
            console.log(chosenSize);
            checkIfBoilingIsReady();
        })
    }

    //section 3
    eggAmountParent.classList.add("eggAmountParent");
    amountInput.classList.add("amountInput");
    amountQuestion.classList.add("amountQuestion");
    amountInputDiv.classList.add("amountInputDiv");

    eggAmountParent.append(amountQuestion, amountInputDiv);
    amountInputDiv.appendChild(amountInput);
    mainScreen.appendChild(eggAmountParent);

    amountInput.addEventListener("input", () => {

        inputValue = amountInput.value;
        console.log(inputValue, "värdet i input som användaren angav");

        inputStatus = true;

        checkIfBoilingIsReady();
    })

    //section 4

    boilingInfoDiv.append(boilingTimeInfo, boilingWaterInfo);
    mainScreen.appendChild(boilingInfoDiv);
    boilingInfoDiv.classList.add("boilingInfoDiv");
    boilingTimeInfo.classList.add("boilingTimeInfo");
    boilingWaterInfo.classList.add("boilingWaterInfo");

}

window.addEventListener("DOMContentLoaded", () => {
    loadPage("home");
})

function createButton(text) {
    const button = document.createElement("button");
    button.textContent = text;
    button.classList.add("button");
    return button;
}

function changeLogoSize() {
    divHeader.innerHTML = "";
    appLogo.classList.replace("appLogoBig", "appLogoSmall");
    divHeader.appendChild(appLogo);
}

function checkIfBoilingIsReady() {
    if (chosenConsistency && chosenSize && inputStatus && inputValue !== "") {
        nextButton.style.display = "block";

        getBoilingInfo(chosenConsistency, chosenSize, inputValue);
    }
}

function getBoilingInfo(selectedConsistency, selectedsize, inputValue) {
    console.log(selectedConsistency, selectedsize, inputValue, "getBoiling är anropad");

    boilingWaterInfo.textContent = "";
    console.log(boilingInfoDiv);
    console.log("Detta har valts:", selectedConsistency, selectedsize, inputValue);
    for (let object of eggBoilingTime) {
        console.log(object, "objektet som loopas genom nu");
        if (object.consistency === selectedConsistency && object.size === selectedsize) {
            boilingMinutesVariable = object.time;
            console.log(object.time, "koktiden för detta ägg");
            boilingTimeInfo.textContent = `Boiling Time: ${boilingMinutesVariable} minutes`;
            console.log(boilingMinutesVariable);

            break;
        }
    }

    //beräkna vattenmängd:
    const inputValueConverted = Number(inputValue);
    if (inputValueConverted <= 1) {
        boilingWaterInfo.textContent = "Use a small saucepan and fill it with enough water so that it covers the egg";

    } else if (inputValueConverted >= 2 && inputValueConverted <= 4) {
        boilingWaterInfo.textContent = "Use a medium sized saucepan and fill it with enough water so that the eggs are covered by 1-2 cm";

    } else {
        boilingWaterInfo.textContent = "Use a bigger saucepan and fill it with enough water so that all eggs are covered by at least 2 cm water";
    }

}

function loadWellnessChoices() {
    console.log("hej på dig")

    mainScreen.innerHTML = "";
    divFooter.innerHTML = "";

    const meditationButton = createButton("Meditation");
    const stretchingButton = createButton("Stretching exercises");
    const affirmationsButton = createButton("Positive affirmations");

    wellnessChoicesDiv.append(meditationButton, stretchingButton, affirmationsButton);
    wellnessQuestionParent.appendChild(wellnessQuestion);
    wellnessTotalDiv.append(wellnessQuestionParent, wellnessChoicesDiv);
    mainScreen.appendChild(wellnessTotalDiv);
}



