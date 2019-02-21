function listSquared(m, n) {
  const result = [];
  for (let j = m; j <= n; j++){
      const divisors = [];
      for (let i = 1; i <= j; i++) {
          if (j % i === 0){
              divisors.push(i)
          }        
      }
      const squaredDiv = divisors.map(div => div * div)
      const addSquaredDiv = squaredDiv.reduce((acc, current) => acc + current)
      const sRoot = Math.sqrt(addSquaredDiv);
      if ((sRoot % 2 === 0 ) || (j === 1)){
          result.push([j, addSquaredDiv])
      }
  }
  return result
}
