import { count, cycle, repeat } from './iterInfinite';

describe('count test', () => {
  it('count iterator', () => {
    const countIter = count(5, 2)[Symbol.iterator]();
    const arr = [];
    arr.push(countIter.next().value);
    arr.push(countIter.next().value);
    arr.push(countIter.next().value);
    arr.push(countIter.next().value);
    expect(arr).toEqual([5, 7, 9, 11]);
  });
});

describe('cycle test', () => {
  it('cycle Iterator', () => {
    const resultArr = ['O', 'w', 'l', 'O', 'w', 'l'];
    expect(Array.from(cycle('Owl', 2))).toEqual(resultArr);
  });
});

describe('repeat test', () => {
  it('repeat Iterator', () => {
    expect(Array.from(repeat(5, 10))).toEqual([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]);
  });
  it('repeat Iterator', () => {
    expect(Array.from(repeat({ a: 'apple' }, 2))).toEqual([{ a: 'apple' }, { a: 'apple' }]);
  });
});
