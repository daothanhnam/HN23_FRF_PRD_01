let nums = [11, 22, 33, 44];

let john = {
  fullName: "John Doe ",
  base: 1000,
  overTime: 20,
  rate: 15,
  tax: 5,
  [Symbol.iterator]: function* () {
    //   [Symbol.iterator]: function () {
    //     let nums = Object.entries(this);
    //     let count = 0;
    //     return {
    //       next: function () {
    //         if (count < nums.length) {
    //           return {
    //             value: nums[count++],
    //             done: false,
    //           };
    //         } else {
    //           return {
    //             value: undefined,
    //             done: true,
    //           };
    //         }
    //       },
    //     };

    //   },
    let nums = Object.entries(this);
    for (let count = 0; count < nums.length; count++) {
      yield nums[count];
    }
  },
};

for (let item of john) {
  console.log(item);
}

let newArr = [...nums, ...john];

// console.log(newArr);

// Interator: là một funct cung cấp cách để duyệt qua từng phần tử của một collection
// chỉ một phần tử tại một thời điểm
function x() {
  let nums = [11, 22, 33, 44];
  let count = 0;
  return {
    next: function () {
      if (count < nums.length) {
        return {
          value: nums[count++],
          done: false,
        };
      } else {
        return {
          value: undefined,
          done: true,
        };
      }
    },
  };
}
// Generator: là một function đặc biệt được đánh dấu * , có chức năng tương tự iterator

function* x2() {
  let nums = [11, 22, 33, 44];
  for (let count = 0; count < nums.length; count++) {
    yield nums[count];
  }
}

// let obj = x();
// let obj = nums[Symbol.iterator]();
let obj = x2();

console.log(obj);

let data = obj.next();

while (data.done !== true) {
  console.log(data.value);
  data = obj.next();
}
