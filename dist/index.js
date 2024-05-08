const d = (n) => {
  const a = [
    ["#65aadd1a", "#65aadd"],
    ["#e170761a", "#e17076"],
    ["#faa7741a", "#faa774"],
    ["#a695e71a", "#a695e7"],
    ["#7bc8621a", "#7bc862"],
    ["#6ec9cb1a", "#6ec9cb"],
    ["#ee7aae1a", "#ee7aae"]
  ], c = (e) => {
    if (typeof e != "string")
      throw new Error("Input must be a string");
    return e.trim() === "" ? 0 : Array.from(e).reduce(
      (r, o) => r + o.charCodeAt(0),
      0
    ) % a.length;
  };
  return (() => {
    try {
      const e = c(n), [t, r] = a[e];
      return `linear-gradient(${t} -125%, ${r})`;
    } catch (e) {
      return console.error(
        "It is necessary to send parameter to the function:",
        e
      ), "linear-gradient(rgb(255, 255, 255) -125%, rgb(158, 170, 181))";
    }
  })();
};
export {
  d as default
};
