import {
  map, filter, all, some, invert, merge,
} from './objectUtils';

Array.prototype.customMap = map;
Array.prototype.customFilter = filter;
Array.prototype.customSome = some;
Array.prototype.customEvery = all;

const mapNum = (a) => a * 2;

describe('map', () => {
  expect(() => [].customMap()).toThrow(TypeError);
  expect([].customMap(mapNum)).toEqual([]);
  expect([1, 2, 3].customMap(mapNum)).toEqual([2, 4, 6]);
});

const filterNum = (a) => a % 2 === 0;
describe('filter', () => {
  expect(() => [].customFilter()).toThrow(TypeError);
  expect([].customFilter(filterNum)).toEqual([]);
  expect([1, 2, 3].customFilter(filterNum)).toEqual([2]);
});

function isBigEnough(element, index, array) {
  return element >= 10;
}

describe('every or all', () => {
  expect(() => [].customEvery()).toThrow(TypeError);
  expect([].customEvery(isBigEnough)).toEqual(true);
  expect([12, 5, 8, 130, 44].customEvery(isBigEnough)).toEqual(false);
  expect([12, 54, 18, 130, 44].customEvery(isBigEnough)).toEqual(true);
});

function isBiggerThan10(element, index, array) {
  return element > 10;
}
describe('some', () => {
  expect(() => [].customSome()).toThrow(TypeError);
  expect([].customSome(isBigEnough)).toEqual(false);
  expect([2, 5, 8, 1, 4].customSome(isBiggerThan10)).toEqual(false);
  expect([12, 5, 8, 1, 4].customSome(isBiggerThan10)).toEqual(true);
});

// describe('Invert', () => {
//   const sampleObj = {
//     a: 'apple',
//     b: 'ball',
//   };
//   expect(invert()).toThrow(TypeError);
//   expect(invert({})).toEqual({});
//   expect(invert(sampleObj)).toEqual(false);
// });


// write your own test cases
