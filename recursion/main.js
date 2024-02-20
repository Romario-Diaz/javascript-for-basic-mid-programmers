//example 1

let number = 0;

while (number < 5) {
  console.log(number);
  number++;
}

// example 1 with recursion

function recursion(number) {
  console.log(number);
  if (number < 5) {
    return recursion(number + 1);
  } else {
    return 5;
  }
}

// structure of recursion function

// function recursion() {
//   if(/* validation */) {
//     // recursive calls
//   }else {
//     // normal calls without recursion
//   }
// }

// Example 2
const mininumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 16, 13, 534];
// let mininumber = 0;
// for (let index = 0; index < mininumbers.length; index++) {
//   mininumber = mininumbers[index];
//   console.log({ index, mininumber });
// }

// Example 2 with recursion
function recursive(numbersArray) {
  if (numbersArray.length != 0) {
    const firstNumber = numbersArray[0];
    console.log(firstNumber);
    numbersArray.shift();
    recursive(numbersArray);
  } else {
  }
}
