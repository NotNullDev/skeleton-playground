import { aa } from '$lib/get-rekt';
import { describe, expect, it } from 'vitest';

describe('sum test', () => {
	it('adds 1 + 2 to equal 3', () => {
		expect(1 + 2).toBe(3);
	});

	it('works', () => {
		expect(aa(50)).toBe(50);
		expect(aa(150)).toBe(100);
		expect(aa(-50)).toBe(0);

		expect(aa(-100)).toBe(0);

		expect(aa(1)).toBe(1);
	});
});
