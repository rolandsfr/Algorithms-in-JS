class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(record) {
    for (var i = 0; i < record.length; i++) {
      for (var key in record[i]) {
        this.data.push(key);
      }
    }
  }

  addMore(record) {
    for (var i = 0; i < record.length; i++) {
      for (var key in record[i]) {
        this.data.push(record[i][key][0]["Name"]);
      }
    }
  } // adds next level information (if not found)

  dequeue() {
    return this.data.shift();
  }

  size() {
    return this.data.length;
  }
}

var graph = {
  me: [
    { Irene: [{ Name: "Elyas" }] },
    { William: [{ Name: "Caspar" }] },
    { Adele: [{ Name: "Aidan$" }] },
  ],
};

function isSeller(name) {
  if (name[name.length - 1] == "$") {
    return true;
  } else {
    return false;
  }
}

function search(name) {
  var queue = new Queue();
  queue.enqueue(graph[name]);
  var searched = [];

  while (queue.size()) {
    var person = queue.dequeue();

    if (!searched.includes(person)) {
      if (isSeller(person)) {
        console.log(person + " is the desired target");
        return true; // Closest path found
      } else {
        searched.push(person);
        queue.addMore(graph[name]); // Search next nodes
      }
    }
  }

  return false;
}

search("me");
