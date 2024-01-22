//Part 1
//1. Take an array of numbers and return the sum.
let sum = 0;
function arr_sum(array) {
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
let array = [1,2,3,4,5];
let array_total = arr_sum(array);
console.log(array_total);

//2. Take an array of numbers and return the average.
let sum = 0;

function arr_avg(array) {
  for (let i = 0; i < array.length; i++) {
    sum += array[i] / array.length;
  }
  return sum;
}
let array = [1,2,3,4,5];
let array_total = arr_avg(array);
console.log(array_total);

//3. Take an array of strings and return the longest string.
let str_arr = ["Vanessa", "Felicia", "Dante", "Gabe", "Grace"];

function longString(arr) {
    let long = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if(arr[i].length > long.length){
            long = arr[i];
            }
        }
        return long;
    }
    let longest = longString(str_arr);
    console.log(longest);
