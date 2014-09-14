module.exports.createCourse = function(courseTitle, courseDuration, courseStudents){
  var newCourse = {
    title: courseTitle,
    duration: courseDuration,
    students: courseStudents
  };

  return newCourse;
};

module.exports.addProperty = function(teacher, favoriteStudent, studentName){
  teacher[favoriteStudent] = studentName;
  return teacher;
};

module.exports.formLetter = function(letter){
  var letterStr = "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;

  return letterStr;
};

//do not use if statement. 
module.exports.canIGet = function(item, money){
  if ((item == "MacBook Air") && (money > 998)){
    return true;
  }
  else if ((item == "MacBook Air") && (money <= 998)) {
    return false;
  }
  else if ((item == "MacBook Pro") && (money > 1298)){
    return true;
  }
  else if ((item == "MacBook Pro") && (money <= 1298)) {
    return false;
  }
  else if ((item == "Mac Pro") && (money > 2498)){
    return true;
  }
  else if ((item == "Mac Pro") && (money <= 2498)) {
    return false;
  }
  else if ((item == "Apple Sticker") && (money > 0)){
    return true;
  }
  else if ((item == "Apple Sticker") && (money <= 0)) {
    return false;
  }
  else {
    return false;
  }
};