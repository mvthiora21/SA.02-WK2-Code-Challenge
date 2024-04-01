function createArray(start, end) {
    // creates an array of numbers from start to end
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);//creates an array of a specified length and maps indexes to numbers in a required range
}


const test1 = createArray(4, 7);
console.log(test1); // this will output numbers starting from number 4 to 7

const test2 = createArray(-4, 7);
console.log(test2); // this will output numbers starting from -4 to 7 ie -4,-3,-2,-1,0,1...all the way to 7

