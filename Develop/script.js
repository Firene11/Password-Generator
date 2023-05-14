// Assignment Code

function generatePassword() {
  var askLength = prompt("How many characters would you like your password to be?")
  var allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";
  var passwordMin = 8;
  var passwordMax = 120;
  var password = " ";

  if (passwordMin < 8 || > 120) {
    prompt("Password must be between 8 and 120 characeters");
  } 

  for (let i = 1; i <= 8; i++) {
    var char = Math.floor(Math.random()
                * allCharacters.length + 1);
      
    password += allCharacters.charAt(char)
}

  console.log("Does this button work?")
  


//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters

//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected

//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria

//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

  return password 
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
