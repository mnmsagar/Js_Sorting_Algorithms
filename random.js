function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivotIndex = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotIndex];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) {
            continue;
        }

        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
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




