1.1 O(1);
1.2 O(n);

_____________________________________________________________

2.

function isEven(value) {
  if (value % 2 == 0) {
    return true;
  } else
    return false;
}
}

O(1);

// Since arithmetic operations are constant t
// he function only would take fixed amount tof time 
//to determine boolean


_____________________________________________________________
3. function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
      const el1 = arr1[i];
      for (let j = 0; j < arr2.length; j++) {
          const el2 = arr2[j];
          if (el1 === el2) return true;
      }
  }
  return false;
}


O(n ^ 2)

//since we have nested for loop this is Polynomial 
// it is n^2 since we have 2 loops. if we had more nestend loops
// we would increase the power by the number of nested loops

________________________________

4. function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
      array[i] *= 2;
  }
  return array;
}

O(n) 

//The bigger the array the longer it would take to double all the numbers in array.

___________________________________

5.

function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
          return i;
      }
  }
}

O(n)

//The loop would run throguh all items in an array and get one that is matching
// the time that it would take to finish would increase linearly
// if array size increases

_____________________________________________________________

6. function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j < arr.length; j++) {
          console.log(arr[i] + ", " +  arr[j] );
      }
  }
}

O(n ^ 2)

//We have 2 nested loops

________________________________

7.
function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

      if (i === 1) {
          result.push(0);
      }
      else if (i == 2) {
          result.push(1);
      }
      else {
          result.push(result[i - 2] + result[i - 3]);
      }
  }
  return result;
}

O(n)

//The bigger the array the longer it would take it to finish

_____________________________________________________________
8.
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
      currentIndex = Math.floor((minIndex + maxIndex) / 2);
      currentElement = array[currentIndex];

      if (currentElement < item) {
          minIndex = currentIndex + 1;
      }
      else if (currentElement > item) {
          maxIndex = currentIndex - 1;
      }
      else {
          return currentIndex;
      }
  }
  return -1;
}


O(log(n))

// since every itteration is half the size of previus itteration it would take less and less time to go through the input

_____________________________________________________________

9. function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


O(1)

//Randomly selecting 1 number so it should take the same amount of time to finish

_____________________________________________________________

10.
function isWhat(n) {
  if (n < 2 || n % 1 != 0) {
      return false;
  }
  for (let i = 2; i < n; ++i) {
      if (n % i == 0) return false;
  }
  return true;
}

O(1)


// Checks if the inputed number is a prime number
//