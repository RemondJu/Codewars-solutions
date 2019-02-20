function foldTo(distance) {
  let thickness = 0.0001;
  let count = 0;
  if (distance <= 0){
    return null;
  } else {
    while (thickness < distance){
      thickness *= 2;
      count ++;
    }
    return count;
  }  
}
