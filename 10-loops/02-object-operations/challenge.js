module.exports.copy = function(myHash) {
  var myObjectCopy = {};  
  for (var property in myHash) {
    myObjectCopy[property] = myHash[property];
  }
  return myObjectCopy;
};

module.exports.extend = function(hash1, hash2) {
  var myObject = hash1;
  for (var property in hash2) {
    myObject[property] = hash2[property];
  }
  return myObject;
};

module.exports.hasElems = function(myHash, compareKeyArray){
  var myObject = myHash;
  var myKeys = [];
  var compareKeys = compareKeyArray;
  var compareKeysLength = compareKeys.length;
  for (var property in myObject) {
    myKeys.push(property);
  }
  if ((compareKeysLength == 0) || (myKeys.length == compareKeysLength)) {
    return true;
  }
  else {
    return false;
  }
  while (i--) {
    if (myKeys[i] !== compareKeys[i]) return false;
  }
  return true;
};


