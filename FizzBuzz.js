function fizzBuzz() {
  var index = 1;
  var array = [];
  while (index <= 100) {
    if (index % 3 === 0 && index % 5 === 0) {
      array.push("FizzBuzz");
    } else if (index % 5 === 0) {
      array.push("Buzz");
    } else if (index % 3 === 0) {
      array.push("Fizz");
    } else {
      array.push(index);
    }
    index++;
  }
  console.log(array);
}

fizzBuzz();
