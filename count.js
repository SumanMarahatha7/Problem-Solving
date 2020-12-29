// Array of numbers and their length from 0 to 19

var upto_nineteen = [
  0,
  "one".length,
  "two".length,
  "three".length,
  "four".length,
  "five".length,
  "six".length,
  "seven".length,
  "eight".length,
  "nine".length,
  "ten".length,
  "eleven".length,
  "twelve".length,
  "thirteen".length,
  "fourteen".length,
  "fifteen".length,
  "sixteen".length,
  "seventeen".length,
  "eighteen".length,
  "nineteen".length
];

// List of numbers and their length of tenth multiple

var tenth = [
  "twenty".length,
  "thirty".length,
  "forty".length,
  "fifty".length,
  "sixty".length,
  "seventy".length,
  "eighty".length,
  "ninety".length
];

// function for number between 0 and 99

function below100(n) {

  if (n < 20)
    return proper[n];

  return tenth[n / 10 - 2 | 0] + proper[n % 10];
}

// function for number between 100 and 1000
function numberLength(n) {

  if (n < 100)
    return below100(n);

  var result = 0;
  var hundred_place = Math.floor(n / 100) % 10;
  var tens_place = Math.floor(n / 1000);
  var s = n % 100;

  if (n > 999)
    result+= below100(tens_place) + "thousand".length;
  if (h !== 0)
    result+= proper[hundred_place] + "hundred".length;
  if (s !== 0)
    result+= "and".length + below100(s);
  return result;
}

//function for calculating final result
function final_solution(n) {

  var num = 0;
  for (var i = 1; i <= n; i++) {
    num+= numberLength(i);
  }
  return num;
}

//calling function with value n = 500
final_solution(500);
