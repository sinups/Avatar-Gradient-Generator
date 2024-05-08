const i = () => {
  const t = [
    ["#65aadd1a", "#65aadd"],
    ["#e170761a", "#e17076"],
    ["#faa7741a", "#faa774"],
    ["#a695e71a", "#a695e7"],
    ["#7bc8621a", "#7bc862"],
    ["#6ec9cb1a", "#6ec9cb"],
    ["#ee7aae1a", "#ee7aae"]
  ], c = (e) => e ? e.split("").reduce((a, n) => a + n.charCodeAt(0), 0) % t.length : 0;
  return { generateCSSGradient: (e) => {
    try {
      const r = c(e), [a, n] = t[r];
      return `linear-gradient(${a} -125%, ${n})`;
    } catch (r) {
      return console.error("An error occurred while generating CSS gradient:", r), "linear-gradient(rgb(255, 255, 255) -125%, rgb(158, 170, 181))";
    }
  } };
};
export {
  i as default
};
