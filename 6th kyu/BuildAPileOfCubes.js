function findNb(m) {
  let total = 0;
  let count = 1;
  while (total < m){
    total += count * count * count;
    count++;      
  }
  if (total === m){
    return count - 1;
  }
  else {
    return (-1);
  }
}
