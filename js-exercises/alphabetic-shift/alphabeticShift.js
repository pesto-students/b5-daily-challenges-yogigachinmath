const alphabeticShift = (input) => {
  if (!input || typeof input !== "string") {
    throw new TypeError("String is required as input!");
  }
  let result = "";
  for (let char of input) {
    let charCode = char.charCodeAt(0) + 1;
    if (char === "z" || char === "Z") charCode -= 26;
    result += String.fromCharCode(charCode);
  }
  return result;
};

export { alphabeticShift };
