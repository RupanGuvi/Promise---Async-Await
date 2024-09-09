//! Syntax of promise
/*

let/const variablename = new Promise ((resolve,reject)=>{})
states:- 
1. Pending
2. Fullfilled/ Resolved
3. Rejected

*/
/*
const num = parseInt(prompt("Enter the number"));
const p = new Promise((resolve,reject)=>{
    if(num %2===0){
      resolve("Even number")
        
    }
    else{
       reject("The number is not a even number")
        
    }
})
//console.log(p);
p.then((data)=>console.log(data)).catch((error)=>console.log(error))
*/

//! 18 eligible to vote // not eligible to vote
/*
function foo(num){
     return new Promise((resolve,reject)=>{
        if(num>=18){
            resolve("Eligible to vote")
        }
        else{
            reject("Not Eligible to Vote")
        }
     })
}
foo(14).then((ele)=>console.log(ele)).catch((error)=>console.log(error))
*/

//! Promise Chaining
/*
function add(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(num+2),3000)
    })
}
add(2)
.then((data)=>{
    console.log(data); //4
    return add(data); //add(4)
})
.then((ele)=>{
    console.log(ele); // 6
    return add(ele); //add(6)
    
})
.catch((error)=>console.log(error))
*/

//!Promise.all
/*
const promise1 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("Promise 1 is resolved"), 3000);
  } else {
    setTimeout(() => reject("Promise 1 is rejected"), 3000);
  }
});

const promise2 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("Promise 2 is resolved"), 3000);
  } else {
    setTimeout(() => reject("Promise 2 is rejected"), 3000);
  }
});

const promise3 = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => resolve("Promise 3 is resolved"), 3000);
  } else {
    setTimeout(() => reject("Promise 3 is rejected"), 3000);
  }
});

Promise.all([promise1, promise2, promise3])
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//!promise .all settled

Promise.allSettled([promise1, promise2, promise3]).then(
  (data) => {
    data.forEach((result) => console.log(result));
  }
);

*/

//! async -await


