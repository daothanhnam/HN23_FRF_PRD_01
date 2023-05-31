var arr = ["3", "5", "15"];

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (arr[i] % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log("Buzz");
//   }
// }

var newArr = [];

// forEach

arr.forEach(function (item, i, originalArr) {
  if (item % 3 === 0 && item % 5 === 0) {
    newArr.push("FizzBuzz");
  } else if (item % 3 === 0) {
    newArr.push("Fizz");
  } else {
    newArr.push("Buzz");
  }
});

// console.log(newArr);
//Map -  trả ra 1 arr mới có kích thước tương đương arr ban đòu
var newArr2 = arr.map(function (item, i, originalArr) {
  if (item % 3 === 0 && item % 5 === 0) {
    return "FizzBuzz";
  } else if (item % 3 === 0) {
    return "Fizz";
  } else {
    return "Buzz";
  }
});
// console.log(newArr2);

// Filter
var nums = [15, 2, 8, 36, 11, 4, 6, 27];

var evens = nums.filter(function (item, i, originalArr) {
  return item % 2 === 0;
});

var odds = nums.filter(function (item, i, originalArr) {
  return item % 2 === 1;
});
// console.log(evens);
// console.log(odds);

var sum = nums.reduce(function (accumulation, item, i, originalArr) {
  //   console.log(`acc:${accumulation}`, `item:${item}`);
  return accumulation + item;
}, -1);
// console.log(sum);

var input = [1, -4, 12, 0, -3, 29, -150];

var sumOfPositives2 = input.reduce(function (accumulator, item) {
  if (item > 0) {
    accumulator = accumulator + item;
  }
  return accumulator;
});

// console.log(sumOfPositives2);

var input2 = [12, 46, 32, 64];

var mean = input.reduce(
  function (acc, item, i, originalArr) {
    if (i < originalArr.length - 1) {
      return {
        mean: acc.mean + item,
      };
    } else {
      return {
        mean: (acc.mean + item) / originalArr.length,
      };
    }
  },
  { mean: 0 }
);

// console.log(mean);

var fullName = "George Raymond Richard Martin";

var initialName = fullName.split(" ").reduce(function (acc, item) {
  return acc + item.charAt(0).toUpperCase();
}, "");

console.log(initialName);

function myForEach(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr);
  }
}

// myForEach(arr, function (item, i, originalArr) {
//   if (item % 3 === 0 && item % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (item % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log("Buzz");
//   }
// });

function myMap(arr, fn) {
  var resultArr = [];
  for (var i = 0; i < arr.length; i++) {
    let result = fn(arr[i], i, arr);
    resultArr.push(result);
  }
  return resultArr;
}

console.log(
  myMap(arr, function (item, i, originalArr) {
    if (item % 3 === 0 && item % 5 === 0) {
      return "FizzBuzz";
    } else if (item % 3 === 0) {
      return "Fizz";
    } else {
      return "Buzz";
    }
  })
);



function myRuduce(arr, fn ) {
    
}
