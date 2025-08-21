function findOddNumber(arr) {
    return arr.find(num => num % 2 !== 0);
}

const userInput = prompt("Massivdagi sonlarni vergul bilan ajrating: ");
const numbers = userInput.split(",").map(Number);
console.log(findOddNumber(numbers));
