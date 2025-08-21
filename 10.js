function countTrue(arr) {
    return arr.filter(Boolean).length;
}

const userInput = prompt("Boolean qiymatlarni kiriting (true/false, vergul bilan ajrating): ");
const booleans = userInput.split(",").map(val => val.trim() === "true");
console.log(countTrue(booleans));
