//** SWAP 1 ** 
function swap(arr, idx1, idx2){
    let temp = arr[idx1] //
    arr[idx1] = arr[idx2] //
    arr[idx2] = temp //
    return arr
}
console.log(swap([33,44], 0, 1))//[4,3]

//** SWAP2 ** ES6
[arr[0], arr[1]] = [arr[1], arr[0]];

