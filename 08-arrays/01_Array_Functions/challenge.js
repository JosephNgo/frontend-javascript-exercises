module.exports.reversePlusOne = function(userArray){
var newArray = [];
userArray.push(1);
  for (var i = 0; i < userArray.length; i++) {
    newArray.unshift(userArray[i]);
  };
  return  newArray;
};

module.exports.plusesEverywhere =  function(userArray){
var newArray = "";

  for (var i = 0; i < userArray.length; i++) {
    newArray += '+' + userArray[i];

  };

var stringLength = newArray.length;
return  newArray.substring(1, stringLength);
};

module.exports.arrayQuantityPlusOne = function(userArray){
arrayLength = userArray.length+1;
return arrayLength;
};