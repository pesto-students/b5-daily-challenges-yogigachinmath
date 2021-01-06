function abbreviateString(str) {
  if (!str || typeof str !== "string") {
    throw TypeError("String is required as input");
  }

  const arrayOfWords = str.split(" ");
  let result = arrayOfWords[0];
  if (arrayOfWords.length > 1) {
    const initial = arrayOfWords[arrayOfWords.length - 1].charAt(0).toUpperCase();
    result += " " + initial + ".";
  }
  return result;
}
export { abbreviateString };
