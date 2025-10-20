const phone = document.querySelector(".phone");
const divHeader = document.querySelector(".divHeader");
const mainScreen = document.querySelector(".mainScreen");
const divFooter = document.querySelector(".divFooter");

//1:a sidan
const homeButton = createButton("Get your day started");

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
let chosenWellness = "";

const boilingTimeInfo = document.createElement("p");
const boilingWaterInfo = document.createElement("p");
const boilingInfoDiv = document.createElement("div");
let boilingMinutesVariable = "";

let inputValue = "";

const nextButton = createButton("Next");
nextButton.classList.add("nextButton");
nextButton.addEventListener("click", () => {

    if (!chosenConsistency || !chosenSize || !inputValue || Number(inputValue) <= 0) {

        boilingInfoDiv.innerHTML = "";
        const promptToChoose = document.createElement("p");
        promptToChoose.textContent = "Please select consistency, size and amount";
        promptToChoose.classList.add("promptToChoose", "font-zen-text", "smallerFontSize");
        boilingInfoDiv.appendChild(promptToChoose);

        return;
    }

    loadPage("wellnessChoices")
});

//3:e sidan

const backToLastPageDiv = document.createElement("div");

const wellnessQuestion = document.createElement("p");
const wellnessQuestionParent = document.createElement("div");
const wellnessChoicesDiv = document.createElement("div");
const wellnessTotalDiv = document.createElement("div");

wellnessQuestion.classList.add("wellnessQuestion", "font-zen-text");
wellnessQuestionParent.classList.add("wellnessQuestionParent");
wellnessChoicesDiv.classList.add("wellnessChoicesDiv");
wellnessTotalDiv.classList.add("wellnessTotalDiv");

wellnessQuestion.textContent = "Choose a mindful moment for today";

const meditationButton = createButton("Meditation");
const stretchingButton = createButton("Stretching exercises");
const affirmationsButton = createButton("Positive affirmations");

meditationButton.classList.add("meditationButton");
stretchingButton.classList.add("stretchingButton");
affirmationsButton.classList.add("affirmationsButton");

meditationButton.addEventListener("click", () => {
    chosenWellness = meditationButton.textContent;
    loadPage("summaryPage");

})

stretchingButton.addEventListener("click", () => {
    chosenWellness = stretchingButton.textContent;
    loadPage("summaryPage");
})

affirmationsButton.addEventListener("click", () => {
    chosenWellness = affirmationsButton.textContent;
    loadPage("summaryPage");
})

//5:e sidan
const timerDiv = document.createElement("div");
const timer = document.createElement("p");
const startButton = createButton("Start");
const preferencesDiv = document.createElement("div");
const todaysPreferences = document.createElement("p");
const usersPreferences = document.createElement("p");

timerDiv.classList.add("timerDiv");
timer.classList.add("timer", "font-zen-timer");
startButton.classList.add("startButton", "timerButtons");
preferencesDiv.classList.add("preferencesDiv", "font-zen-text");
todaysPreferences.classList.add("todaysPreferences");
usersPreferences.classList.add("usersPreferences");

const appLogo = document.createElement("img");
appLogo.src = "./app_logga/egg_heart_zen2.png";
appLogo.alt = "Zen Egg Logo";

//6:e sidan

const pauseButton = createButton("Pause");
const cancelButton = createButton("Cancel");

const timerButtonsDiv = document.createElement("div");
timerButtonsDiv.classList.add("timerButtonsDiv");

pauseButton.classList.add("pauseButton", "timerButtons");
cancelButton.classList.add("cancelButton", "timerButtons");

let timerInterval;
let timeRemaining = 0;
let isPaused = false;

//för stretching -och affirmationssidan 

let currentExerciseIndex = 0;
let currentAffirmationIndex = 0;

const nextExerciseButton = createButton("Next exercise");
const nextAffirmationButton = createButton("Next affirmation");

//7:e sidan 

const finalElementsDiv = document.createElement("div");
finalElementsDiv.classList.add("finalElementsDiv");
//övrigt

let currentPage = "home";
let previousPage = null;
let pageHistory = [];

