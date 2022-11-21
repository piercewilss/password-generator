// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowerCase = ['a', 'b'];
var upperCase = ['A', 'B', 'C'];
var numeric = [1, 2, 3, 4];
var specChar = ['@', '!'];

// take in user info -- based on the user answers
function userInfo() {
  var length = parseInt (prompt("How many characters do you want your password to be?"));
  console.log(length);

  if (Number.isNaN(length)) {
    alert ('please enter a number')
    return null;
  }

  if (length < 8 || length > 128) {
    alert("please enter a number between 8 and 128");
    return null;
  }

  var isLowerCase = confirm("do you want to include lowercase characters?");
  var isUpperCase = confirm("do you want to include uppercase characters?");
  var isNumeric = confirm("do you want to include numeric characters?");
  var isSpecChar = confirm("do you want to include special characters?");

  if (isLowerCase === false && isUpperCase === false && isNumeric === false && isSpecChar === false) {
    alert ('you must choose at least one character type');
    return null;
  }

  var userObj = {
    length: length,
    isLowerCase: isLowerCase,
    isUpperCase: isUpperCase,
    isNumeric: isNumeric,
    isSpecChar: isSpecChar
  }
  return userObj;
}

// userInfio
function randomizer(arr) {
  var rIndex = Math.random * arr.length;
  var character = arr[rIndex];
  return character;
}

function generatePassword() {
    var userOptions = userInfo();
    var guarantee = [];
    var potential = [];
    var result = [];

    if (isLowerCase) {
      var potential = potential.concat(lowercase);
      console.log(potential);
      guarantee.push(randomizer(lowercase))
    }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
