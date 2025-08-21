function spelling(word) {
    return word.split('').map((_, i) => word.slice(0, i + 1));
}

const userInput = prompt("So'zni kiriting: ");
console.log(spelling(userInput));
