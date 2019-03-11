function duplicateEncode(word){
  let tableau = word.split('');
  let indice = []
  for (let i = 0; i < tableau.length; i++){
    let count = 0;    
    for (var j = 0; j < tableau.length; j++){
      if (tableau[i].toLowerCase() === tableau[j].toLowerCase()){
        count++;
      }
    }
    indice.push(count);
  }    
  for (var i = 0; i < tableau.length; i++){
    if (indice[i] > 1){
      tableau[i] = ")";
    }
    else{
      tableau[i] = "(";
    }
  }
  return tableau.join('');
}
