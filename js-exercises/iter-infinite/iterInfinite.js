function* count(start = 0, step = 1) {
  let i = start;
  while (true) {
    yield i;
    i += step;
  }
}

function* cycle(input, n = Infinity) {
  if (!input) throw new TypeError('input cannot be undefined or null');
  const string = input.toString();
  let index = 0; let
    cyclesCompleted = 0;
  while (cyclesCompleted < n) {
    yield string[index];
    index += 1;
    if (index === string.length) {
      index = 0;
      cyclesCompleted += 1;
    }
  }
}

function* repeat(input, n = Infinity) {
  if (!input) throw new TypeError('input cannot be undefined or null');
  const string = input;
  let cyclesCompleted = 0;
  while (cyclesCompleted < n) {
    yield string;
    cyclesCompleted += 1;
  }
}

export {
  count,
  cycle,
  repeat,
};
