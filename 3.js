function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

const userInput = prompt("Massivdagi sonlarni vergul bilan ajrating: ");
const numbers = userInput.split(",").map(Number);
console.log(minMax(numbers));
