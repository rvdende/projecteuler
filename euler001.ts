function getMultiples(below: number, multiples: number[]) {
  const output: number[] = [];

  let count = 1;

  while (count < below - 1) {
    console.log(count);
    count = count + 1;
    let isMultiple = false;
    multiples.forEach((m) => {
      if (count % m === 0) isMultiple = true;
    });

    if (isMultiple) output.push(count);
  }

  return output;
}

const sample = getMultiples(1000, [3, 5]);
const total = sample.reduce((a, b) => a + b, 0);
console.log(sample);
console.log(total);
