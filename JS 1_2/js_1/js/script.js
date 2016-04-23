function  pow(base, exp) {
  var result = 1;

    for (var i = 0; i < exp; i++){
      result *= base;
}
    return result;
}

  var a = prompt('Enter the number');
  var b = prompt('Enter the exponent');

  var culculation = pow(a, b);
  console.log('Count of the exponentiation ' , culculation);