function loadPage(page, isBack = false) {
    console.log(`Navigerar från ${currentPage} till ${page}`);
    previousPage = currentPage;
    console.log(`previousPage: ${previousPage}, currentPage: ${currentPage}`);

    if (!isBack && currentPage !== page) {
        pageHistory.push(currentPage);
    }

    currentPage = page;

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
        appNameParent.appendChild(appLogoParent);

        if (appLogo.classList.contains("appLogoSmall")) {
            appLogo.classList.replace("appLogoSmall", "appLogoBig");
        }

        appLogo.classList.add("appLogoBig");

        appLogoParent.appendChild(appLogo); 76
        divFooter.appendChild(homeButton);
    }

    if (page === "eggChoices") {
        const comesFromHome = previousPage === "home";
        loadEggChoice(comesFromHome);
    }

    if (page === "wellnessChoices") {
        loadWellnessChoices();
    }

    if (page === "summaryPage") {
        loadSummaryPage();
    }
}

homeButton.addEventListener("click", () => loadPage("eggChoices"));

function loadEggChoice(comesFromHome) {
    console.log("Hej!");

    changeLogoSize();

    mainScreen.innerHTML = "";
    divFooter.innerHTML = "";

    mainScreen.style.gap = "40px";

    if (comesFromHome) {
        chosenConsistency = "";
        chosenSize = "";
        inputValue = "";

        const allConsistencyButtons = [hardButton, softButton, runnyButton];
        allConsistencyButtons.forEach(button => button.classList.remove("selected", "buttonPressed"));

        const allSizeButtons = [eggSizeSButton, eggSizeMButton, eggSizeLButton, eggSizeXLButton];
        allSizeButtons.forEach(button => button.classList.remove("selected", "buttonPressed"));

        amountInput.value = "";
    } else {
        amountInput.value = inputValue;
    }

    divFooter.appendChild(nextButton);

    //section 1
    eggConsistencyQuestion.classList.add("consistencyQuestion", "font-zen-text");
    eggConsistencyParent.classList.add("eggConsistencyParent");

    eggButtonsDiv.classList.add("eggButtonsDiv");
    hardButton.classList.add("hardButton", "eggButton", "font-zen-buttons");
    softButton.classList.add("softButton", "eggButton", "font-zen-buttons");
    runnyButton.classList.add("runnyButton", "eggButton", "font-zen-buttons");

    eggConsistencyParent.appendChild(eggConsistencyQuestion);
    eggButtonsDiv.append(hardButton, softButton, runnyButton);
    eggConsistencyParent.appendChild(eggButtonsDiv);
    mainScreen.appendChild(eggConsistencyParent);

    const allConsistencyButtons = document.querySelectorAll(".eggButton");
    for (let consistencyButton of allConsistencyButtons) {
        consistencyButton.addEventListener("click", function () {

            for (let b of allConsistencyButtons) {
                b.classList.remove("selected", "buttonPressed");
            }

            consistencyButton.classList.add("selected", "buttonPressed");

            chosenConsistency = consistencyButton.textContent;
            console.log(chosenConsistency);

            checkIfBoilingIsReady();
        })
    }

    //section 2
    eggSizeParent.classList.add("eggSizeParent");
    eggSizeChoiceDiv.classList.add("eggSizeChoiceDiv");
    eggSizeQuestion.classList.add("sizeQuestion", "font-zen-text");
    eggSizeSButton.classList.add("eggSizeSButton", "sizeButton", "font-zen-buttons", "hoverButton");
    eggSizeMButton.classList.add("eggSizeMButton", "sizeButton", "font-zen-buttons", "hoverButton");
    eggSizeLButton.classList.add("eggSizeLButton", "sizeButton", "font-zen-buttons", "hoverButton");
    eggSizeXLButton.classList.add("eggSizeXLButton", "sizeButton", "font-zen-buttons", "hoverButton");

    eggSizeChoiceDiv.append(eggSizeSButton, eggSizeMButton, eggSizeLButton, eggSizeXLButton);
    eggSizeParent.append(eggSizeQuestion, eggSizeChoiceDiv);
    mainScreen.appendChild(eggSizeParent);

    const allSizeButtons = document.querySelectorAll(".sizeButton");
    for (let sizeButton of allSizeButtons) {
        sizeButton.addEventListener("click", function () {

            for (let b of allSizeButtons) {
                b.classList.remove("selected", "buttonPressed");
            }

            sizeButton.classList.add("selected", "buttonPressed");
            chosenSize = sizeButton.textContent;
            console.log(chosenSize);
            checkIfBoilingIsReady();
        })
    }

    //section 3
    eggAmountParent.classList.add("eggAmountParent");
    amountInput.classList.add("amountInput", "font-zen-text");
    amountQuestion.classList.add("amountQuestion", "font-zen-text");
    amountInputDiv.classList.add("amountInputDiv");

    eggAmountParent.append(amountQuestion, amountInputDiv, boilingInfoDiv);
    amountInputDiv.appendChild(amountInput);
    mainScreen.appendChild(eggAmountParent);

    amountInput.addEventListener("input", () => {
        inputValue = Number(amountInput.value);
        amountInput.classList.add("buttonPressed");
        console.log(inputValue, "värdet i input som användaren angav");
        if (inputValue <= 0) {

            boilingInfoDiv.innerHTML = "";
            const promptToChoose = document.createElement("p");
            promptToChoose.style.fontSize = "17px";
            promptToChoose.textContent = "Invalid amount";
            promptToChoose.classList.add("promptToChoose", "font-zen-text");
            boilingInfoDiv.appendChild(promptToChoose);
        } else if (inputValue > 0) {
            checkIfBoilingIsReady();
        }
    })

    //section 4

    boilingInfoDiv.append(boilingTimeInfo, boilingWaterInfo);
    boilingInfoDiv.classList.add("boilingInfoDiv");
    boilingTimeInfo.classList.add("boilingTimeInfo", "font-zen-text", "smallerFontSize");
    boilingWaterInfo.classList.add("boilingWaterInfo", "font-zen-text", "smallerFontSize");

}

