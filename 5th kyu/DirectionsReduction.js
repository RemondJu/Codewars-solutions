function dirReduc(arr) {
  var opposites = {
    'NORTH': 'SOUTH',
    'SOUTH': 'NORTH',
    'EAST': 'WEST',
    'WEST': 'EAST',
  }

  return arr.reduce((ways, way) => {
    if (ways[ways.length - 1] === opposites[way]) {
      ways.pop()
    } else {
      ways.push(way)
    }
    return ways
  }, [])
}
