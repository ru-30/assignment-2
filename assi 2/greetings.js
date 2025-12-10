export const greet = (name = "User") => {
  const hour = new Date().getHours();
  const message =
    hour < 12
      ? "Good morning"
      : hour < 18
      ? "Good afternoon"
      : "Good evening";

  return `${message}, ${name}!`;
};
