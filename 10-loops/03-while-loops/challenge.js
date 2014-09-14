module.exports.stream = function (conditionalFn, actionFn) {
  while (conditionalFn() > 0) {
    actionFn();
  }
};

module.exports.sumNumbers = function(myArray){
  var sum = 0;
  var counter = 0;

  while (counter < myArray.length) {
    sum += myArray[counter];
    counter++;
  }
  return sum;
};

