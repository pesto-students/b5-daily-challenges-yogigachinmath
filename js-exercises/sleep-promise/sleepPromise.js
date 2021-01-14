const sleep = ms => {
  const prom = new Promise((resolve) => setTimeout(resolve, ms));

  const newFun = (val) => prom.then(() => val);

  newFun.then = (...args) => prom.then(...args);

  newFun.catch = Promise.resolve().catch;

  return newFun;
};

export { sleep };
