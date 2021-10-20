const prompt = require("prompt-sync")();
const fib = (n) => {
  if (n == 0) {
    console.log("number should be greater than zero");
    return;
  }
  let firstElement = 0;
  let secondElement = 1;
  let temp = 0;
  for (let i = 0; i < n; i++) {
    console.log(firstElement);
    temp = firstElement + secondElement;
    firstElement = secondElement;
    secondElement = temp;
  }
};
try {
  const num = parseInt(prompt("enter the number :"));
  if (num === NaN) console.log("enter valid number");
  fib(num);
} catch (error) {
  console.log(error);
}
