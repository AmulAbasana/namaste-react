export const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number")
    throw "please provide only number inputs";
  return a + b;
};
