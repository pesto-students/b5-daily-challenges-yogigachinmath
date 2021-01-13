function convertToPromise(promiseArray) {
  return promiseArray.map((promise) => {
    if (promise instanceof Promise) {
      return promise;
    }
    return Promise.resolve(promise);
  });
}

const allPromises = (args) => {
  let promiseArray = args;
  if (
    !promiseArray
    || (!Array.isArray(promiseArray) && typeof promiseArray !== 'string')
  ) {
    return Promise.reject(new TypeError(`${promiseArray} is not an array`));
  }
  if (promiseArray.length === 0) {
    return Promise.resolve([]);
  }
  if (typeof promiseArray === 'string') promiseArray = promiseArray.split('');

  const promises = convertToPromise(promiseArray);

  return new Promise((resolve, reject) => {
    const result = [];
    let isErrorFound = false;
    let promiseCount = 0;
    promises.forEach((promise, index) => {
      promise
        .then((res) => {
          if (isErrorFound) return;
          result[index] = res;
          promiseCount += 1;
          if (promiseCount === promises.length) resolve(result);
        })
        .catch((err) => {
          if (isErrorFound) return;
          isErrorFound = true;
          reject(err);
        });
    });
  });
};

export { allPromises };
