import { useAvatarGradient, useAvatarColor } from '../lib/index';

describe('Avatar functions consistency test', () => {
	const uniqueIds = ['12345', '67890', '112233', '445566', '778899'];

	it('should return consistent gradients for the same input string over multiple runs', () => {
		uniqueIds.forEach((id) => {
			const expected = useAvatarGradient(id);
			for (let i = 0; i < 10; i++) {
				const result = useAvatarGradient(id);
				expect(result).toBe(expected);
			}
		});
	});

	it('should return consistent colors for the same input string over multiple runs', () => {
		uniqueIds.forEach((id) => {
			const expected = useAvatarColor(id);
			for (let i = 0; i < 10; i++) {
				const result = useAvatarColor(id);
				expect(result).toBe(expected);
			}
		});
	});

	it('should return consistent results for both functions over 100 runs', () => {
		let inconsistentGradient = false;
		let inconsistentColor = false;

		for (let i = 0; i < 100; i++) {
			uniqueIds.forEach((id) => {
				const gradientResults = new Set();
				const colorResults = new Set();

				for (let j = 0; j < 10; j++) {
					gradientResults.add(useAvatarGradient(id));
					colorResults.add(useAvatarColor(id));
				}

				if (gradientResults.size > 1) {
					inconsistentGradient = true;
				}

				if (colorResults.size > 1) {
					inconsistentColor = true;
				}
			});
		}

		expect(inconsistentGradient).toBe(false);
		expect(inconsistentColor).toBe(false);
	});
});
