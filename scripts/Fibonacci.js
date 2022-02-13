function fibonacciGenerator(n) {
  var a = 0;
  var b = 1;
  var array = [];
  var total = 0;

  for (var i = 0; i < n; i++) {
    if (i === 0) {
      array.push(a);
    } else if (i === 1) {
      array.push(b);
    } else {
      total = a + b;
      array.push(total);
      a = b;
      b = total;
    }
  }

  return array;
}

console.log(fibonacciGenerator(20));
