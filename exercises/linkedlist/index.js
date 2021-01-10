// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    const node = new Node(data, this.head)
    this.head = node
  }
  size() {
    let size = 0
    let currNode = this.head
    while(currNode){
      size++
      currNode = currNode.next
    }
    return size
  }
  getFirst() {
    return this.head
  }
  getLast() {
    let currNode = this.head
    while (currNode && currNode.next) {
      currNode = currNode.next
    }
    return currNode
  } 
  clear() {
    this.head = null
  }
  removeFirst(){
    if(!this.head) return
    this.head = this.head.next
  }
  removeLast() {
    let currNode = this.head
    while(currNode) {
      if (!currNode.next) {
        this.head = null
      }
      if (currNode.next && !currNode.next.next) {
        currNode.next = null
      }
      currNode = currNode.next
    }
  }
  insertLast(data) {
    const lastNode = this.getLast()
    const newNode = new Node(data) 

    if(lastNode) {
      lastNode.next = newNode
    }else{
      this.head = newNode
    }
  }

  getAt(int) {
    let index = 0
    let currNode = this.head

    while (currNode) {
      if(index === int) {
        return currNode
      }
      index++
      currNode = currNode.next
    }

    return null
  }
  removeAt(int) {
    let index = 0
    let prevNode
    let currNode = this.head

    while(currNode) {
      let nextNode = (currNode && currNode.next) || null
      if(index === int) {
        if(prevNode) {
          prevNode.next = nextNode
        }else {
          this.head = nextNode
        }
        return
      } 
      index++
      prevNode = currNode
      currNode = currNode.next
    }
  }
  insertAt(data, int) {
    let index = 0
    let prevNode
    let currNode = this.head
    const newNode = new Node(data)

    if(!currNode) {
      this.head = newNode
      return
    }
    
    while (currNode) {
      if(index === int) {
        if(prevNode) {
          prevNode.next = newNode
        } else {
          this.head = newNode
        }
        newNode.next = currNode
        return
      }

      if(!currNode.next) {
        currNode.next = newNode
        return
      }

      index++
      prevNode = currNode
      currNode = currNode.next
    }
  }
  forEach(callback){
    let index = 0
    let currNode = this.head
    while(currNode) {
      callback(currNode, index)
      index++
      currNode = currNode.next
    }
  }

  *[Symbol.iterator] () {
    let currNode = this.head
    while (currNode) {
      yield currNode;
      currNode = currNode.next
    }
  }

}

module.exports = { Node, LinkedList };
