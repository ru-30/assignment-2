function square(n) {
  return typeof n === "number" ? n * n : "Invalid input";
}

function cube(n) {
  return typeof n === "number" ? n ** 3 : "Invalid input";
}

function sqrt(n) {
  if (typeof n !== "number") return "Invalid input";
  if (n < 0) return "Error: Negative value";
  return Math.sqrt(n);
}

module.exports = { square, cube, sqrt };
