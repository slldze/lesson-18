function isempty(text) {
  return text === "";
}
console.log(isempty("")); // true
console.log(isempty(" ")); // false
console.log(isempty("hello")); // false

function convertdollartogel(priceindollar, gelrate) {
  return priceindollar * gelrate + "₾";
}
console.log(convertdollartogel(100, 2.7));
