"use strict";

function functMath(a, b, plus, minus){
    let res = (a > b) ? minus (a, b) : plus (a, b);
    console.log(res);
}

functMath(
    6,
    2,
   function(a, b){return a + b;},
    function(a, b){return a - b}
    );
        
    

  let logUser = function (userData){
      if(userData === "admin"){
          return("Администратор");
     } else{
         return("Пользователь");
     }
    };

    let inputUser = function(user,  callback){
        let status = "user";
        if(user === "Andrej" ||  user === "Vasilij"){
            status = "admin";
        }
    return callback(status);
};


console.log(inputUser("Maxim", logUser));

// Область видимости

let myFunc = function(){
let n = 10;
let myFunc2 = function(){
console.log(n);
};

myFunc2();

};

myFunc();


function funcMath(){
    let a = 10;
    return function(){
        console.log( a * a);
    };
}

let mathPow = funcMath();
mathPow();
