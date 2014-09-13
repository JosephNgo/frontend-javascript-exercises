module.exports.getKeys = function(myHash){
  var myObject = myHash;
  var myKeys = [];
  for (var property in myObject) {
    myKeys += property;
  }
 return myKeys;
};

module.exports.getValues = function(myHash){
  var myObject = myHash;
  var myValues = [];
  for (var property in myObject) {
    myValues += myObject[property];
  }
  return myValues;
};

module.exports.objectToArray = function(myHash) {
  var myObject = myHash;
  var myKeys = [];
  var myValues = [];
  var myArray = [];
  for (var property in myObject) {
    myArray += property + " is " + myObject[property];
  }
  return myArray;
};