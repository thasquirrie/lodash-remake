const _ = {
  // Clamp
  // This method clamps number within the inclusive lower and upper bounds.
  clamp(number, lower, upper) {
    const num1 = Math.max(number, lower);
    const num2 = Math.min(num1, upper);
    return Math.min(num1, num2);
  },
  // inRange
  // Checks if a number is between start and up to, but not including, end. If start is not specified, it is set to start with start then set to 0. If start is greater than end the params are swapped to support negative ranges.
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
      return this.inRange(number, start, end);
    } else if (number >= start && number < end) {
      return true;
    }
      else if (start > end) {
      const temp = end;
      end = start;
      start = temp;
      return this.inRange(number, start, end);
    } else if(number < start || number > end) {
      return false;
    }
  },
  // words
  //Splits string into an array of words.
  words(word, pattern) {
    return word.split(' ');
  },
  //Pad
  //Pads string on the left and right sides if it's shorter than length. Padding characters are truncate can't be evenly divided by length.
  pad(str, desiredLength) {
    const diff = desiredLength - str.length;
    const newString = str.split('');
    if (diff > 0) {
      if (diff % 2 === 0) {
        const begSpaces = diff / 2;
        const endSpaces = begSpaces;
        for (let i = 0; i < begSpaces; i++) {
          newString.unshift(' ');
        }
        for (let j = 0; j < endSpaces; j++) {
          newString.push(' ')
        }
      } else {
        const begSpaces = (diff - 1) / 2;
        const endSpaces = begSpaces + 1;
        for (let i = 0; i < begSpaces; i++) {
          newString.unshift(' ');
        }
        for (let j = 0; j < endSpaces; j++) {
          newString.push(' ')
        }
      }
    } 
    return newString.join('');
  },
  //has
  //Checks if path is direct property of object.
  has(obj, key) {
    let hasValue = false;
    if (obj[key] !== undefined) {
      hasValue = true;
    }
    return hasValue;
  },
  //invert
  //Creates an object composed of the inverted keys nad values of object.
  invert(obj) {
    const invertedObj = {};
    for (key in obj) {
      const temp = key;
      const newVal = obj[key];
      key = newVal;
      invertedObj[key] = temp; 
    }
    return invertedObj;
  },
  //findKey
  //This method returns the key of the first element predicate returns truthy for instead of the element itself.
  findKey(obj, predicate) {
    let val = false;
    for (key in obj) {
      val = predicate(obj[key])
      if (val) {
        return key
      }
    }
    return undefined;
  },
  // drop
  //Creates a slice of array with n elements dropped from the beginning.
  drop(arr, noOfElements) {
    // if(noOfElements === undefined) {
    //   arr.shift(arr[0]);
    // }
    // for(let i = 0; i < noOfElements; i++) {
    //   arr.shift(arr[i]);
    // }
    // return arr;
     if (noOfElements === undefined) {
      arr.splice(0, 1);
    }
    arr.splice(0, noOfElements);
    return arr;
  },
  //dropWhile
  //Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsy. The predicate is invoked with three arguments: (value, index array)
  dropWhile(arr, predicate) {
    let dropNumber = arr.findIndex((element, index) => {
      return !predicate(element, index, arr);
    })
    // console.log(dropNumber)
    const dropArray = this.drop(arr, dropNumber);
    return dropArray;
  },
  //chunk
  //Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
  chunk(arr, size) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr.splice(0, size));
    }
    if (arr.length > 0) {
      newArr.push(arr);
    }
    return newArr;
  }
}




// Do not write or modify code below this line.
module.exports = _;