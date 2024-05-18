import { predefinedColors, predefinedGradients } from './colors';

const useAvatarGradient = (input: string) => {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }

  const stringToIndex = (s: string): number => {
    if (s.trim() === '') {
      return 0;
    }

    const hash = Array.from(s).reduce(
      (acc, char) => acc + char.charCodeAt(0),
      0,
    );
    return hash % predefinedGradients.length;
  };

  const generateCSSGradient = (): string => {
    try {
      const index = stringToIndex(input);
      const [c1, c2] = predefinedGradients[index];
      return `linear-gradient(${c1} -125%, ${c2}) #ffffff`;
    } catch (error) {
      console.error('Error generating CSS gradient:', error);
      return 'linear-gradient(rgba(255, 255, 255, 0.1) -125%, rgb(158, 170, 181)) #ffffff';
    }
  };

  return generateCSSGradient();
};

const useAvatarColor = (input: string) => {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }

  const stringToIndex = (s: string): number => {
    if (s.trim() === '') {
      return 0;
    }

    const hash = Array.from(s).reduce(
      (acc, char) => acc + char.charCodeAt(0),
      0,
    );
    return hash % predefinedColors.length;
  };

  const generateColor = (): string => {
    try {
      const index = stringToIndex(input);
      return predefinedColors[index];
    } catch (error) {
      console.error('Error generating color:', error);
      return '#FFFFFF'; // Fallback to white color in case of error
    }
  };

  return generateColor();
};

export { useAvatarGradient, useAvatarColor };
