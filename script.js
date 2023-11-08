//making random number variable
let fortuneNumber = (Math.floor(Math.random()*(10)+1));
console.log(fortuneNumber);

//fortune number statements
if (fortuneNumber === 1) {
    console.log("Yes");
} else if (fortuneNumber === 2) {
    console.log("No");
} else if (fortuneNumber === 3) {
    console.log("It is uncertain");
} else if (fortuneNumber === 4 ) {
    console.log("Absolutely");
} else if ( fortuneNumber === 5) {
    console.log("Almost Certainly");
} else if (fortuneNumber === 6) { 
console.log("Almost Certainly Not");
} else if (fortuneNumber === 7){
    console.log("With Certainty ");
} else if (fortuneNumber === 8) {
    console.log("Unclear, try again");
} else if (fortuneNumber === 9) {
    console.log("The magic eightball says its foretold");
} else if (fortuneNumber === 10) {
    console.log("Its not going to happen");
}