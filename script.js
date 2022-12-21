// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specChar = ['@', '!', '#', '$', '%', '^', '&', '*', '(', ')' ];

// take in user info -- based on the user answers
function userInfo() {
  var length = parseInt(prompt("How many characters do you want your password to be?"));
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
  console.log(userObj)
  return userObj;
}

// userInfio
function randomizer(arr) {
  var rIndex = Math.floor(Math.random() * arr.length);
  var character = arr[rIndex];
  return character;
  generatePassword()
}

function generatePassword() {
    var userOptions = userInfo();
    var guarantee = [];
    var potential = [];
    var result = [];

    if (userOptions.isLowerCase) {
      potential = potential.concat(lowerCase);
      console.log(potential);
      guarantee.push(randomizer(lowerCase))
    }
    if (userOptions.isUpperCase) {
      potential = potential.concat(upperCase);
      console.log(potential);
      guarantee.push(randomizer(upperCase))
    }
    if (userOptions.isNumeric) {
      potential = potential.concat(numeric);
      console.log(potential);
      guarantee.push(randomizer(numeric))
    }
    if (userOptions.isSpecChar) {
      potential = potential.concat(specChar);
      console.log(potential);
      guarantee.push(randomizer(specChar))
    }
    for (var i = 0; i < userOptions.length; i++) {
      var potential = randomizer(potential);
      result.push(potential)
      
      
      
    } 
for (var i=0; i < guarantee.length; i++) {
  result[i]= guarantee[i]
}


    return result.join("")
    
} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
