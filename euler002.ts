const fibnums: number[] = [];

function fib(a: number, b: number) {
  if (a > 4000 * 1000) return;
  fibnums.push(a);
  const c = a + b;
  fib(b, c);
}

fib(1, 2);

console.log(fibnums);

// check even

const evenfibs = fibnums.filter((x) => x % 2 === 0);

console.log(evenfibs);

const sum = evenfibs.reduce((a, b) => a + b, 0);
console.log(sum);
