// Assignment Code

function generatePassword() {
  
// Prompt user to choose a number
  var pwLength = Number(prompt("How many characters would you like your password to be?"));

// Creates a loop for number length requirement
while (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) { 
  var pwLength = Number(prompt("Password length must be at least 8 - 128 characters. How many characters would you like your password to be?"));
}
// Confirm password length
alert(`Your password will have ${pwLength} characters`);

var confirmLowerCase = confirm("Would you like to use lowercase letters?");
var confirmUpperCase = confirm("Would you like to use uppercase letters?");


var lowerCase = ["abcdefghijklmnopqrstuvwxyz", true]
var allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "0123456789@#$";
var passwordMin = 8;
var passwordMax = 120;
var password = " ";

  console.log("Does this button work?")
  
  return password
}

//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected

//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria

//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);