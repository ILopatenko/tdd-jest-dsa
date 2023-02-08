describe('HainHelper test suite', () => {});
test('HainHelper test suite', () => {});

expect(typeof random).toBe('number');
expect(random).toBeGreaterThanOrEqual(0);
expect(random).toBeLessThanOrEqual(9);
expect(isMaxGenerated).toBe(true);
expect(linkedList.head).toBeNull();
expect(linkedList).toHaveProperty(length, 0);

/////
describe('HainHelper test suite', () => {
   describe('HainHelper test suite', () => {
      test('HainHelper test suite', () => {});
   });
   describe('HainHelper test suite', () => {
      test('HainHelper test suite', () => {});
   });
});

////

describe('1.2 - custom values', () => {
   for (let i = 0; i < helper.testQuantity; i++) {
      describe(`This is a testCase # ${i + 1}. Generated value is ${random}`, () => {
         test(`Generated value should be a number`, () => {
            expect(typeof random).toBe('number');
         });
      });
   }
});
