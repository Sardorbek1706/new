function formatPhoneNumber(nums) {
    return `(${nums.slice(0, 3).join('')}) ${nums.slice(3, 6).join('')}-${nums.slice(6).join('')}`;
}

const userInput = prompt("Telefon raqamidagi raqamlarni vergul bilan ajrating: ");
const numbers = userInput.split(",").map(Number);
console.log(formatPhoneNumber(numbers));
