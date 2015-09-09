var pigLatin = function(string) {
};

var translateVowels = function(string) {
  var newArray = string.split(" ");
  var translateArray = [];
  for (var i = 0; i < newArray.length; i++) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];

      if ((vowels.indexOf(newArray[i].charAt(0))) !== -1) {
        translateArray.push(newArray[i] + "ay");
      } else {
        translateArray.push(newArray[i]);
      }
  };
  return translateArray.join(" ");
};

var translateConsonants = function(string) {
  var newArray = string.split(" ");
  var translateArray = [];
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < newArray.length; i++) {
    if (vowels.indexOf(newArray[i].charAt(0)) === -1) {
      newArray[i] = newArray[i].slice(1) + newArray[i].slice(0, 1);
      translateArray.push(newArray[i] + "ay");

    } else {
      translateArray.push(newArray[i]);
    }
debugger
  }
  return translateArray;
};
