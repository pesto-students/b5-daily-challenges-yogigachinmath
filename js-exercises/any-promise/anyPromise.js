const convertToPromises = (arr) => {
  const promiseArr = arr;
  promiseArr.forEach((promise, index) => {
    if (!(promise instanceof Promise)) promiseArr[index] = Promise.resolve(promiseArr[index]);
  });
  return promiseArr;
};

const any = (arr) => {
  const promiseArr = convertToPromises(arr);

  return new Promise((resolve, reject) => {
    if (promiseArr.length === 0) reject(new Error('Empty array found'));
    let isRejected = 0;
    const rejectedErrors = [];
    promiseArr.forEach((promise, index) => {
      promise
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          isRejected += 1;
          rejectedErrors[index] = new Error(err);
          if (isRejected === promiseArr.length) {
            reject(new Error(rejectedErrors));
          }
        });
    });
  });
};

export default any;
