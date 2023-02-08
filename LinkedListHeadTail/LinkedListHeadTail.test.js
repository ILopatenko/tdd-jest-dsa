const { Node, LinkedListHeadTail } = require('./LinkedListHeadTail');
const MainHelper = require('../MainHelper/MainHelper');
const helper = new MainHelper();

describe('LinkedListHeadTail Main Test Suite', () => {
   describe('0 Main classes', () => {
      describe('0.1 Creating a new empty node', () => {
         const nodeValue = helper.getOne();
         const node = new Node(nodeValue);
         test('Created node should be an instance of Node class', () => {
            expect(node).toBeInstanceOf(Node);
         });
         test(`Created node should have value that equals to ${nodeValue}`, () => {
            expect(node.value).toBe(nodeValue);
         });
         test('Created node should have next that equals to null', () => {
            expect(node.next).toBeNull();
         });
      });
      describe('0.2 Creating a new empty linked list', () => {
         const linkedList = new LinkedListHeadTail();
         test('Created list should be an instance of LinkedListHeadTail class', () => {
            expect(linkedList).toBeInstanceOf(LinkedListHeadTail);
         });
         test('Created list should have head that points to null', () => {
            expect(linkedList.head).toBeNull();
         });
         test('Created list should have tail that points to null', () => {
            expect(linkedList.tail).toBeNull();
         });
         test('Created list should have length = 0', () => {
            expect(linkedList.length).toBe(0);
         });
      });
   });
   describe('1 Main methods', () => {
      describe('1.1 addFirstNode()', () => {
         describe('1.1.1 Positive Smoke Tests', () => {
            for (let i = 0; i < helper.testQuantity; i++) {
               const list = new LinkedListHeadTail();
               const value = helper.getOne();
               describe(`This is a testCase # ${i + 1}. Generated value is ${value}`, () => {
                  list.addFirstNode(value);
                  test(`Linked List should have length = 1`, () => {
                     expect(list.length).toBe(1);
                  });
                  test(`Head value should be ${value}`, () => {
                     expect(list.head.value).toBe(value);
                  });
                  test(`Tail value should be ${value}`, () => {
                     expect(list.tail.value).toBe(value);
                  });
               });
            }
         });
         describe('1.1.2 Negative Smoke Tests', () => {
            const list = new LinkedListHeadTail();

            test('If no any value - method should return null', () => {
               expect(list.addFirstNode()).toBe(null);
            });
            const value1 = helper.getOne();
            const value2 = helper.getOne();
            list.addFirstNode(value1);
            test('If list length !== 0 - method should return null', () => {
               expect(list.addFirstNode(value2)).toBe(null);
            });
         });
      });
      describe('1.2 push() - method takes in 1 value and adds a new node to the tail and returns new length of the list', () => {
         describe('1.2.1 adding the first node with push()', () => {
            const list121 = new LinkedListHeadTail();
            const value = helper.getOne();
            test('push() should return the new length', () => {
               expect(list121.push(value)).toBe(1);
            });
            test(`Linked List should have length = 1`, () => {
               expect(list121.length).toBe(1);
            });
            test(`Head value should be ${value}`, () => {
               expect(list121.head.value).toBe(value);
            });
            test(`Tail value should be ${value}`, () => {
               expect(list121.tail.value).toBe(value);
            });
         });
         describe('1.2.2 adding the second node with push()', () => {
            const list122 = new LinkedListHeadTail();
            const value1 = helper.getOne();
            const value2 = helper.getOne();
            list122.push(value1);
            test('push() should return the new length', () => {
               expect(list122.push(value2)).toBe(2);
            });
            test(`Linked List should have length = 2`, () => {
               expect(list122.length).toBe(2);
            });
            test(`Head value should be ${value1}`, () => {
               expect(list122.head.value).toBe(value1);
            });
            test(`Tail value should be ${value2}`, () => {
               expect(list122.tail.value).toBe(value2);
            });
         });
      });
      describe('1.3 unshift() - method takes in 1 value and adds a new node to the head and returns new length of the list', () => {
         describe('1.3.1 adding the first node with push()', () => {
            const list131 = new LinkedListHeadTail();
            const value = helper.getOne();
            test('unshift() should return the new length', () => {
               expect(list131.unshift(value)).toBe(1);
            });
            test(`Linked List should have length = 1`, () => {
               expect(list131.length).toBe(1);
            });
            test(`Head value should be ${value}`, () => {
               expect(list131.head.value).toBe(value);
            });
            test(`Tail value should be ${value}`, () => {
               expect(list131.tail.value).toBe(value);
            });
         });
         describe('1.3.2 adding the second node with push()', () => {
            const list132 = new LinkedListHeadTail();
            const value1 = helper.getOne();
            const value2 = helper.getOne();
            list132.unshift(value1);
            test('push() should return the new length', () => {
               expect(list132.push(value2)).toBe(2);
            });
            test(`Linked List should have length = 2`, () => {
               expect(list132.length).toBe(2);
            });
            test(`Head value should be ${value2}`, () => {
               expect(list132.head.value).toBe(value2);
            });
            test(`Tail value should be ${value1}`, () => {
               expect(list132.tail.value).toBe(value1);
            });
         });
      });
      describe('1.5 pop() - method does not take in any parameters, deletes tail node, and returnes deleted node', () => {
         const list15 = new LinkedListHeadTail();
         const value1 = helper.getOne();
         const value2 = helper.getOne();
         list15.push(value1);
         list15.unshift(value2);
         const poped = list15.pop();
         test('Returned node should be an instance of Node class', () => {
            expect(poped).toBeInstanceOf(Node);
         });
         test(`Returned node should have value = ${value1}`, () => {
            expect(poped.value).toBe(value1);
         });
         test(`Returned node should be single node`, () => {
            expect(poped.next).toBe(null);
         });
         test(`After pop() linked list should have length = 1`, () => {
            expect(list15.length).toBe(1);
         });
         test(`Head value should be ${value2}`, () => {
            expect(list15.head.value).toBe(value2);
         });
         test(`Tail value should be ${value2}`, () => {
            expect(list15.tail.value).toBe(value2);
         });
      });
      describe('1.4 shift() - method does not take in any parameters, deletes head node, and returnes deleted node', () => {});
   });
   describe('2 Helpers', () => {});
   describe('3 Advanced methods', () => {});
});

/* 

describe('HainHelper test suite', () => {});
test('HainHelper test suite', () => {});

 */
