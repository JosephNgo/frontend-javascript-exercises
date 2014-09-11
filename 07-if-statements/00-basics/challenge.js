module.exports.favoriteNumber = function(myNumber, guess){
  if (myNumber == guess){
    return "You got it!";
  }
  else if (myNumber < guess){
    return "Too high";
  }
  else {
    return "Too low"
  }
};

module.exports.checkLock = function(first, second, third, fourth){
  if ((first == 5)&&(second == 2)&&(third == 45)&&(fourth == 1)){
    return "correct";
  }
  else if ((first == 1)&&(second == 2)&&(third == 45)&&(fourth == 1)) {
    return "incorrect";
  }
  else if ((second == 2)&&(third == 45)&&(fourth == 1)) {
    return "correct";
  }
  else if ((third == 5)||(third == 100)) {
    return "correct";
  }
  else if((first != 5)||(second != 2)||(third != 45)||(fourth != 1)){
    return "incorrect";
  }
};

module.exports.canIGet = function(item, price) {
  if ((item == "MacBook Air") && (price > 998)) {
    return true;
  }
  else if ((item == "MacBook Pro") && (price > 1298)) {
    return true;
  }
  else if ((item == "Mac Pro") && (price > 2498)) {
    return true;
  }
  else if ((item == "Apple Sticker") && (price > 0)) {
    return true;
  }
  else {
    return false;
  }

};