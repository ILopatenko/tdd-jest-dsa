const MainHelper = require('./MainHelper');

const helper = new MainHelper();

describe('MainHelper test suite', () => {
   describe('1 getRandomBetween()', () => {
      describe('1.1 - default values [0,9]', () => {
         let isMinGenerated = false;
         let minCaseNumber = -1;
         let isMaxGenerated = false;
         let maxCaseNumber = -1;
         for (let i = 0; i < helper.testQuantity; i++) {
            const random = helper.getRandomBetween();
            if (random === 0) (isMinGenerated = true), (minCaseNumber = i + 1);
            if (random === 9) (isMaxGenerated = true), (maxCaseNumber = i + 1);
            describe(`This is a testCase # ${i + 1}. Generated value is ${random}`, () => {
               test(`Generated value should be a number`, () => {
                  expect(typeof random).toBe('number');
               });
               test(`Generated value should >= 0`, () => {
                  expect(random).toBeGreaterThanOrEqual(0);
               });
               test(`Generated value should <= 9`, () => {
                  expect(random).toBeLessThanOrEqual(9);
               });
            });
         }
         describe(`MIN MAX`, () => {
            test(`Expected that min value was generated. In test case #${minCaseNumber}`, () => {
               expect(isMinGenerated).toBe(true);
            });
            test(`Expected that max value was generated. In test case #${maxCaseNumber}`, () => {
               expect(isMaxGenerated).toBe(true);
            });
         });
      });
      describe('1.2 - custom values', () => {
         const min = -20 - helper.getRandomBetween();
         const max = 20 + helper.getRandomBetween();
         let isMinGenerated = false;
         let minCaseNumber = -1;
         let isMaxGenerated = false;
         let maxCaseNumber = -1;
         for (let i = 0; i < helper.testQuantity; i++) {
            const random = helper.getRandomBetween(min, max);
            if (random === min) (isMinGenerated = true), (minCaseNumber = i + 1);
            if (random === max) (isMaxGenerated = true), (maxCaseNumber = i + 1);
            describe(`This is a testCase # ${i + 1}. Generated value is ${random}`, () => {
               test(`Generated value should be a number`, () => {
                  expect(typeof random).toBe('number');
               });
               test(`Generated value should >= ${min}`, () => {
                  expect(random).toBeGreaterThanOrEqual(min);
               });
               test(`Generated value should <= ${max}`, () => {
                  expect(random).toBeLessThanOrEqual(max);
               });
            });
         }
         describe(`MIN MAX`, () => {
            test(`Expected that min value was generated. In test case #${minCaseNumber}`, () => {
               expect(isMinGenerated).toBe(true);
            });
            test(`Expected that max value was generated. In test case #${maxCaseNumber}`, () => {
               expect(isMaxGenerated).toBe(true);
            });
         });
      });
   });
   describe('2 getOne()', () => {
      describe('2.1 default value - bu default method returns a random capital English letter', () => {
         for (let i = 0; i < helper.testQuantity; i++) {
            const letter = helper.getOne();
            describe(`This is a testCase # ${i + 1}. Returned letter is ${letter}`, () => {
               test(`Expected value should be from given list`, () => {
                  expect(helper.sets.engAlphabet.upper.indexOf(letter)).toBeGreaterThanOrEqual(0);
               });
            });
         }
      });
      describe('2.2 custom list', () => {
         const customList = ['A', 'z', 5, true];

         for (let i = 0; i < helper.testQuantity; i++) {
            const random = helper.getOne(customList);
            describe(`This is a testCase # ${i + 1}. Returned element is ${random}`, () => {
               test(`Expected value should be from given list`, () => {
                  expect(customList.indexOf(random)).toBeGreaterThanOrEqual(0);
               });
            });
         }
      });
   });
});
