// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const counterArr = [0];
  const tempArr = [root, 's'];

  while(tempArr.length){
    if(tempArr.length === 1 && tempArr[0] === 's') return counterArr;
    if(tempArr[0] !== 's'){
      counterArr[counterArr.length-1]+=1;
      const node = tempArr.shift();
      tempArr.push(...node.children)
    }else{
      counterArr.push(0);
      const block = tempArr.shift();
      tempArr.push(block);
    }
  };
  // return counterArr
}

module.exports = levelWidth;
