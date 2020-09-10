//swap the elements in the array's order so the smallest number is at first and the largest number is at the last.

//TIME: O(N^)

//but with almost sorted array and using noSwap, it's almost linear O(N)
function bubbleSort(arr){
    let noSwaps;

    for( let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < i -1; j++){
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false
            }
        }
    }
    if(noSwaps) break;
}

//if there wasn't swap, then no need to swap in the future. 