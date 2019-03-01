function race(v1, v2, g) {
  let heureFin = [];
  if (v2 <= v1) {
    return null;
  }
  else {
    let heures = g/(v2-v1);
    let minutes = (g % (v2-v1)) * 60 / (v2-v1);
    let secondes = (((g % (v2-v1)) * 60) % (v2-v1)) * 60 / (v2-v1);
    
    heureFin.push(Math.floor(heures), Math.floor(minutes), Math.floor(secondes));
  }   
  return heureFin;
}
