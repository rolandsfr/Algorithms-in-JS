class Queue {
	constructor() {
		this.data = [];
	}

	add(record) {
		for(var i = 0; i < record.length; i++) {
			this.data.push(record[i]);
		}
	}

	remove() {
		return this.data.shift();
	}

	size() {
		return this.data.length;
	}
}

var graph = {
	you: ["Adele", "Dana", "Laura"],
	Adele: ["Klera", "Samanta$"], // Samanta is seller
	Dana: ["Liva"],
	Laura: ["Robert", "Hugo", "Axel"],
	Klera: [],
	Samanta: [],
	Robert: [],
	Hugo: [],
	Axel: []
}

function search(name) {
	var search_queue = new Queue();
	search_queue.add(graph[`${name}`]);

	var searched = [];

	while(search_queue.size()) {
		var person = search_queue.remove();

		if(!searched.includes(person)) {
			if(person_is_seller(person)) {
				console.log(person + " is seller.");
				return true
			} else {
				search_queue.add(graph[`${person}`]);
				searched.push(person);
			}
		}
		
	}

	return false;
}

function person_is_seller(person) {
	if(person[person.length - 1] == "$") {
		return true;
	} else {
		return false;
	}
}

search("you");