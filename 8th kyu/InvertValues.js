function invert(array) {
  let inv = []; 
  inv = array.map(x => {
  if(x === 0){
    return x;
    }
  else {
      return -x;
    }
  });
      
  return inv;
}
