function getMiddle(s) {
  var indice = s.length / 2;
  var indice2 = indice - 1;
  var indice3 = Math.round(indice) - 1;
  if (s.length % 2 == 0){
    return (s[indice2] + s[indice]);
  }
  else {
    return (s[indice3]);
  }
}
