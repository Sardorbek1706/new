function numberSplit(n) {
    const half = Math.floor(Math.abs(n) / 2);
    const rightHalf = Math.ceil(Math.abs(n) / 2);
    return n < 0 ? [-half, -rightHalf] : [half, rightHalf];
}

const userInput = prompt("Iltimos, bir son kiriting: ");
const number = parseInt(userInput);
console.log(numberSplit(number));
