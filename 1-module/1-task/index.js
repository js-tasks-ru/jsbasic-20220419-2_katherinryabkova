function factorial(n) {
  if (n === 0 || n === 1) {
     return 1
  } else {
  let factorial = 1
  
  while (n > 1) {
  factorial = n * factorial;
  n = n - 1;
  }
  return factorial
  }
  }