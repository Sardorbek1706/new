function sumOfCubes(arr) {
    return arr.reduce((sum, num) => sum + Math.pow(num, 3), 0);
}

const userInput = prompt("Massivdagi sonlarni vergul bilan ajrating: ");
const numbers = userInput.split(",").map(Number);
console.log(sumOfCubes(numbers));
