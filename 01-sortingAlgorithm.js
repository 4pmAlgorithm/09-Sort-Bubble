// sorting is the process of rearranging the items in a collection so that the items are in some kind of order. 

// examples:
// Sorting numbers from smallest to largest
// Sorting names alphabetically
// Sorting movies based on release date

function sort(arr) {
    compare = (n1, n2) => n1 - n2
    let sor = arr.sort(compare)
    return arr
}
console.log(sort([7, 12, 4, 2]))

//https://www.toptal.com/developers/sorting-algorithms
//https://www.visualgo.net

//bubble sort
//selection sort
//insertion sort
//why is it important to learn these simpler sorting algorithms?



////////////////////////////////////////////
///////////////*** compare ***///////////////////
////////////////////////////////////////////
function compareStr(str1, str2){
    return str2.length - str1.length;
}
console.log(["cup", "computer", "piano", "microphone"].sort(compareStr))