//return the total number of smiling faces in the array
function countSmileys(arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
      if ((arr[i].charAt(0) === ':') || (arr[i].charAt(0) === ';')) {
          if ((arr[i].charAt(1) === ')') || (arr[i].charAt(1) === 'D')) {
              count++
          } else if ((arr[i].charAt(1) === '-') || (arr[i].charAt(1) === '~')) {
              if ((arr[i].charAt(2) === ')') || (arr[i].charAt(2) === 'D')) {
                  count++
              }

          }
      }
  }
  return count;
}