window.addEventListener("DOMContentLoaded", () => {
    loadPage("home");
})

function createButton(text) {
    const button = document.createElement("button");
    button.textContent = text;
    button.classList.add("button", "font-zen-buttons");
    return button;
}

function createBackButton() {

    const backToChoicesButton = document.createElement("button");
    const backArrow = document.createElement("img");
    backArrow.src = "./ikoner/back_arrow.png";

    backToChoicesButton.appendChild(backArrow);
    backToChoicesButton.classList.add("backButton");
    backArrow.classList.add("backArrow");

    backToChoicesButton.addEventListener("click", () => {

        clearInterval(timerInterval);
        isPaused = true;
        timerStarted = false;

        console.log(pageHistory, "historik");
        if (pageHistory.length > 0) {
            const previousPage = pageHistory.pop();
            loadPage(previousPage, true);
        }
    });

    return backToChoicesButton;
}

function changeLogoSize() {
    divHeader.innerHTML = "";
    appLogo.classList.replace("appLogoBig", "appLogoSmall");
    divHeader.appendChild(appLogo);
}

function checkIfBoilingIsReady() {

    if (chosenConsistency && chosenSize && inputValue && Number(inputValue > 0)) {
        getBoilingInfo(chosenConsistency, chosenSize, inputValue);
    }
    else {
        boilingTimeInfo.textContent = "";
        boilingWaterInfo.textContent = "";
    }

}

function getBoilingInfo(selectedConsistency, selectedsize, inputValue) {
    console.log(selectedConsistency, selectedsize, inputValue, "getBoiling är anropad");

    boilingWaterInfo.textContent = "";
    boilingInfoDiv.textContent = "";

    console.log("Detta har valts:", selectedConsistency, selectedsize, inputValue);
    for (let object of eggBoilingTime) {
        console.log(object, "objektet som loopas genom nu");
        if (object.consistency === selectedConsistency && object.size === selectedsize) {
            boilingMinutesVariable = object.time;
            console.log(object.time, "koktiden för detta ägg");
            boilingTimeInfo.textContent = `Boiling Time: ${boilingMinutesVariable} minutes`;
            console.log(boilingMinutesVariable);

            boilingInfoDiv.append(boilingTimeInfo, boilingWaterInfo);

            break;
        }
    }

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

    backToLastPageDiv.innerHTML = "";
    backToLastPageDiv.classList.add("backToLastPageDiv");

    const backToChoicesButton = createBackButton();
    backToLastPageDiv.appendChild(backToChoicesButton);

    wellnessQuestionParent.append(wellnessQuestion, wellnessChoicesDiv);
    wellnessChoicesDiv.append(meditationButton, stretchingButton, affirmationsButton);
    wellnessTotalDiv.append(backToLastPageDiv, wellnessQuestionParent);
    mainScreen.appendChild(wellnessTotalDiv);
}


