const sqInRect = (lng, wdth) => {
  let result = [];
  let maxDist = 0;
  while ((lng > 0) && (wdth > 0)){
      maxDist = lng < wdth ? lng : wdth;
      result.push(maxDist)
      lng < wdth ? wdth -= maxDist : lng -= maxDist;
  }
  result.length === 1 ? result = null : result;
  return result;
}