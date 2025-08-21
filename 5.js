
function arrayProduct(arr) {
    return arr.reduce((product, num) => product * num, 1);
}

const userInput = prompt("Massivdagi sonlarni vergul bilan ajrating: ");
const numbers = userInput.split(",").map(Number);
console.log(arrayProduct(numbers));
