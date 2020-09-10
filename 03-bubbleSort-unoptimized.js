///////////////////////////////////////////////////////////////////////
///////////////*** BUBBLE SORT QUESTION ***///////////////////////////
//////////////////////////////////////////////////////////////////////
//swap the elements in the array's order so the smallest number is at first and the largest number is at the last.

// pseudocode
// 1. start looping from with a variable called i the end of the array towards the beginning. 
// 2. start an inner loop with a variable called j from the beginning until i-1.
// 3. if arr[j] is greater than arr[j+1], swap those two values.
// 4. return the sorted array.


/////////////////////////////////////////////////
///////////////*** naive solution ***///////////////////
////////////////////////////////////////////////

//This is not the best bc it calculates unnecessary input(j+1) at the end.

//TIME: O(N^)

function bubble(arr){
    for(let i = 0; i < arr.length ; i++){
        for(let j = 0; j < arr.length; j++ ){
            if(arr[j] > arr [j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
console.log(bubble([37,45,29,4]))




///////////////////////////////////////////////////////////////////////
///////////////*** BUBBLE: compare and swap ***////////////////////////
//////////////////////////////////////////////////////////////////////

//this is unoptimized solution bc it will still check to swap even if there aren't any elements to swap.

function bubble(arr){
    for(let i = arr.length; i > 0 ; i--){
        for(let j = 0; j < i-1; j++ ){
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr [j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        console.log("1 round")
    }
    return arr
}
console.log(bubble([37,45,29,4]))




/////////////////////////////////////////////////////////////////////////////////////////
///////////////***  BUBBLE: compare and swap using swap helper func ES6 ***//////////////
/////////////////////////////////////////////////////////////////////////////////////////

//this is unoptimized solution bc it will still check to swap even if there aren't any elements to swap

function bubble(arr){

    function swap(arr, idx1, idx2){
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    for(let i = arr.length; i > 0 ; i--){
        console.log("i", i)
        for(let j = 0; j < i-1; j++ ){
            console.log("j", j)
            if(arr[j] > arr[j+1]){
                console.log("arr[j]", arr[j])
               swap(arr, j, j+1)
            }
        }
        console.log("1 round")
    }
    return arr
}
console.log(bubble([37,45,29,4]))