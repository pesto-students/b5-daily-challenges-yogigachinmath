/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-globals */
function range(from, to) {
  return {
    [Symbol.iterator]() {
      let i = from;
      return {
        next() {
          return {
            done: i > to,
            value: i++,
          };
        },
      };
    },
  };
}

function rangeIter(lb, ub) {
  if (isNaN(lb) || isNaN(ub)) {
    throw new TypeError(`${lb} or ${ub} are not numbers`);
  }
  const result = [];
  for (const val of range(lb, ub)) {
    result.push(val);
  }
  return result;
}

export { rangeIter };
