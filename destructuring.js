// Q-no-1
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};
let {firstName, lastName} = person;
console.log(person)


// Q-no-2
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};
 Destructuring
let {lastName : name} = person;
console.log(person)

// Q-no-3
const num =[1,2,3,4,5]
const [a,b,...rest]=num;
console.log( "a="+ a)
console.log("b="+b)
console.log("rest="+  rest)

// Q-no-4
const fruits = ["apple", "banana", "mango", "orange"];
const [a1 , ,a3] = fruits;
console.log(a1,a3);

Q-no-5
const details={
    name:"Ram",
    age:20,
    city:"Kathmandu"
}
const{name,city}= details;
console.log(name);
console.log(city);

// Q-no-6
const student = {
  student_name: "Sita",
  student_age: 22
};
const{student_name:name ,student_age:age}=student;
console.log(name);
console.log(age);

// Q-no-7
const user = {
  username: "admin"
};
const{username,age=18}=user;
console.log(username,age)

// Q-no-8
const data = {
  id: 101,
  info: {
    city: "Pokhara",
    country: "Nepal"
  }
};
const {info}=data
console.log(info.city)

// Q-no-9
function showUser({ name, age }) {
  console.log(name);
  console.log(age);
}
showUser({ name: "Ram", age: 20 });