function solution(digits){
  let arr = digits.toString().split('');
  let result = 0;
  for (let i = 0; i < arr.length - 4; i++){
    let digit = arr[i] + arr[i+1] + arr[i+2] + arr[i+3] + arr[i+4]
    if (parseInt(digit) > result){
      result = digit;
    }
  }
  return parseInt(result);
}
