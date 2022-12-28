function getMultiples(below: number, multiples: number[]) {
  const output: number[] = [];

  let count = 1;

  while (count < below - 1) {
    console.log(count);
    count = count + 1;

    multiples.forEach((m) => {
      if (count % m === 0) output.push(count);
    });
  }

  return output;
}

const sample = getMultiples(1000, [3, 5]);
const total = sample.reduce((a, b) => a + b, 0);
console.log(sample);
console.log(total);
