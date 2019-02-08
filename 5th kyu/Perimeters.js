// Perimeter of squares in a rectangle Kata

const perimeter = n => {
  let result = 0;
  let squares = [];
  for (let i = 0; i <= n; i++){
    if (i < 2) {
      squares.push(1);
      result += squares[i] * 4
    } else {
      squares.push(squares[i-1]+squares[i-2]);
      result += squares[i] * 4;
    }
  }
  return result;
}
