export const celsiusToFahrenheit = c => {
  const f = (c * 9) / 5 + 32;
  const status =
    c > 30 ? "Hot" : c >= 15 ? "Warm" : "Cold";

  return `${c}°C = ${f}°F (${status})`;
};

console.log(celsiusToFahrenheit(30));
