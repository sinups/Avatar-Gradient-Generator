const useAvatarGradient = () => {
  const predefinedGradients = [
    ["#65aadd1a", "#65aadd"],
    ["#e170761a", "#e17076"],
    ["#faa7741a", "#faa774"],
    ["#a695e71a", "#a695e7"],
    ["#7bc8621a", "#7bc862"],
    ["#6ec9cb1a", "#6ec9cb"],
    ["#ee7aae1a", "#ee7aae"],
  ];

  const stringToIndex = (s: string): number => {
    if (!s) {
      return 0;
    }
    const hash = s.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return hash % predefinedGradients.length;
  };

  const generateCSSGradient = (s: string): string => {
    try {
      const index = stringToIndex(s);
      const [c1, c2] = predefinedGradients[index];

      return `linear-gradient(${c1} -125%, ${c2})`;
    } catch (error) {
      console.error("An error occurred while generating CSS gradient:", error);
      return "linear-gradient(rgb(255, 255, 255) -125%, rgb(158, 170, 181))";
    }
  };

  return { generateCSSGradient };
};

export default useAvatarGradient;
