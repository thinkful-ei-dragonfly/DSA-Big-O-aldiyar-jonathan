/* eslint-disable strict */
function counting(number) {
  let i = number;
  while (i > 0) {
    console.log(`${i}: Sheep jump over the fence`)
    i--;
  }
  console.log(`All sheep jumped`)

}
//linear O(n)
// counting(3);

function powerCalc(base, exponent) {
  let result = base;
  for (let i = 1; i < exponent; i++) {
    result = base * result;
  }
  return result;
}
//linear O(n)
// console.log(powerCalc(10, 4));

function reverse(string) {
  let arrayedString = string.split('');
  let newArray = [];
  for (let i = 0; i <= arrayedString.length; i++) {
    let lastChar = arrayedString[arrayedString.length - i];
    newArray = [...newArray, lastChar];
  }
  let reversedString = newArray.join('');
  
  return reversedString;
}
//linear O(n)
// console.log(reverse('qwerty'));

function nthNumber(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result = result + i;
  }

  return result;
}
// linear O(n)
// console.log(nthNumber(4));

function stringSplitter(string) {
  let arrayedString = string.split('');
  let separator = '/';
  let filteredArray = arrayedString.filter(character => {
    return character != '/';
  });

  return filteredArray.join('');


  
}

//linear O(n)
// console.log(stringSplitter('02/22/22'));

function fibonacci(number) {
  let result = 0;
  let var1 = 0;
  let var2 = 1;
  for (let i = 1; i < number; i++) {
    result = var2 + var1;
    var1 = var2;
    var2 = result;
  }
  return result;

}
//linear
// console.log(fibonacci(8));

function factorial(number) {
  let result = 1;
  while (number > 0) {
    result = number * result;
    
    number--;
  }
  return result;
}

//linear 
// console.log(factorial(4));

