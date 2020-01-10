// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for(let i = 0; i < arr.length ; i++){
    for(let j = 0; j < arr.length - i - 1 ; j++){
      if(arr[j] > arr[j+1]){
        const store = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = store; 
      }
    }
  }
  return arr
}

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++){
    let lowestIndex = i;
    for(let j = i+1; j < arr.length; j++){
      if(arr[j] < arr[lowestIndex]){
        lowestIndex = j
      };
    }
    if(lowestIndex !== i){
      const temp = arr[i];
      arr[i] = arr[lowestIndex];
      arr[lowestIndex] = temp; 
    }
  }
  return arr
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
