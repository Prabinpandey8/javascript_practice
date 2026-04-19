//spread operator
//q-no-1
const user={
    name :"prabin",
    age:"14",
    address: "gulmi",
}
const profile={
    phone:9373842832738,
    gender:"M",
    isMarried:"True",
}
const UserProfile ={...user,...profile}
console.log(UserProfile);

//Q-no-2
const list1=[1,2,3,4,5,6];
const list2=[0,9,8,7,6,5,44,3];
const list3=[...list1,...list2];
console.log(list3);

//Q-no-3
const numbers = [1, 2, 3, 4, 5, 6];
const [one,two,...rest] = numbers;
console.log(one,two,...rest);
console.log(...rest);

//Q-no4
const arr = [10, 20, 30];
const add =[...arr,40]
console.log(arr);
console.log(add);

//Q-no5
const numbers = [5, 9, 2, 11, 3];
const number = Math.max(...numbers)
console.log(number)

//Q-no-6
const user = { name: "Prabin" };
const info = { age: 20, country: "Nepal" };
const userinfo ={...user,...info}
console.log(userinfo);

//Q-no-7
const product = {
  name: "Shoes",
  price: 1000
};
const newprice={
    ...product,
    price:1200
};
console.log(product)
console.log(newprice)


