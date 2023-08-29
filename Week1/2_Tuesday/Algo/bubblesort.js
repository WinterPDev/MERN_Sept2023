/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

    Stable sort
    
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.

    Space: O(1) constant.

    For review, create a function that uses BubbleSort to sort an unsorted array in-place.

    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

const numbersOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numbersReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given numbers in-place by mutating the array.
 * Best: O(n) linear when array is already sorted. (Smaller data sets are pretty good.)
 * Average: O(n^2) quadratic. (Larger the data set, the less efficient it gets! So it scales poorly.)
 * Worst: O(n^2) quadratic when the array is reverse sorted. 
 * @param {Array<number>} numbers
 * @returns {Array<number>} The given numbers after being sorted.
 */
// Solution by: Kenneth Francis
function bubbleSort(arr) {
    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            i -= 2
        } else {
            continue
        }
    }
    return arr
}

// Solution by: Austin Lee
function bubbleSort(numbers = []) {
    var temp;
    for (var j = 0; j < numbers.length - 1; j++) {
        for (var k = 0; k < numbers.length - j - 1; k++) {
            if (numbers[k] > numbers[k + 1]) {
                temp = numbers[k + 1];
                numbers[k + 1] = numbers[k];
                numbers[k] = temp;
            }
        }
    }
    return numbers;
}

// Solution by: Julio Gamboa
function bubbleSort(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }

    }

    return array;
}

console.log(bubbleSort(numbersOrdered));
console.log(bubbleSort(numbersRandomOrder));
console.log(bubbleSort(numbersReversed));
console.log(bubbleSort(numbersReversed));
console.log(bubbleSort(numbersRandomOrder));

console.log(bubbleSort(numbersReversed));

/*****************************************************************************/