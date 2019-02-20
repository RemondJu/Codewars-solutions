var Sudoku = function(data) 
{
  //   Private methods
  // -------------------------
  console.log(data);
  let duplicate = false;
  let tempArray = [];
  if (data.length > 1) {
    for (let i = 0; i < data.length; i++) {
      tempArray = data[i];
      for (let j = 0; j < tempArray.length; j++) {
        for (let k = i+1; k < data.length + i; k++) {
          if(tempArray[j] === data[k % data.length][j]){
            duplicate = true;
          }
        }
      }
    }
  } else {
    if (data[0][0] !== 1){
      duplicate = true;
    }
  }

  //   Public methods
  // -------------------------
  
  return {
    isValid: function() {
      let result = duplicate ? false : true;
      return result;
    }
  };
};

const goodSudoku1 = new Sudoku([
  [7,8,4, 1,5,9, 3,2,6],
  [5,3,9, 6,7,2, 8,4,1],
  [6,1,2, 4,3,8, 7,5,9],

  [9,2,8, 7,1,5, 4,6,3],
  [3,5,7, 8,4,6, 1,9,2],
  [4,6,1, 9,2,3, 5,8,7],
  
  [8,7,6, 3,9,4, 2,1,5],
  [2,4,3, 5,6,1, 9,7,8],
  [1,9,5, 2,8,7, 6,3,4]
]);

const goodSudoku2 = new Sudoku([
  [1,4, 2,3],
  [3,2, 4,1],

  [4,1, 3,2],
  [2,3, 1,4]
]);

const badSudoku1 = new Sudoku([
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9]
]);

const badSudoku2 = new Sudoku([
  [1,2,3,4,5],
  [1,2,3,4],
  [1,2,3,4],  
  [1]
]);

const badSudoku3 = new Sudoku([ 
  [1]
]);

const badSudoku4 = new Sudoku([ 
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 2, 3, 1, 5, 6, 4, 8, 9, 7 ],
  [ 3, 1, 2, 6, 4, 5, 9, 7, 8 ],

  [ 4, 5, 6, 7, 8, 9, 1, 2, 3 ],
  [ 5, 6, 4, 8, 9, 7, 2, 3, 1 ],
  [ 6, 4, 5, 9, 7, 8, 3, 1, 2 ],

  [ 7, 8, 9, 1, 2, 3, 4, 5, 6 ],
  [ 8, 9, 7, 2, 3, 1, 5, 6, 4 ],
  [ 9, 7, 8, 3, 1, 2, 6, 4, 5 ] 
])

console.log(goodSudoku1.isValid());
console.log(goodSudoku2.isValid());
console.log(badSudoku1.isValid());
console.log(badSudoku2.isValid());
console.log(badSudoku3.isValid());
console.log(badSudoku4.isValid());