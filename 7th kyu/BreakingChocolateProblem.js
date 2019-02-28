function breakChocolate(n,m) {
  let total = 0;
  if ((n > 0) && (m > 0)){
    total = n * m - 1;
  }
  else{
    total = 0;
  }  
  return total;
}
