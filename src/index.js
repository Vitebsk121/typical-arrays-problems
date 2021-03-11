
exports.min = function min (array) {
  if ((array === undefined) || (array.length === 0)) {
      result = 0;
  } else {
      let arrSort = array.sort((a, b) => {return a - b;});
      result = arrSort[0];
  }
  return result;
}

exports.max = function max (array) {
  if ((array === undefined) || (array.length === 0)) {
      result = 0;
  } else {
      let arrSort = array.sort((a, b) => {return a - b;});
      result = arrSort[(arrSort.length - 1)];
  }
  return result;
}

exports.avg = function avg (array) {
  if ((array === undefined) || (array.length === 0)) {
      result = 0;
  } else {
      let sumOfItem = array.reduce((sum, item) => sum + item, 0);
      result = sumOfItem / array.length;
  }
  return result;
}
