module.exports.sumNumbers = function(myArray){
  var sumOfArray = 0;
  for (var i = 0; i < myArray.length; i++) {
    sumOfArray += myArray[i];
  };
  return sumOfArray;  
};

module.exports.splitAndLowerCaseString = function(myString){
var newArray = myString.toLowerCase().split(",");
return newArray;
};

module.exports.addIndex = function(myArray){
  var newArray = [];
  for (var i = 0; i < myArray.length; i++) {
     newArray.push(i + " is " + myArray[i]);
  };
  return newArray;
};
