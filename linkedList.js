//LinkedLists Questions:
//1. Why would we use a Linked List instead of an array?
//Arrays are best suited for situations where the size of the collection is known in advance and where elements need to be accessed or manipulated quickly. Linked lists are more flexible and adaptable and are best suited for situations where the size of the collection is not known.
//2. When we want to add a node to a linked list, do we have to scoot over the subsequent nodes (like we do for arrays)?
//If there are one or more nodes in a linked list, it is a non-empty linked list. To append a node to a non-empty linked list, make the last node link to the new node. Unlike arrays, we cannot access any elements in a linked list directly. We must traverse from the head node to the last node.
//3. Can we do index access like we can with arrays with linked lists?
//Unlike arrays where the elements can be search by index, linked list require iteration. This means that if you want to get the data on the tenth node, the head pointer can be used to get to the first node, the pointer on the first node can be used to get to the second node, and so forth until the tenth node is reached