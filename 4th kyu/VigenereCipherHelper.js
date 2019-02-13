function VigenèreCipher(key, abc) {
  this.encode = function (str) {
    let tempIdx = 0;
    let codedString = '';
    for (let i = 0; i < str.length; i++) {
      tempIdx = abc.indexOf(str[i]) + abc.indexOf(key[i % key.length]);
      if (abc.indexOf(str[i]) >= 0) {
        codedString += abc[tempIdx % abc.length];
      } else {
        codedString += str[i]
      }
    }
    return codedString;
  };

  this.decode = function (str) {
    let decodedString = '';
    let tempIdx = 0;
    for (let i = 0; i < str.length; i++) {
      tempIdx = (abc.indexOf(str[i]) + abc.length) - abc.indexOf(key[i % key.length]);
      if (abc.indexOf(str[i]) >= 0) {
        decodedString += abc[tempIdx % abc.length];
      } else {
        decodedString += str[i]
      }
    }
    return decodedString;
  };
}

/* var abc, key;
abc = "abcdefghijklmnopqrstuvwxyz";
key = "password"
c = new VigenèreCipher(key, abc);

console.log(c.encode('codewars'))
console.log(c.decode('rovwsoiv')) */
