function accum(s) {
	let char = s.toLowerCase().split('');
  for (let i = 0; i < char.length; i++){
    let lettre = char[i];
    char[i] = char[i].toUpperCase() + char[i].repeat(i);
  }
  return char.join("-");
}
