const generateArray = (elements, unsorted = false) => {
  array = [];

  const fillArray = (array, min, max) => {
    if (min === max) return array;
    const elementToPush = unsorted ? Math.floor(Math.random() * 10) : min;
    return fillArray([...array, elementToPush], min + 1, max);
  };

  return fillArray(array, 0, elements);
};

module.exports = generateArray;
