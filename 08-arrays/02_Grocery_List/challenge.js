module.exports.addItem = function(newItem, originalArray){
  var newArray = originalArray;
  if (originalArray[0] == newItem) {
    return newArray
  }
  else {
    newArray.push(newItem);
    return newArray;
  }
};

module.exports.reverseSortedList = function(myArray) {
  var newArray = myArray;
  newArray.sort().reverse();
  return newArray;
};