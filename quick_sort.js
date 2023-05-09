const quickSort = (arr)=>{
    if(arr.length === 0){
        return [];
    }
    let pivot = arr[0];
    let leftSide = [];
    let rightSide = [];
    for(let i=1;i<arr.length;i++){
        if(pivot>arr[i]){
            leftSide.push(arr[i]);
        }
        else {
            rightSide.push(arr[i]);
        }
    }
    return quickSort(leftSide).concat(pivot, quickSort(rightSide));
}

// Test 1
let arr1 = [2,5,7,3,6,4];
console.log(quickSort(arr1));

// Test 2 
let arr2 = [4,8,2,7,3,7,9];
console.log(quickSort(arr2));

// Test 3 
let arr3 = [8,5,2,9,8,4,2,7,1,9];
console.log(quickSort(arr3))

