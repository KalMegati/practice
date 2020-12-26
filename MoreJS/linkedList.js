// what is a linked list?

// A linked list is an ordered collection of data elements. 
// A data element can be represented as a node in a linked list.
// Each node consists of two parts: data & pointer to the next node.

class Node{
    constructor(data, next = null){
        this.data = data,
        this.next = next
    }
}

