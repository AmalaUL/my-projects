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


