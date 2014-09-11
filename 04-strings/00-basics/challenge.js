module.exports.formLetter = function(firstName, senderName, message) {
  return "Hello Rob,\n\nTake care.\n\nSincerely,\nJoe";
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  return bigString.substring(startA, endA) + bigString.substring(startB, endB);
};

module.exports.findFirstMatch = function(text, searchString) {
  return text.indexOf(searchString);
};

module.exports.findLastMatch = function(text, searchString) {
  return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {
  var stringMatch1 = text.indexOf(searchString);
  var stringStart1 = stringMatch1 + searchString.length;
  var stringMatch2 = text.lastIndexOf(searchString);
  var stringStart2 = stringMatch2 + searchString.length;

  return text.substring(stringStart1, stringMatch2);
};