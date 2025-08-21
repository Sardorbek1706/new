function returnVowel(arr) {
    const vowels = 'aeiou';
    return arr.map(str => str.toLowerCase().split('').filter(char => vowels.includes(char)).join(''));
}

const userInput = prompt("So'zlarni vergul bilan ajrating: ");
const words = userInput.split(",");
console.log(returnVowel(words));
