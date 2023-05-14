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

// Output of Confirm buttons on rest of requirement questions
var confirmLowerCase = confirm("Do you want to include lowercase letters? ");
if (confirmLowerCase) {
  alert("You chose lowercase letters.");
} else { 
  alert("You DID NOT choose lower case letters.")
}

var confirmUpperCase = confirm("Do you want to include UPPERCASE letters?");
var confirmNumbers = confirm("Do you want to include numbers?");
var confirmSpecialChar = confirm("Do you want to include special characters?");


//message if not at least one of the requirement questions is met.
while (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSpecialChar) {
  alert("You must select at least one character type!");
  confirmLowerCase = confirm("Do you want to include lowercase letters? ");
  confirmUpperCase = confirm("Do you want to include UPPERCASE letters?");
  confirmNumbers = confirm("Do you want to include numbers?");
  confirmSpecialChar = confirm("Do you want to include special characters?");
}

var lowerCase = ["abcdefghijklmnopqrstuvwxyz", true]
var allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "0123456789@#$";
var passwordMin = 8;
var passwordMax = 120;
var password = " ";

  console.log("Does this button work?")
  
  return password
}

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