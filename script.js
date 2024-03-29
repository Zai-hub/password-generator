// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() { var length = parseInt(prompt("How many characters would you like your password to contain?"));

if (isNaN(length)) {
  alert("Password length must be provided as a number");
  return null;
}

if (length < 8 || length > 128) {
  alert("Password length must be between 8 and 128 characters");
  return null;
}

var includeSpecialCharacters = confirm("Click OK to confirm including special characters.");
var includeNumericCharacters = confirm("Click OK to confirm including numeric characters.");
var includeLowerCasedCharacters = confirm("Click OK to confirm including lowercase characters.");
var includeUpperCasedCharacters = confirm("Click OK to confirm including uppercase characters.");

if (!includeSpecialCharacters && !includeNumericCharacters && !includeLowerCasedCharacters && !includeUpperCasedCharacters) {
  alert("At least one character type must be selected");
  return null;
}

var passwordOptions = {
  length: length,
  includeSpecialCharacters: includeSpecialCharacters,
  includeNumericCharacters: includeNumericCharacters,
  includeLowerCasedCharacters: includeLowerCasedCharacters,
  includeUpperCasedCharacters: includeUpperCasedCharacters
};

return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;

}

// Function to generate password with user input
function generatePassword() {
var options = getPasswordOptions();

  if (!options) return "";

  var allCharacters = [];
  var guaranteedCharacters = [];
  var generatedPassword = "";

  if (options.includeSpecialCharacters) {
    allCharacters = allCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.includeNumericCharacters) {
    allCharacters = allCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.includeLowerCasedCharacters) {
    allCharacters = allCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  if (options.includeUpperCasedCharacters) {
    allCharacters = allCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  for (var i = 0; i < options.length; i++) {
    var character = getRandom(allCharacters);
    generatedPassword += character;
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    generatedPassword[i] = guaranteedCharacters[i];
  }

  return generatedPassword;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);