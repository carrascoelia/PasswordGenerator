var specialChar = [
    "!" , "#" , " " , "$" , "%" , "^" , "&" , "*" , "(" , ")" , "*" , "+" ,
     "," , "-" , "." , "/" , ":" , ";" , "<" , "=" , ">" , "?" , "@" , "[" ,
     "]" , "^" , "_" , "`" , "{" , "|" , "}" , "~",
]

var numChar = [
    "0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9",
]


var upperCase = [
    "A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" ,
    "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , 
    "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z",
]

var lowerCase = [
    "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" ,"i" ,
    "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , 
    "s" , "t" , "u" , "v" , "w", "x" , "y", "z" ,
]

var answer = []
var yourPassword = []


document.getElementById("generate").onclick = function() {
    
    var answer = prompt("How many characters do you want your password to contain?");
        if(answer < 8 || answer > 120) {
            alert("Password MUST be longer than 8 characters and shorter than 120... TRY AGAIN!!!");
            return;
        }

    var specialChar = confirm("Do you want special characters in your password?");
        if (specialChar === true) { 
            console.log(specialChar);
            }

    var numChar = confirm("Do you want numbers in your password?");
        if (numChar) {
            console.log(numChar);
        }

    var upperCase = confirm("Do you want upper case characters in your password?");
        if (upperCase) {
            console.log(upperCase);
        }

    var lowerCase = confirm("Do you want lower case characters in your password?");
        if (lowerCase) {
            console.log(upperCase);
        }
    
    
}

    







console.log(specialChar);
console.log(numChar);
console.log(upperCase);
console.log(lowerCase);
console.log(answer);