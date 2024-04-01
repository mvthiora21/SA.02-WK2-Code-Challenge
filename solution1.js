function changeCase(inputString) {
    // will replace each letter in a different case using the expression
    return inputString.replace(/[a-zA-Z]/g, function(character) {
        // will check for uppercase letters
        return character === character.toUpperCase() ? character.toLowerCase() : character.toUpperCase();
    });
}


const inputString = 'The Quick Brown Fox';
const outputString = changeCase(inputString);//changes case of letters in the string
console.log(outputString); //presents output in opposite cases ie , changes uppercase to lowercase and vice-versa
