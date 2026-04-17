// Q-no-1
// function add(...rest){
//     return rest.reduce((a,b) => a+b , 0)
// }
// let result =add(1,2,3,4,5);
// console.log(result)


// Q-no 2
// const arr = [10, 20, 30, 40];
// const [ a ,...rest] = arr ;
// console.log(a)
// console.log(rest)

// Q-no 3
// const user = {
//      name: "Ram", 
//      age: 20, 
//      city: "Kathmandu"
//      };

// const {name,...rest} = user;
// console.log(name);
// console.log(rest);

// Q-no 4
// function result(name, ...marks) {
//     let total = marks.reduce((a, b) => a + b, 0);
//     return `${name} 
//     total marks = ${total}`;
// }
// console.log(result("Ram", 50, 60, 70));

// Q-no 5

// const a = [1,2];
// const b = [3,4,5];
// const merge =[...a,...b];
// console.log(merge)
// const [a1]= merge;
// console.log(a1);

// // Q-no 6
// const numbers = [5, 10, 15, 20, 25];
// const [a,b,...rest] = numbers;
// console.log(rest);


// Q-no 7
// function number(...num){
//     return Math.max(...num);
// }
// console.log(number(1,3,5,32,8,6,9));


// Q-no8
// const student = {
//   name: "Hari",
//   age: 22,
//   grade: "A",
//   city: "Pokhara"
// };
// const {name,...rest}=student;
// console.log(rest);


// Q-no 9

// function joinWords(...words) {
//     return words.join(" ");
// }

// console.log(joinWords("I", "Love", "you"));