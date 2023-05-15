// Assignment Code

function generatePassword() {

// Prompt user to choose a number
  var pwLength = Number(prompt("How many characters would you like your password to be?"));

// Creates a loop for number length requirement
while (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) { 
  var pwLength = (prompt("Password length must be at least 8 - 128 characters. How many characters would you like your password to be?"));
}

// Confirm password length
alert("Your password will have " + (pwLength) + " " + "characters. ");

// Output of Confirm buttons on rest of requirement questions
var confirmLowerCase = confirm("Do you want to include lowercase letters? ");
if (confirmLowerCase) {
  alert("You chose lowercase letters.");
} else { 
  alert("You DID NOT choose lower case letters.")
}

var confirmUpperCase = confirm("Do you want to include UPPERCASE letters?");
if (confirmUpperCase) {
  alert("You chose UPPERCASE letters.");
} else { 
  alert("You DID NOT choose UPPER case letters.")
}

var confirmNumbers = confirm("Do you want to include numbers?");
if (confirmNumbers) {
  alert("You chose numbers.");
} else { 
  alert("You DID NOT choose numbers.")
}
var confirmSpecialChar = confirm("Do you want to include special characters?");
if (confirmSpecialChar) {
  alert("You chose special characters.");
} else { 
  alert("You DID NOT choose special characters.")
}

//message if not at least one of the requirement questions is met.
while (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSpecialChar) {
  alert("You must select at least one character type!");
  confirmLowerCase = confirm("Do you want to include lowercase letters? ");
  confirmUpperCase = confirm("Do you want to include UPPERCASE letters?");
  confirmNumbers = confirm("Do you want to include numbers?");
  confirmSpecialChar = confirm("Do you want to include special characters?");
}

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = ["!", "@", "#", "$", "%", "&", "*", "-", "_"];
var ifChosen = [ ];
      
if (confirmLowerCase) {
  ifChosen = ifChosen.concat(lowerCase)
}

if (confirmUpperCase) {
  ifChosen = ifChosen.concat(upperCase)
}

if (confirmNumbers) {
  ifChosen = ifChosen.concat(numbers)
}
  
if (confirmSpecialChar) {
  ifChosen = ifChosen.concat(specialChar)
}
console.log(ifChosen);

var finalPass = " ";

// randomGen contains the random chosen characters by the user's chosen length of password
for (var i = 0; i < pwLength; i++) {
  var randomGen =[Math.floor(Math.random() * ifChosen.length)];
//define the final password by joining it with the user's character type choices with random math equation.
  finalPass = finalPass + ifChosen[randomGen];
}
return finalPass; 
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);