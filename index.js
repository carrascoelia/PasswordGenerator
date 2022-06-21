let specialChar = [
    "!" , "#" , " " , "$" , "%" , "^" , "&" , "*" , "(" , ")" , "*" , "+" ,
     "," , "-" , "." , "/" , ":" , ";" , "<" , "=" , ">" , "?" , "@" , "[" ,
     "]" , "^" , "_" , "`" , "{" , "|" , "}" , "~",
]

let numChar = [
    "0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9",
]


let upperCase = [
    "A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" ,
    "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , 
    "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z",
]

let lowerCase = [
    "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" ,"i" ,
    "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , 
    "s" , "t" , "u" , "v" , "w", "x" , "y", "z" ,
]

let answer = []

document.getElementById("generate").onclick = function() {
    prompt("How many characters do you want your password to contain?");
    if(answer < 8 || answer > 120) {
       alert("needs to be longer than 8 characters and shorter than 120"); 
    } 

}


console.log(specialChar);
console.log(numChar);
console.log(upperCase);
console.log(lowerCase);