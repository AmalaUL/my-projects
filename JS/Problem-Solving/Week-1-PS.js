//Problem 1: Longest Word in a Sentence
//Write a function findLongestWord(sentence) that takes a sentence (string) and returns the longest word in that sentence.
//If multiple words are the same length, return the first one.

function findLongestWord(sentence) {
    let words = sentence.split(' ');//split using space btw words
    // //appraoch 1 
    // let countObj = {}
    // words.map(ele => {
    //     countObj[ele] = ele.length;
    // })
    // let maxCount = 0;
    // let longestWord;
    // for (let key in countObj) {
    //     if (countObj[key] >= maxCount) {//countObj[key] > maxCount -removing equals will give first longest word ;
    //         longestWord = key;
    //     }
    // }
    // return longestWord;

    //approach 2: optimization
    let longestWord = "";
    for (let word of words) {
        if (word.length >= longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));// quick; 
console.log(findLongestWord("Coding is really fun and challenging"));//challenging


//Problem 2: Count Vowels in a word
function countVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return word.toLowerCase().split('').filter(char => vowels.includes(char)).length
}


console.log(countVowels("Hello World"));         // ➞ 3
console.log(countVowels("Javascript"));          // ➞ 3
console.log(countVowels("AEIOUaeiou"));          // ➞ 10
console.log(countVowels("bcdfghjkl"));           // ➞ 0

//Problem 3: Remove Duplicate Characters
function removeDuplicates(word) {
    //approach 1 using set inbuilt option
    //return [...new Set(word)].join('');

    //approach 2 - using loop with includes
    const wordArr = word.toLowerCase().split('');
    let newArr = [];
    // for (let i = 0; i < wordArr.length; i++) {
    //     if (!(newArr.includes(wordArr[i]))) {
    //         newArr.push(wordArr[i])
    //     }
    // }
    // return newArr.join('');

    //approach 3 - using loop without includes
    // for (let ele of wordArr) {
    //     if (!(newArr.some(item => item === ele))) {
    //         newArr.push(ele);
    //     }
    // }
    // return newArr.join('');

    //approach 4: without any inbuilt method
    let seen = {};
    for (let ele of wordArr) {
        if (!seen[ele]) {
            newArr.push(ele);
            seen[ele] = true;
        }
    }
    return newArr.join('');
}

console.log(removeDuplicates("programming"));//➞ "progamin"
console.log(removeDuplicates("hello"));//➞ "helo"
console.log(removeDuplicates("aabbcc"));//➞ "abc"

//Problem 4: Capitalize Words
function capitalizeWords(sentence) {
    return sentence.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

}

console.log(capitalizeWords("this is a test")); // ➞ "This Is A Test"
console.log(capitalizeWords("hello world"));// ➞ "Hello World"

//Problem 5: Group Words by First Letter
function groupByFirstLetter(arr) {

    let groupByObj = {};
    let firstLetter;

    for (let key of arr) {
        firstLetter = key[0].toLowerCase();
        if (!(groupByObj[firstLetter])) {
            groupByObj[firstLetter] = [key]
        } else {
            groupByObj[firstLetter].push(key)
        }
    }
    return groupByObj;
}

console.log(groupByFirstLetter(["apple", "banana", "Apricot", "blueberry", "cherry"]));

//Problem 6 – Count Repeated Elements
function countRepeatedElements(arr) {
    let elements = {};
    for (let key of arr) {
        elements[key] = (elements[key] || 0) + 1;
    }
    let repeatedElements = {}
    for (let char in elements) {
        if (elements[char] > 1) {
            repeatedElements[char] = elements[char]
        }
    }
    return Object.keys(repeatedElements).length > 0 ? repeatedElements : "No repeated elements";

}
console.log(countRepeatedElements([1, 2, 2, 3, 3, 3, 4, 5]))// ➞ { 2: 2, 3: 3 }
console.log(countRepeatedElements([10, 20, 30]))// ➞ "No repeated elements"
console.log(countRepeatedElements([7, 7, 7, 7]))// ➞ { 7: 4 }

//Problem 6-Character Frequency Counter
function mostFrequentChar(str) {
    let charCount = {};
    let strArr = str.toLowerCase().trim().split(/\s+/).join('');
    for (let i = 0; i < strArr.length; i++) {
        charCount[strArr[i]] = (charCount[strArr[i]] || 0) + 1;
    }

    // return one character
    // let maxCount = 0;
    // let mostFrequentChar;
    // for (let key in charCount) {
    //     if (charCount[key] > maxCount) {
    //         maxCount = charCount[key];
    //         mostFrequentChar = key
    //     }
    // }
    // return mostFrequentChar;

    //to return all characters which has same count
    let maxCount = Math.max(...Object.values(charCount));//assign max count value
    return Object.keys(charCount).filter(char => charCount[char] === maxCount)
}

console.log(mostFrequentChar("The quick brownie fox jumps over the lazy dog"));// ['e','o']

function firstNonRepeatingChar(str) {
    const strArr = str.toLowerCase().trim().split(/\s+/).join('');
    let countOfChar = {};
    for (let i = 0; i < strArr.length; i++) {
        countOfChar[strArr[i]] = (countOfChar[strArr[i]] || 0) + 1
    }


    for (let key of strArr) {//considering strArr because countofChar object might not store the key in same order sometimes
        if (countOfChar[key] === 1) {
            return key;
        }
    }

    return null;
}

console.log(firstNonRepeatingChar("aabbcde"));        // 'c'
console.log(firstNonRepeatingChar("aab bcc"));         // null
console.log(firstNonRepeatingChar("Stress"));         // 't'
