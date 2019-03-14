String.prototype.toJadenCase = function () {
  let string = this.split(" ");
  for (let i = 0; i < string.length; i++){
    string[i] = string[i].charAt(0).toUpperCase() + string[i].substr(1, string[i].length);
    }
  return string.join(" ");
}
