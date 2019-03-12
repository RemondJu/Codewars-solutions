function findOdd(A) {
  let odd = 0;
  for (let i = 0; i < A.length; i++){
    let count = 0;
    for (let j = 0; j < A.length; j++){
      if (A[j] === A[i]){
        count++;
      }    
  }
  if (count % 2 !== 0){
      odd = A[i];
    } 
  }
  return odd;
}
