function comp(arr1, arr2){
  if ((arr1 === null) || (arr2 === null)){
      return false;
  }
  else {
      arr1.sort(function(a, b) {
          return a - b;
      });
      arr2.sort(function(a, b) {
          return a - b;
      });
      let resultat = false;
      let count = 0;
      for (let i = 0; i < arr1.length; i++){
          if (arr1[i] === Math.sqrt(arr2[i])) {
              count++;
          }
      }
      if (count === arr1.length) {
          resultat = true;
      }
      else {
          resultat = false;
      }
      return resultat;
  }    
}
