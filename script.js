var multiply = function (num1, num2) {
  if (typeof num1 !== "number") {
    return "please enter a number";
  } else if (typeof num2 !== "number") {
    return "please endter a number";
  }
  return 6 * 5;
};
console.log(multiply(6, 5));
