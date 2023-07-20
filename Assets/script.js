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
  '.',
];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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
  'z',
];

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
  'Z',
];
var userchosencharacters = []
// Assignment Code
function generatePassword() {
  var password = []
  var length = parseInt(prompt("How long do you want the password to be? Must be greater than 8 characters less than 128"))
  if (length < 8 || length > 128 || Number.isNaN(length)) {
    alert("invalid length or input is not a number")
    return null
  }
  var hasUppercase = confirm("Click OK to include uppercase characters")
  var hasLowercase = confirm("Click OK to include lower case characters")
  var hasNumeric = confirm("Click OK to include numbers")
  var hasSpecial = confirm("Click OK to include special characters")
  if (!hasUppercase && !hasLowercase && !hasNumeric && !hasSpecial) {
    alert("you must include one character type, please try again")
    return null
  }
  if (hasUppercase) {
    userchosencharacters = userchosencharacters.concat(upperCasedCharacters)

  }
  if (hasLowercase) {
    userchosencharacters = userchosencharacters.concat(lowerCasedCharacters)
  }
  if (hasNumeric) {
    userchosencharacters = userchosencharacters.concat(numericCharacters)
  }
  if (hasSpecial) {
    userchosencharacters = userchosencharacters.concat(specialCharacters)
    
  }
  for (let i = 0; i < length; i++) {  
    password.push(userchosencharacters[Math.floor(Math.random()* userchosencharacters.length)])
  }
  return password.join("")
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
