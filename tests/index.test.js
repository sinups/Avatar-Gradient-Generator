import { predefinedGradients } from '../src/gradients';
import useAvatarGradient from '../src/index';

describe('useAvatarGradient', () => {

	it('should return the same gradient for the same input string', () => {
		const input = '12345';
		const expected = useAvatarGradient(input);
		for (let i = 0; i < 10; i++) {
			const result = useAvatarGradient(input);
			expect(result).toBe(expected);
		}
	});
	it('should handle empty string input return default', () => {
		const input = '';
		const [c1, c2] = predefinedGradients[0];
		const expected = `linear-gradient(${c1} -125%, ${c2}) #ffffff`;

		const result = useAvatarGradient(input);
		expect(result).toBe(expected);
	});

	it('should throw an error for non-string input', () => {
		const input = 123;
		expect(() => {
			useAvatarGradient(input);
		}).toThrowError('Input must be a string');
	});

	it('should handle minimum and maximum user IDs', () => {
		const minUserId = 1;
		const maxUserId = 150000;
		const minResult = useAvatarGradient(minUserId.toString());
		const maxResult = useAvatarGradient(maxUserId.toString());
		expect(minResult).toBeDefined();
		expect(maxResult).toBeDefined();
	});

	it('should handle random user IDs', () => {
		const randomUserIds = Array.from({ length: 5 }, () => Math.floor(Math.random() * 150000) + 1);
		randomUserIds.forEach(userId => {
			const result = useAvatarGradient(userId.toString());
			expect(result).toBeDefined();
		});
	});

	it('should handle a large number of user IDs efficiently', () => {
		const start = performance.now();
		for (let i = 1; i <= 10000; i++) {
			const userId = Math.floor(Math.random() * 150000) + 1;
			useAvatarGradient(userId.toString());
		}
		const end = performance.now();
		const executionTime = end - start;
		expect(executionTime).toBeLessThan(100);
	});

	it('should handle user IDs near the boundaries of predefined gradients', () => {
		const nearBoundaryIds = [predefinedGradients.length - 1, predefinedGradients.length, predefinedGradients.length + 1];
		nearBoundaryIds.forEach(userId => {
			const result = useAvatarGradient(userId.toString());
			expect(result).toBeDefined();
		});
	});
});
