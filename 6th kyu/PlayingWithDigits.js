const digPow = (n, p) => {
  let result = -1;
  let digits = n.toString();
  let operation = 0;
  for (let i =0; i<digits.length; i++){
      operation += Math.pow(parseInt(digits[i]), (p+i))
  }
  operation % n === 0 ? result = operation / n : result = -1;
  return result;
}