const summaryDiv = document.createElement("div");
summaryDiv.classList.add("summaryDiv");

let chosenSizeExtended = "";
let eggsOfInputValue = "";

let timerStarted = false;

function loadSummaryPage() {
    wellnessQuestionParent.innerHTML = "";
    wellnessChoicesDiv.innerHTML = "";
    mainScreen.innerHTML = "";

    clearInterval(timerInterval);
    backToLastPageDiv.innerHTML = "";
    const backToChoicesButton = createBackButton();
    backToLastPageDiv.appendChild(backToChoicesButton);
    mainScreen.appendChild(backToLastPageDiv);

    isPaused = false;
    timerStarted = false;
    timeRemaining = boilingMinutesVariable * 60;

    timer.textContent = boilingMinutesVariable;
    if (boilingMinutesVariable < 10) {
        timer.textContent = `0${boilingMinutesVariable}:00`;
    } else {
        timer.textContent = `${boilingMinutesVariable}:00`;
    }

    if (inputValue < 2) {
        eggsOfInputValue = `${inputValue} egg`;
    } else {
        eggsOfInputValue = `${inputValue} eggs`;
    }

    if (chosenSize === "S") {
        chosenSizeExtended = `${chosenSize}` + `mall`;
    } else if (chosenSize === "M") {
        chosenSizeExtended = `${chosenSize}` + `edium`;
    } else if (chosenSize === "L") {
        chosenSizeExtended = `${chosenSize}` + `arge`;
    } else {
        chosenSizeExtended = `${chosenSize}` + `arge`;
    }

    showButtons("ready");

    if (chosenWellness === "Meditation") {
        preferencesDiv.innerHTML = "";
        const meditationMessage = document.createElement("p");
        meditationMessage.classList.add("meditationMessage", "font-zen-text");
        meditationMessage.textContent = "Find a comfortable place to sit or stand ";
        minfulnessTextDiv.appendChild(meditationMessage);

        timerDiv.append(timer, timerButtonsDiv);
        todaysPreferences.textContent = `Todays preferences:`;
        usersPreferences.textContent = `${chosenConsistency}, ${chosenSizeExtended}, ${eggsOfInputValue}, ${chosenWellness}`;
        preferencesDiv.append(todaysPreferences, usersPreferences, meditationMessage);
        summaryDiv.append(timerDiv, preferencesDiv);

        mainScreen.appendChild(summaryDiv);
    } else if (chosenWellness === "Stretching exercises" || chosenWellness === "Positive affirmations") {
        preferencesDiv.innerHTML = "";
        timerDiv.append(timer, timerButtonsDiv);
        todaysPreferences.textContent = `Todays preferences:`;
        usersPreferences.textContent = `${chosenConsistency}, ${chosenSizeExtended}, ${eggsOfInputValue}, ${chosenWellness}`;
        preferencesDiv.append(todaysPreferences, usersPreferences);
        summaryDiv.append(timerDiv, preferencesDiv);

        mainScreen.appendChild(summaryDiv);
    }

}

const alertSound = new Audio("./audio/morning-joy-alarm-clock-20961.mp3");

