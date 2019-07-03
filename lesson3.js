//"use strict";

//  confirm();


// // let question = confirm("Тебе есть 18 лет?");

// // let question2 = prompt("Тебе есть 18 лет?", "18");
// // console.log(question2);
// //  console.log(typeof question2);

// console.log(5 + "5");
// console.log(typeof (5 + "5"));

// console.log(5 - "5");
// console.log(5 * "5");
// console.log(5 / "5");
// console.log(5 == "5");
// console.log(Boolean(5));

// console.log(Boolean(5));
// console.log(!5); //преобразование типов
// console.log(!!5);
// console.log(!"js");

// //Преобразование строк

// console.log(String(10));
// console.log(String([12,2,10])); //masiv
// console.log(String(true));
// console.log(typeof(10 + ""));

// console.log(typeof(10 .toString())); //преобразование строки, переменной
// console.log(typeof Number("10"));
// console.log(typeof + "10");

// let n = "10";
// n *= 1;
// console.log(typeof n);

//мягкое преобразование

// console.log(parseInt("10ff px, 16"));
// console.log(parseFloat("10.5"));

//ветвление
/*

Если (жарко){
     одеваем шорты;
     одеваем майку;
} иначе {
    одеваем джинсы;
    одеваем куртку
     } 

*/

// if (true) console.log("Истина");
// if (falce) console.log("Этот код не выполнится");

let n = 3;
if (n === 5){
    console.log("command 1");
    
}else if(n === 4){
    console.log("command 2");
}else {
    console.log("command 3");
}

switch (4) {
    case 3:
    case 4: 
    case 5:
        console.log("3-5");
        break;
    case 6:
        console.log(7);
        break; // stopped working cikle
    default:
        console.log("не верно")
}

// тринарный оператор

let result = n === 3 ? 1:0;
console.log("result", result);