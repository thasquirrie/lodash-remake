const _ = {
  clamp(number, lower, upper) {
    const num1 = Math.max(number, lower);
    const num2 = Math.min(num1, upper);
    return Math.min(num1, num2);
  },
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
      return this.inRange(number, start, end);
    } else if (number >= start && number <= end) {
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
  words(word, pattern) {
    return word.split(' ');
  },
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
  has(obj, key) {
    let hasValue = false;
    if (obj[key] !== undefined) {
      hasValue = true;
    }
    return hasValue;
  },
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
  dropWhile(arr, predicate) {
    let dropNumber = arr.findIndex((element, index) => {
      return !predicate(element, index, arr);
    })
    // console.log(dropNumber)
    const dropArray = this.drop(arr, dropNumber);
    return dropArray;
  },
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