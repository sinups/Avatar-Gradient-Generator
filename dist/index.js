const n = [
  ["#65aadd", "#65aadd"],
  ["#e17076", "#e17076"],
  ["#faa774", "#faa774"],
  ["#a695e7", "#a695e7"],
  ["#7bc862", "#7bc862"],
  ["#6ec9cb", "#6ec9cb"],
  ["#ee7aae", "#ee7aae"]
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
