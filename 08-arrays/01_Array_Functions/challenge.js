module.exports.reversePlusOne = function(userArray){
  userArray.reverse().unshift(1);
  return userArray;
};

module.exports.plusesEverywhere =  function(userArray){
  return userArray.join('+');
};

module.exports.arrayQuantityPlusOne = function(userArray){
  return userArray.length+1;
};