const ispnum = (num) => {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

const fibonacci = (num) => {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

const findNxtPrmFib = (number, fibStar) => {
  var fib = fibonacci(fibStar);
  return fib > number && ispnum(fib) ? fib : findNxtPrmFib(number, fibStar + 1);
};

const nxtPrmFib = (number) => findNxtPrmFib(number, 1);

const response = nxtPrmFib(20);
console.log(`Result: ${response}`);
