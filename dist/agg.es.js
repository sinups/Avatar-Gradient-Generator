const n = [
  ["rgba(101, 170, 221, 0.1)", "#65aadd"],
  ["rgba(225, 112, 118, 0.1)", "#e17076"],
  ["rgba(250, 167, 116, 0.1)", "#faa774"],
  ["rgba(166, 149, 231, 0.1)", "#a695e7"],
  ["rgba(123, 200, 98, 0.1)", "#7bc862"],
  ["rgba(110, 201, 203, 0.1)", "#6ec9cb"],
  ["rgba(238, 122, 174, 0.1)", "#ee7aae"]
], c = (a) => {
  if (typeof a != "string")
    throw new Error("Input must be a string");
  const g = (r) => r.trim() === "" ? 0 : Array.from(r).reduce(
    (e, f) => e + f.charCodeAt(0),
    0
  ) % n.length;
  return (() => {
    try {
      const r = g(a), [t, e] = n[r];
      return `linear-gradient(${t} -125%, ${e}) #ffffff`;
    } catch (r) {
      return console.error("Error generating CSS gradient:", r), "linear-gradient(rgba(255, 255, 255, 0.1) -125%, rgb(158, 170, 181)) #ffffff";
    }
  })();
};
export {
  c as default
};
