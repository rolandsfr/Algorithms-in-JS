const generateArray = require("./generateArray");

const iterator = (func) => {
  for (let i = 0; i <= 1000; i++) {
    func();
  }
};

const benchSearchAlgorithm = (algorithm, elements, name) => {
  console.time(name);

  iterator(() => {
    const target = Math.floor(Math.random() * elements);
    algorithm(target, arr);
  });

  console.timeEnd(name);
};

const benchSortingAlgorithm = (algorithm, name) => {
  console.time(name);

  iterator(() => {
    const unsortedArr = generateArray(1000, true);
    algorithm(unsortedArr);
  });

  console.timeEnd(name);
};

module.exports = {
  benchSearchAlgorithm,
  benchSortingAlgorithm,
};
