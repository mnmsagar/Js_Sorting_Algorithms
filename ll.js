class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    // Adds a node to the end of the linked list
    append(val) {
      const newNode = new ListNode(val);
  
      if (this.size === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
  
      this.size++;
    }
  
    // Adds a node to the beginning of the linked list
    prepend(val) {
      const newNode = new ListNode(val);
  
      if (this.size === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
  
      this.size++;
    }
  
    // Removes the first occurrence of a node with the given value
    remove(val) {
      if (this.size === 0) {
        return;
      }
  
      if (this.head.val === val) {
        this.head = this.head.next;
  
        if (this.size === 1) {
          this.tail = null;
        }
  
        this.size--;
        return;
      }
  
      let prevNode = this.head;
      let currNode = prevNode.next;
  
      while (currNode !== null) {
        if (currNode.val === val) {
          prevNode.next = currNode.next;
  
          if (currNode === this.tail) {
            this.tail = prevNode;
          }
  
          this.size--;
          return;
        }
  
        prevNode = currNode;
        currNode = currNode.next;
      }
    }
  
    // Returns a string representation of the linked list
    toString() {
      let result = '';
      let currNode = this.head;
  
      while (currNode !== null) {
        result += currNode.val.toString();
  
        if (currNode.next !== null) {
          result += ' -> ';
        }
  
        currNode = currNode.next;
      }
  
      return result;
    }
  }
  
  // Example usage
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.prepend(0);
  list.remove(2);
  console.log(list.toString()); // Outputs "0 -> 1 -> 3"
  