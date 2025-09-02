let numbers=[2,5,1,6,8,4,8];

// let num=0;
// for (let number of numbers){
//     num +=number;
// }

const total=numbers.reduce((x,y)=> x+y,0)
console.log(total);