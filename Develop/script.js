// character values
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+-=;':,./<>?[]{}";

// function to generate the password
function generatePassword() {
  let passwordLength = window.prompt(
    "How long would you like your password to be? Choose between 8 and 128."
  );
  console.log(passwordLength);
  passwordLength = parseInt(passwordLength, 10);
  var randomPassword = "";

  while (passwordLength <= 7 || passwordLength >= 129) {
    alert("Please choose between 8 and 128 characters.");
    return generatePassword();
  }

  // variables
  var confirmUpperCase = window.confirm(
    "Would you like upper case letters in your password?"
  );
  var confirmLowerCase = window.confirm(
    "Would you like lower case letters in your password?"
  );
  var confirmNumbers = window.confirm(
    "Would you like numbers in your password?"
  );
  var confirmSpecialCharacters = window.confirm(
    "Would you like special characters in your password?"
  );
  console.log(confirmLowerCase);
  console.log(confirmUpperCase);
  console.log(confirmNumbers);
  console.log(confirmSpecialCharacters);


  if (
    confirmUpperCase === false &&
    confirmLowerCase === false &&
    confirmNumbers === false &&
    confirmSpecialCharacters === false
  ) {
    alert("You must choose at least one option! Try again.");
    // return generatePassword();
  }

  var instances = "";

  if (confirmUpperCase) {
    instances += upperCase;
  }
  if (confirmLowerCase) {
    instances += lowerCase;
  }

  if (confirmNumbers) {
    instances += numbers;
  }
  if (confirmSpecialCharacters) {
    instances += specialCharacters;
  }

  for ( var i = 0; i < passwordLength; i++) {
    random = Math.floor(Math.random() * instances.length);
    var key = instances[random];
    password = key;
  }

  document.querySelector("#password").value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
