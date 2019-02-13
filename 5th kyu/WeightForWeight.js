const orderWeight = strng => {
  let result = strng.split(' ');
  console.log(result);
  return result.sort(function compare(a, b) {
    if (addString(a) === addString(b)) {
      if (a < b) {
        return -1;
      } else {
        return 1;
      }
    } else if (addString(a) < addString(b)) {
      return -1;
    }
    return 1;    
  }).join(' ');
}

const addString = string => {
  let result = 0;
  for(let i = 0; i < string.length; i++){
    result += parseInt(string[i]);
  }
  return result;
}
