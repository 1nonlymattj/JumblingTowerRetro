document.addEventListener('DOMContentLoaded', () => {
    let storedValue = sessionStorage.getItem('sentWarning');
    storeArrays();

    if (storedValue == null) {
        // If value doesn't exist in sessionStorage, set it to true
        sessionStorage.setItem('sentWarning', true);
        AlertDialog();
    } else {
        rows = 16;
        createTable(rows);
    }
});

function removeBlock(cell) {
    if (cell.classList.contains('hidden')) {
        cell.classList.remove('hidden');
    } else {
        cell.classList.add('hidden');
    }
}

function setTowerCounts(blocks) {
    blocks = Number(blocks);
    if (blocks == 16) {
        wentWellCards = 15;
        notWellCards = 15;
        learnCards = 6;
        improveCards = 6;
        funCards = 6;
    } else {
        wentWellCards = blocks;
        notWellCards = blocks;
        learnCards = Math.floor(blocks / 3);
        improveCards = Math.floor(blocks / 3);
        funCards = Math.floor(blocks / 3);

        totalCards = wentWellCards + notWellCards + learnCards + improveCards + funCards;
        if (totalCards != blocks * 3) {
            learnCards += 1;
            totalCards = wentWellCards + notWellCards + learnCards + improveCards + funCards;
            if (totalCards != blocks * 3) {
                improveCards += 1;
                totalCards = wentWellCards + notWellCards + learnCards + improveCards + funCards;
            }
            if (totalCards != blocks * 3) {
                funCards += 1;
            }
        }
    }
    wentWellEnd = wentWellCards;
    notWellStart = wentWellEnd + 1;
    notWellEnd = wentWellEnd + notWellCards;
    learnStart = notWellEnd + 1;
    learnEnd = notWellEnd + learnCards
    improveStart = learnEnd + 1;
    improveEnd = learnEnd + improveCards;
    funStart = improveEnd + 1;
    funEnd = blocks * 3;

}

function getTowerQuestions(cell) {
    if (cell.textContent >= wentWellStart && cell.textContent <= wentWellEnd) {
        towerQuestionKey = "Green"
        towerQuestionPool = wentWell;
    } else if (cell.textContent >= notWellStart && cell.textContent <= notWellEnd) {
        towerQuestionKey = "Black"
        towerQuestionPool = notWell;
    } else if (cell.textContent >= learnStart && cell.textContent <= learnEnd) {
        towerQuestionKey = "Blue"
        towerQuestionPool = learned;
    } else if (cell.textContent >= improveStart && cell.textContent <= improveEnd) {
        towerQuestionKey = "Orange"
        towerQuestionPool = improve;
    } else if (cell.textContent >= funStart && cell.textContent <= funEnd) {
        towerQuestionKey = "Purple"
        towerQuestionPool = fun;
    }
    selectTowerQuestion(towerQuestionPool, towerQuestionKey, cell);
}

function selectTowerQuestion(towerQuestions, key, cell) {
    let randomNumber = Math.floor(Math.random() * (towerQuestions.length));
    let selectedQuestion = towerQuestions[randomNumber]
    if (key == "Green") {
        wentWellTowerCard(selectedQuestion);
    } else if (key == "Black") {
        notWellTowerCard(selectedQuestion);
    } else if (key == "Blue") {
        learnedTowerCard(selectedQuestion);
    } else if (key == "Orange") {
        improvedTowerCard(selectedQuestion);
    } else if (key == "Purple") {
        funTowerCard(selectedQuestion);
    }
    towerQuestions.splice(randomNumber, 1);
    console.log(towerQuestions.length);
    removeBlock(cell);
}

function storeArrays() {
    wentWellStored = sessionStorage.getItem('wentWell');
    notWellStored = sessionStorage.getItem('notWell');
    learnedStored = sessionStorage.getItem('learned');
    improvedStored = sessionStorage.getItem('improve');
    funStored = sessionStorage.getItem('fun');

    if (!wentWellStored) {
        wentWell = wentWell;
        sessionStorage.setItem("wentWell", JSON.stringify(wentWell));
    } else {
        wentWell = JSON.parse(wentWellStored);
    }

    if (!notWellStored) {
        notWell = notWell;
        sessionStorage.setItem("notWell", JSON.stringify(notWell));
    } else {
        notWell = JSON.parse(notWellStored);
    }

    if (!learnedStored) {
        learned = learned;
        sessionStorage.setItem("learned", JSON.stringify(learned));
    } else {
        learned = JSON.parse(learnedStored);
    }

    if (!improvedStored) {
        improve = improve;
        sessionStorage.setItem("improve", JSON.stringify(improve));
    } else {
        improve = JSON.parse(improvedStored);
    }

    if (!funStored) {
        fun = fun;
        sessionStorage.setItem("fun", JSON.stringify(fun));
    } else {
        fun = JSON.parse(funStored);
    }
}

function getFreshArrays() {
    if (wentWellStored) {
        // If the string representation of the array exists, parse it back into an array
        wentWell = JSON.parse(wentWellStored);
        return wentWell;
    }

    if (notWellStored) {
        // If the string representation of the array exists, parse it back into an array
        notWell = JSON.parse(notWellStored);
        return notWell;
    }

    if (learnedStored) {
        // If the string representation of the array exists, parse it back into an array
        learned = JSON.parse(learnedStored);
        return learned;
    }

    if (improvedStored) {
        // If the string representation of the array exists, parse it back into an array
        improve = JSON.parse(improvedStored);
        return improve;
    }

    if (funStored) {
        // If the string representation of the array exists, parse it back into an array
        fun = JSON.parse(funStored);
        return fun;
    }
}



function getTotal(...cards) {
    // Initialize sum
    let totalCards = 0;

    // Iterate through the variables and sum their values
    for (let i = 0; i < cards.length; i++) {
        totalCards += cards[i];
    }

    return totalCards;
}