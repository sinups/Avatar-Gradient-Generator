import { predefinedGradients } from './gradients';

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
      return 'linear-gradient(rgb(255, 255, 255) -125%, rgb(158, 170, 181)) #ffffff';
    }
  };

  return generateCSSGradient();
};

export default useAvatarGradient;
