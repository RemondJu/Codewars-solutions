function inAscOrder(arr) {
  let arrInit = arr.toString();
  let sentence = '';
  arr.sort(function(a, b){
    return a - b;
  });
  console.log(arrInit, arr);
  if((arrInit === arr.toString()) || (arr.length <= 1)){
    sentence = true
  } else {
    sentence = false
  }
  return sentence;
}
