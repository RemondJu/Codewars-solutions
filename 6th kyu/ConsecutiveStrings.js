function longestConsec(arr, num){
  let stringFinal = "";
  for (let i = 0; i < arr.length; i++){
      let string = "";
      let count = num + i;
      if (num <= arr.length){
          for (let j = i; j < count; j++){
              if (j < arr.length){
                  string += arr[j];
              }
          }
          if (string.length > stringFinal.length){
              stringFinal = string;
          }
      }        
  }   
  return stringFinal;         
}
