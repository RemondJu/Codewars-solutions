const encode = (str,  n) =>
{
  let code = n.toString();
  let indexes = [];
  for (let i = 0; i < str.length; i++) {
    indexes.push(str[i].charCodeAt(0)-96);
  }
  return indexes.map((idx, index) => idx + parseInt(code[index % code.length]));
}
