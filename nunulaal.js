
// Given an array of integers of size ‘n’, Our aim is to calculate the maximum sum of ‘k’ consecutive elements in the array.



// Input = {100, 200, 300, 400}, k = 2
// Output 700

// Input = {1, 4, 2, 10, 23, 3, 1, 0, 20}, k = 4 
// Output 39

// 4, 2, 10, 23

// 
// function slidingwindows(arr, n) {

//     let sum = 0;
//     let maxSum = 0;

//     for (let i = 0; i < n; i++) {
//         sum += arr[i];
//     }

//     maxSum = sum;


//     for (let i = n; i < arr.length; i++) {
//         sum = ((sum - arr[i - n]) + arr[i]);
//         if (maxSum < sum) maxSum = sum;
//     }

//     return maxSum;
// }

// console.log(slidingwindows([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
// console.log(slidingwindows([100, 200, 300, 400], 2));
// console.log(slidingwindows([100, 200, 300, 1000, 400, 900, 300], 2));









// function anagram(str1,str2){
//     if(str1.length !== str2.length) return false;

//     let obj1 = {};
//     let obj2 = {};

//     for(let value of str1){
//         obj1[value] = (obj1[value] || 0) + 1;
//     }

//     for(let value of str2){
//         obj2[value] = (obj2[value] || 0) + 1;
//     }

//     for(let key in obj1){
//         if(!obj2[key]) return false;

//         if(obj1[key] !== obj2[key]) return false;
//     }

//     return true;
// }

// console.log(anagram('aammm','mmmam'));
// console.log(anagram('rat','car'));
// console.log(anagram('11hj','h11j'));



// function countCommanChar(str1, str2) {
//     let obj1 = {};
//     let obj2 = {};
//     let count = 0;

//     for (let value of str1) { obj1[value] = (obj1[value] || 0) + 1 };
//     for (let value of str2) { obj2[value] = (obj2[value] || 0) + 1 };

//     for (let key in obj1) {
//         if (obj2[key]) count++;
//     }

//     return count;

// }

// console.log(countCommanChar('abbbcc', "ccb"))
// console.log(countCommanChar('abcd', "aad"))
// console.log(countCommanChar('geeksforgeeks', "platformforgeeks"))

// console.log(1)

// !function () {
//     console.log('2')
// }()



//     - function () {
//         console.log('3')
//     }()

// console.log('4')


// function one() {
//     setTimeout(() => {
//         console.log(2)
//     }, 2000)
// }

// function two() {
//     setTimeout(() => {
//         console.log(1)
//     }, 1000)
// }

// function three() {
//     return new Promise((resolve, reject) => {
//         resolve(one())
//     })
// }

// three().then(data =>
//     two()
// ).catch(err => console.log())

// function err() {
//     throw Error('Plese pass the name')
// }


// function name(str = err()) {
//     console.log(str);
// }

// name('sourabh');

// if (i === postion) {
        //     arr[i] = value;
        //     // arr[i - 1] = arr[i - 1 ];
        // } else {
        //     arr[i] = arr[i - 1];
        // }

function insertIntoFirst(arr, value, postion) { for (let i = arr.length; i >= 0; i--) {  if (i === postion) { arr[i] = value;  } else {   arr[i] = arr[i - 1];    } } return arr; }; console.log(insertIntoFirst([1, 2, 3, 4, 5], 0, 2));

// 1 2   3   4   5
//     2  3  4  5


let arr = [9, 3, 26, 5, 78, 2, 1, 69, 1];

let count = 0;

function quickSort(arr) {
    if(arr.length <= 1) return arr;
    let prov = arr[0];
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < prov) {
            left.push(arr[i]);
        } else {
            count++
            right.push(arr[i])
        }
    }
    return [...quickSort(left), prov, ...quickSort(right)]
}//Big O(n^2)

// console.log(quickSort([4,3,2,4,6,3,5,6,3,4,5,0]),'count :',count)

















































function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            count++
            if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    return arr;
}// Big O(n^2)

// console.log(bubbleSort([4,3,2,-4,6,3,-5,6,3,4,5,0]), 'count :',count);


// 3 2 3 6 4 5 








class Node {
	constructor(value, next) {
		this.value = value || null;
		this.next = next || null;
	}
}

class LL {
	constructor() {
		this.head = null;
		this.tail = null;
	}
	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
	}
}


const linkList = new LL();

linkList.push(12);
linkList.push(34);
linkList.push(45);
linkList.push(67);
linkList.push(78);
linkList.push(98);
linkList.push(100);

console.log(JSON.stringify(linkList.head))