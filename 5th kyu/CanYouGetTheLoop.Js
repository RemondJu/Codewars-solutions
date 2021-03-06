function loop_size(node){
  let visitedNodes = [];
  let idx = -1;
  while (node != null) {
    idx = visitedNodes.indexOf(node);
    if (idx < 0) {
      visitedNodes.push(node);
    } else {
      break;
    }
    node = node.getNext(); 
  }
  return (visitedNodes.length - idx);
}
