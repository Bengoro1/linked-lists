const LinkedList = () => {
  let _head = null;
  const append = (value) => {
    const node = Node(value);
    let current = _head;
    if (_head === null) {
      return (_head = node);
    }
    while (current.nextNode != null) {
      current = current.nextNode;
    }
    current.nextNode = node;
  }

  const prepend = (value) => {
    const node = Node(value);
    if (_head == null) return append(value);
    node.nextNode = _head;
    _head = node;
  }

  const size = () => {
    let count = 0;
    let current = _head;
    while (current != null) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  const head = () => _head;

  const tail = () => {
    let current = _head;
    while (current.nextNode != null) {
      current = current.nextNode;
    }
    return current;
  }

  const at = (index) => {
    if (index > size()) return 'Item not found';
    let current = _head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current == null ? 'Item not found' : current;
  }

  const pop = () => {
    let current = _head;
    let prev = null
    while (current.nextNode != null) {
      prev  = current
      current = current.nextNode;
    }
    prev.nextNode = null;
  }

  const contains = (value) => {
    let current = _head;
    while (current != null) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  const find = (value) => {
    let current = _head;
    let count = 0;
    while (current != null) {
      if (current.value === value) return count;
      current = current.nextNode;
      count++;
    }
    return null;
  }

  const toString = () => {
    let current = _head;
    let str = '';
    while (current != null) {
      str += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return (str += 'null');
  }

  return {append, prepend, size, head, tail, at, pop, contains, find, toString};
}

const Node = (value) => {
  value = value || null;
  const nextNode = null;
  return {value, nextNode};
}

const linkedList = LinkedList();

linkedList.prepend("test1");
linkedList.append("test2");
linkedList.append("test3");
console.log(linkedList.toString());
console.log(linkedList.size()); 
console.log(linkedList.head());
console.log(linkedList.tail());
console.log(linkedList.at(2));
console.log(linkedList.at(4));
linkedList.pop();
console.log(linkedList.toString());
console.log(linkedList.contains("test1"));
console.log(linkedList.find("test2"));
linkedList.prepend("test3");
console.log(linkedList.toString());
