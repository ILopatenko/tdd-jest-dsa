class Node {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}

class LinkedListHeadTail {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }

   addFirstNode(value) {
      if (!value || this.length !== 0) return null;
      const firstNode = new Node(value);
      this.head = firstNode;
      this.tail = firstNode;
      this.length = 1;
      return this.length;
   }

   push(value) {
      if (this.length === 0) return this.addFirstNode(value);
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this.length;
   }

   unshift(value) {
      if (this.length === 0) return this.addFirstNode(value);
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this.length;
   }

   //print()

   //unshift()

   //shift

   //pop()

   ////
   //getByIndex - at()
   //insertByIndex
   //deleteByIndex
   //setByIndex

   ////
   ////
   //clone
   //contains
   //indexOf
   //lastIndexOf

   /////
   ///// TASKS
   /////
}

module.exports = { Node, LinkedListHeadTail };
