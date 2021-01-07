// your implementation
const map = function (callback) {
  if (!this) {
    throw new TypeError('Array.prototype.map called on null or undefined');
  }
  if (!callback || typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function.`);
  }

  let k = 0;
  const result = [];

  while (k < this.length) {
    result.push(callback(this[k], k, this));
    k += 1;
  }

  return result;
};

const filter = function (callback) {
  if (!this) {
    throw new TypeError('Array.prototype.map called on null or undefined');
  }
  if (!callback || typeof (callback) !== 'function') {
    throw new TypeError(`${callback} is not a function.`);
  }

  let k = 0; const
    result = [];

  while (k < this.length) {
    if (callback(this[k], k, this)) {
      result.push(this[k]);
    }
    k += 1;
  }

  return result;
};

const invert = function (object) {
  if (!object || typeof (object) === 'object') {
    throw new TypeError(`${object} is not an Object`);
  }
  const result = {};
  for (const [key, value] of object) {
    result[value] = key;
  }
  return result;
};

function mergeObjects(object, result) {
  const resultantObject = result;
  for (const [key, value] of object) {
    if (!resultantObject.hasOwnProperty(key)) resultantObject[key] = value;
    else {
      resultantObject[key] = [...resultantObject[key], value];
    }
  }
  return resultantObject;
}

const merge = function (arrayOfObjects) {
  if (!arrayOfObjects) {
    throw new TypeError(`Input paramter is required, found: ${arrayOfObjects}`);
  }
  let result = {};
  arrayOfObjects.forEach(object => {
    result = mergeObjects(object, result);
  });
  return result;
};

const all = function (callback) {
  if (!this) {
    throw new TypeError('Array.prototype.map called on null or undefined');
  }
  if (!callback || typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function.`);
  }

  let count = 0;
  let k = 0;
  while (k < this.length) {
    if (callback(this[k], k, this)) {
      count += 1;
    }
    k += 1;
  }
  return count === this.length;
};

const some = function (callback) {
  if (!this) {
    throw new TypeError('Array.prototype.map called on null or undefined');
  }
  if (!callback || typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function.`);
  }

  let flag = false;
  let k = 0;

  while (k < this.length) {
    if (callback(this[k], k, this)) {
      flag = true;
    }
    k += 1;
  }
  return flag;
};

export {
  map, filter, invert, merge, all, some,
};
