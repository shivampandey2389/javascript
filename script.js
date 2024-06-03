// Q1.
// let arr= [];
// let arr1=[];
// for(let i=1;i<=100;i++){arr.push(i)}
// console.log(arr)
// for (let index = 0; index < arr.length; index++) {
//   if(arr[index] % 2 ==0){
//     arr1.push(arr[index]);
//   }
// }
// console.log(arr1)

// Q2.
let arr= [];
let arr1=[];
for(let i=1;i<=100;i++){arr.push(i)}
let j=0;
while(j < arr.length){
  if(arr[j] >= 18){
    arr1.push(arr[j]);
  }
  j++;
}
console.log(arr1);