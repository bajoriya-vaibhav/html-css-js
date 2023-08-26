const arr1 = [1,2,3,4,5,6,7,8,9];

// const arr2 = arr1.filter((num)=>{return num%2===0});

const arr3 = arr1.map((num)=>{return num*2});

// const arr4 = arr1.map((num)=>Math.sqrt(num));

// console.log(arr1,arr2,arr3,arr4)


// const multiply = (a,b)=>a*b;

// const arr5 = arr1.map((a) => {return multiply(a,2)})

// const countpostives = (array)=>{let count=0;for(let x of array){if(x>=0)count++;}return count;}


// console.log(countpostives([0,3,1,-2,...arr1,2]));
let x=-10;
console.log(arr1.map((num)=>num+x));