const c = [
  ["rgba(101, 170, 221, 0.1)", "#65aadd"],
  ["rgba(225, 112, 118, 0.1)", "#e17076"],
  ["rgba(250, 167, 116, 0.1)", "#faa774"],
  ["rgba(166, 149, 231, 0.1)", "#a695e7"],
  ["rgba(123, 200, 98, 0.1)", "#7bc862"],
  ["rgba(110, 201, 203, 0.1)", "#6ec9cb"],
  ["rgba(238, 122, 174, 0.1)", "#ee7aae"]
], s = [
  "#FFA94D",
  "#FFD43B",
  "#A9E34B",
  "#69DB7C",
  "#38D9A9",
  "#3BC9DB",
  "#4DABF7",
  "#748FFC",
  "#9775FA",
  "#DA77F2",
  "#F783AC",
  "#FF8787"
], i = (e) => {
  if (typeof e != "string")
    throw new Error("Input must be a string");
  const n = (r) => r.trim() === "" ? 0 : Array.from(r).reduce(
    (t, o) => t + o.charCodeAt(0),
    0
  ) % c.length;
  return (() => {
    try {
      const r = n(e), [a, t] = c[r];
      return `linear-gradient(${a} -125%, ${t}) #ffffff`;
    } catch (r) {
      return console.error("Error generating CSS gradient:", r), "linear-gradient(rgba(255, 255, 255, 0.1) -125%, rgb(158, 170, 181)) #ffffff";
    }
  })();
}, f = (e) => {
  if (typeof e != "string")
    throw new Error("Input must be a string");
  const n = (r) => r.trim() === "" ? 0 : Array.from(r).reduce(
    (t, o) => t + o.charCodeAt(0),
    0
  ) % s.length;
  return (() => {
    try {
      const r = n(e);
      return s[r];
    } catch (r) {
      return console.error("Error generating color:", r), "#FFFFFF";
    }
  })();
};
export {
  f as useAvatarColor,
  i as useAvatarGradient
};
