module.exports.newArray = function(a,b,c,d){
  return [a, b, c, d];
};

module.exports.firstAndLast = function(newArray){
  var lastElementIndex = newArray.length-1;
  return [newArray[0],newArray[lastElementIndex]];
};