const persistence = (num) => {
  let result = 0;
  let string = num.toString().split('');
  while (string.length > 1){
      operate = string.reduce((a, b) => a*b);
      string = operate.toString().split('');
      console.log(string);
      result++;
  }
  return result;
}
