const n = [
  ["#65aadd1a", "#65aadd"],
  ["#e170761a", "#e17076"],
  ["#faa7741a", "#faa774"],
  ["#a695e71a", "#a695e7"],
  ["#7bc8621a", "#7bc862"],
  ["#6ec9cb1a", "#6ec9cb"],
  ["#ee7aae1a", "#ee7aae"]
], i = (a) => {
  if (typeof a != "string")
    throw new Error("Input must be a string");
  const c = (e) => e.trim() === "" ? 0 : Array.from(e).reduce(
    (r, o) => r + o.charCodeAt(0),
    0
  ) % n.length;
  return (() => {
    try {
      const e = c(a), [t, r] = n[e];
      return `linear-gradient(${t} -125%, ${r})`;
    } catch (e) {
      return console.error("Error generating CSS gradient:", e), "linear-gradient(rgb(255, 255, 255) -125%, rgb(158, 170, 181))";
    }
  })();
};
export {
  i as default
};
