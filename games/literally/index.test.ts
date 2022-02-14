import literally from '.';

describe('literally', () => {
  test('should return a number literally', () => {
    expect(literally(12206655444788)).toBe(1122102625341728);
    expect(literally(1)).toBe(11);
  });

  test('should work recursively', () => {
    expect(literally(literally(literally(1)))).toBe(1211);
  });

  test('should maintain sign', () => {
    expect(literally(-333)).toBe(-33);
  });

  test('should handle void scenarios', () => {
    expect(literally()).toBeUndefined();
  });

  test('should handle zero', () => {
    expect(literally(0)).toBe(10);
  });
});
