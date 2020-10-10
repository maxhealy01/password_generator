// Assignment code here
var generatePassword = function(){
  // confirm desired character types
  var upperC = confirm("Would you like uppercase letters in your password?");
  var lowerC = confirm("Woud you like lowercase letters in your password?");
  var numC = confirm("Would you like numbers in your password?");
  var specialC = confirm("Would you like special characters in your password?");

  // Establish empty charset string to hold potential characters
  var charset = "";
  // Add the characters to the charset string depending on user input.
  if (upperC) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lowerC) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (numC) {
    charset += "012345679";
  }
  if (specialC) {
    charset += " !#$%&'()*+,-./:;<=>?@[]^_{|}~`";
  }
  if (charset === "") {
    window.alert("Sorry, you need more character types in your password.");
    generatePassword();
  }

  // Get the PW length and verify that it meets the requirements
  let pwLength = parseInt(prompt("How many characters long would you like your password to be?"));
  let pw = ""
  while (pwLength < 8 || (pwLength > 128) || isNaN(pwLength)) {
    pwLength = parseInt(prompt(
      "Your password must be between 8 and 128 characters. How many characters long would you like your password to be?")
      );
  }

  for (i = 0; i < pwLength; i++){
    pw += charset.charAt(Math.random() * charset.length);
  }

  return pw

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
