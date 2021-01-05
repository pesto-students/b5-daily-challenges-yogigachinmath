// You can use the function from the `Math` module.
const sqrt = function(number) {
  return Math.sqrt(number);
}
const power = function(number,toPower) {
  return Math.pow(number,toPower);
}
const round = function(number) {
  return Math.round(number);
}
// Don't change the exported names. 
export {
  sqrt,
  power,
  round,
};
