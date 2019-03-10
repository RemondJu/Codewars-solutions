function toCamelCase(str) {
  let trigg = 0;
  let trigg2 = 0;
  for (let j = 0; j < str.length; j++) {
      if (str[j] === '-') {
          trigg++;
      } else if (str[j] === '_') {
          trigg2++;
      }
  }
  if (trigg > 0) {
      let string = str.split('-');
      for (let i = 1; i < string.length; i++) {
          string[i] = string[i].charAt(0).toUpperCase() + string[i].substr(1);
      }
      return string.join('');
  } else {
      let string = str.split('_');
      for (let i = 1; i < string.length; i++) {
          string[i] = string[i].charAt(0).toUpperCase() + string[i].substr(1);
      }
      return string.join('');
  }
}
