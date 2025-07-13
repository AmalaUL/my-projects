//heading
const heading = document.createElement('h2');
heading.textContent = 'Word Counter App';

//create input box
const inputBox = document.createElement('input');
inputBox.style.marginRight = '20px';
inputBox.placeholder = 'type anything...';
inputBox.style.width = '200px';
inputBox.style.height = '30px';
inputBox.id = 'inputText';

//create analyze button
const analyzeButton = document.createElement('button');
analyzeButton.style.marginRight = '20px';
analyzeButton.textContent = 'Analyze';
analyzeButton.style.width = '70px';
analyzeButton.style.height = '30px';
analyzeButton.id = 'analyzeBtn';

//show result 
let result = document.createElement('div');
result.style.marginTop = '20px';

// add them to DOM
document.body.appendChild(heading);
document.body.appendChild(inputBox);
document.body.appendChild(analyzeButton);
document.body.appendChild(result);

let sentence = '';
let words = [];
let mostFrequentChar;
let mostFrequentWord;
let totalWords;
let totalCountOfCharWithSpace;
let totalCountOfCharWithoutSpace;

analyzeButton.addEventListener('click', countFunc);

function countFunc() {
    sentence = document.getElementById('inputText').value;
    words = sentence.trim().split(/\s+/);

    if (sentence.trim() === '') {
        alert('Please type something before clicking Analyze');
        return;
    }

    countWords();
    countCharsWithSpace();
    countCharsWithoutSpace();
    findMostFrequentWord();
    findMostFrequentChar();
    showResult();

    inputBox.value = '';//clear input field

}

function countWords() {
    totalWords = 0;
    words.map(ele => {
        if (/[a-zA-Z0-9]/.test(ele)) {
            totalWords++;
        }
    })
}

function countCharsWithSpace() {

    totalCountOfCharWithSpace = sentence.length;

}

function countCharsWithoutSpace() {
    totalCountOfCharWithoutSpace = 0;
    words.map(ele => {
        totalCountOfCharWithoutSpace += ele.length;
    })

}

function findMostFrequentWord() {
    let countOfEachWord = {};

    for (let word of words) {
        if (/[a-zA-Z]/.test(word)) {
            countOfEachWord[word] = (countOfEachWord[word] || 0) + 1;
        }

    }

    let maxCount = 0;
    for (let word in countOfEachWord) {
        if (countOfEachWord[word] >= maxCount) {
            maxCount = countOfEachWord[word];
            mostFrequentWord = word;
        }
    }
    if (maxCount === 1) {
        mostFrequentWord = 'None of the word repeated'
    }

}


function findMostFrequentChar() {

    let charWithCountObj = {};

    for (let i = 0; i < sentence.split('').length; i++) {
        if (/[a-zA-Z]/.test(sentence[i])) {
            charWithCountObj[sentence[i]] = (charWithCountObj[sentence[i]] || 0) + 1
        }
    }

    let maxCount = 0;
    for (let char in charWithCountObj) {
        if (charWithCountObj[char] >= maxCount) {
            maxCount = charWithCountObj[char];
            mostFrequentChar = char;
        }
    }
    if (maxCount === 1) {
        mostFrequentChar = "None of the character repeated"
    }
}

function showResult() {
    result.innerHTML = `<strong><u>Result:</u></strong><br>
         Sentence: ${sentence},<br>
         TotalWords: ${totalWords},<br>
         TotalCountOfCharWithSpace: ${totalCountOfCharWithSpace},<br>
         TotalCountOfCharWithoutSpace: ${totalCountOfCharWithoutSpace},<br>
         MostFrequentWord: ${mostFrequentWord},<br>
         MostFrequentChar: ${mostFrequentChar} `

}
