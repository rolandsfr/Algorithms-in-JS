var graph = {
	start: {
		a: 6,
		b: 2
	},

	a: {
		fin: 1
	},

	b: {
		a: 3,
		fin: 5
	},

	fin: {}
} // A graph

var infinity = Number.POSITIVE_INFINITY;

var costs = {
	a: 6,
	b: 2,
	fin: infinity
} // Each graph node's cost

var parents = {
	a: "start",
	b: "start",
	fin: null
} // Each graph node's parent (to calculate the ending path)

var processed = [];
var node = find_lowest_cost_node(costs);
var totalTime = 0;

var str = '';

while(node !== null) {
	var cost = costs[node]; // get cost of a node with minamal cost
	var neighbors = graph[node]; // get it neighbors ([OBJECT])

	for(var key in neighbors) {
		var newCost = cost + neighbors[key];
		if(costs[key] > newCost) {
			costs[key] = newCost;
			parents[key] = node;
		}
	} // Calculate the fastest path

	str += `${node} -> `;

	processed.push(node);
	var node = find_lowest_cost_node(costs);
} // searchig a path

console.log('Total weight of path: ' + cost); // Get total time of searching target in a graph
console.log("Total path: " + str.slice(0, -3));

function find_lowest_cost_node(costs) {
	var lowest_cost = infinity;
	var lowest_cost_node = null;

	for (node in costs) {
		var cost = costs[node];

		if(cost < lowest_cost && !processed.includes(node)) {
			lowest_cost = cost;
			lowest_cost_node = node;
		}
	}

	return lowest_cost_node;
} // Get a node with the lowest cost
