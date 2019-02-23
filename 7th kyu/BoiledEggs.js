function cookingTime(eggs) {
  let time = 0;
  if (eggs > 0){
    for (let i = 1; i <= eggs; i+= 8){
      time += 5;
    }
  } else {
    time = 0;
  }  
  return time;
}
