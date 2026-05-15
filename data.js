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

function getcurencycountry(curencycode) {
  if (curencycode) {
    if (curencycode === "USD") {
      return "United States";
    } else if (curencycode === "EUR") {
      return "European Union";
    } else if (curencycode === "GEL") {
      return "Georgia";
    } else {
      return "Unknown currency";
    }
  }
}
console.log(getcurencycountry("USD"));
console.log(getcurencycountry("EUR"));
console.log(getcurencycountry("GEL"));
console.log(getcurencycountry("JPY"));

function makelowercase(text) {
  return text.toLowerCase();
}
console.log(makelowercase("MY NAME IS JANE"));
