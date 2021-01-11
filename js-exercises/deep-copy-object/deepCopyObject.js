const deepCopyObject = (objToCopy) => {
  if (objToCopy === undefined) {
    throw new TypeError(`Object is required, found: ${objToCopy}`);
  }
  if (typeof objToCopy !== 'object' || objToCopy === null) return objToCopy;

  const result = {};
  for (const key of Reflect.ownKeys(objToCopy)) {
    result[key] = deepCopyObject(objToCopy[key]);
  }
  return result;
};

export { deepCopyObject };
