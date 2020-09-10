//swap 1
// function swap(arr, idx1, idx2){
//     let temp = arr[idx1] //
//     arr[idx1] = arr[idx2] //
//     arr[idx2] = temp //
//     return arr
// }
// console.log(swap([33,44], 0, 1))//[4,3]

//swap 2 ES6
//[arr[0], arr[1]] = [arr[1], arr[0]];



// //swap the elements in the array's order so the smallest number is at first and the largest number is at the last.

/////////////////////////////////////////////////
///////////////***  ***///////////////////
////////////////////////////////////////////////
//This is not the best bc it calculates unnecessary input(j+1) at the end.

// function bubble(arr){
//     for(let i = 0; i < arr.length ; i++){
//         for(let j = 0; j < arr.length; j++ ){
//             if(arr[j] > arr [j+1]){
//                 temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }
// console.log(bubble([37,45,29,4]))
// 



/////////////////////////////////////////////////
///////////////***  ***///////////////////
////////////////////////////////////////////////
// function bubble(arr){
//     for(let i = arr.length; i > 0 ; i--){
//         for(let j = 0; j < i-1; j++ ){
//             console.log(arr, arr[j], arr[j+1])
//             if(arr[j] > arr [j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//         console.log("1 round")
//     }
//     return arr
// }
// console.log(bubble([37,45,29,4]))




/////////////////////////////////////////////////
///////////////*** swap and bubble ***///////////////////
////////////////////////////////////////////////
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