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

let arr = [2,5,7,3,6,4];
console.log(arr);
console.log(quickSort(arr, 4));

