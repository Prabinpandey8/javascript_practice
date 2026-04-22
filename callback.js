//Q-no1
function add(a, b, callback) {
  let sum = a + b;
  callback(sum);
}
add(5, 6, function(result) {
  console.log(result);
});

//Q-no-2
function multiply(a,b,call){
    let multi = a*b;
    call(multi)
}
multiply(5,6,function(result){
    console.log(result)
})


//Q-no-3
function name(firstname,lastname,callback){
    let  fullname= firstname +lastname;
    callback(fullname)
}
name("Prabin","Pandey" , function(result){
    console.log(result)
})


//Q-no-4
function sub(a,b,callback){
    subtract = a-b;
    callback(subtract);
}
sub(10,5,function(result){
    console.log(result)
})

//Q-no-5
function checkEven(number, callback) {
  if (number % 2 === 0) {
    callback("Even Number");
  } else {
    callback("Odd Number");
  }
}
function display(result) {
  console.log(result);
}
checkEven(10, display);


const add = (a, b, callback) => {
  const result = a + b;
  callback(result);
};
add(5, 3, (result) => {
  console.log(result);
});


const getData = (data) => {
  setTimeout(()=>{
    console.log(data)
  },3000)
}
getData(2);


const getData =(data1 ,data2) =>{
  setTimeout(()=>{
    console.log(data1);
    if(data2){
     data2();
    }
    
  },2000)
}
getData(2,()=>{
  getData(3),()=>{
    getData(4)
  }
});