function startTimer(duration) {

    timeRemaining = duration;
    updateTimerDisplay();
    showButtons("running");

    preferencesDiv.innerHTML = "";

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (!isPaused && timeRemaining > 0) {
            timeRemaining--;
            updateTimerDisplay();
        } else if (timeRemaining <= 0) {
            clearInterval(timerInterval);

            alertSound.currentTime = 0;
            alertSound.volume = 0.6;
            alertSound.play().catch((error) => {
                console.log("Kunde inte spela ljudet:", error);
            })

            alert("Your eggs are ready!");

            alertSound.pause();
            alertSound.currentTime = 0;

            minfulnessTextDiv.remove();
            timerButtonsDiv.innerHTML = "";
            finalElementsDiv.innerHTML = "";

            const finalEggIcon = document.createElement("img");
            finalEggIcon.src = "./ikoner/lotus.png";
            finalEggIcon.alt = "Happy egg logo";
            finalEggIcon.classList.add("finalEggIcon");

            const finalMessage = document.createElement("p");
            finalMessage.innerHTML = "Have a wonderful day and <br> bon appétit!";
            finalMessage.classList.add("finalMessage", "font-zen-text");
            finalElementsDiv.append(finalMessage, finalEggIcon);
            mainScreen.appendChild(finalElementsDiv);

            const doneButton = createButton("Done");
            doneButton.addEventListener("click", () => {
                loadPage("home");
            })

            divFooter.innerHTML = "";
            divFooter.appendChild(doneButton);
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timer.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function showButtons(state) {
    timerButtonsDiv.innerHTML = "";

    if (state === "ready") {
        timerButtonsDiv.append(startButton);
    } else if (state === "running") {
        timerButtonsDiv.append(pauseButton, cancelButton);
    } else if (state === "paused") {
        timerButtonsDiv.append(startButton, cancelButton);
    } else if (state === "finished") {
        timerButtonsDiv.append(startButton);
    }
}

let minfulnessTextDiv = document.createElement("div");
minfulnessTextDiv.classList.add("mindfulnessTextDiv");


startButton.addEventListener("click", () => {
    if (!timerStarted) {
        timerStarted = true;
        startTimer(timeRemaining);

        minfulnessTextDiv.innerHTML = "";

        if (chosenWellness === "Meditation") {

        } else if (chosenWellness === "Stretching exercises") {
            currentExerciseIndex = 0;
            showStretchingExercise(currentExerciseIndex);

        } else if (chosenWellness === "Positive affirmations") {
            currentAffirmationIndex = 0;
            showPositiveAffirmations(currentAffirmationIndex);
        }

        mainScreen.appendChild(minfulnessTextDiv);

    } else if (isPaused) {
        isPaused = false
        showButtons("running");
    }
});

function showPositiveAffirmations(index) {
    minfulnessTextDiv.innerHTML = "";

    const affirmation = positiveAffirmations[index];
    let affirmationMessage = document.createElement("p");
    affirmationMessage.classList.add("affirmationMessage", "font-zen-text");
    affirmationMessage.textContent = affirmation.message;

    minfulnessTextDiv.appendChild(affirmationMessage);
    mainScreen.appendChild(minfulnessTextDiv);

    if (index < positiveAffirmations.length - 1) {
        console.log(index, "indexet");
        nextAffirmationButton.style.display = "inline-block";
        divFooter.appendChild(nextAffirmationButton);
    } else {
        nextAffirmationButton.style.display = "none";
    }
}

function showStretchingExercise(index) {
    minfulnessTextDiv.innerHTML = "";
    mainScreen.style.gap = "0px";
    const exercise = stretchingInstructionsArray[index];

    let stretchingTitle = document.createElement("p");
    let stretchingInstructions = document.createElement("p");

    stretchingTitle.textContent = exercise.title;
    stretchingInstructions.textContent = exercise.description;

    stretchingTitle.classList.add("stretchingTitle", "font-zen-text");
    stretchingInstructions.classList.add("stretchingInstructions", "font-zen-text");

    minfulnessTextDiv.append(stretchingTitle, stretchingInstructions);

    if (index < stretchingInstructionsArray.length - 1) {
        nextExerciseButton.style.display = "inline-block";
        divFooter.appendChild(nextExerciseButton);

    } else {
        nextExerciseButton.style.display = "none";
    }
}

nextExerciseButton.addEventListener("click", () => {
    currentExerciseIndex++;
    showStretchingExercise(currentExerciseIndex);
})

nextAffirmationButton.addEventListener("click", () => {
    currentAffirmationIndex++;
    showPositiveAffirmations(currentAffirmationIndex);
})

pauseButton.addEventListener("click", () => {
    isPaused = true;
    showButtons("paused");
});

cancelButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    isPaused = false;
    timerStarted = false;
    timeRemaining = 0;
    updateTimerDisplay();
    showButtons("ready");

    loadPage("home");
});