function countPositivesSumNegatives(input) {
  let count = 0;
  let sum = 0;
  let total = [];
  if (input === null){
      return total;
  }
  else if (input.length > 0){
      for (let i = 0; i < input.length; i++){
          if (input[i] > 0){
              count++;
          }
          else{
              sum += input[i];
          }    
      }
      total.push(count);
      total.push(sum);
      return total;
  }
  else {        
      return total;    
  }    
}
